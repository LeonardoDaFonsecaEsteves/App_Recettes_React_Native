import React, { useState } from "react";
import { Button, View, Modal, Alert } from "react-native";
import styles from "../../styles/styles";
import CameraPage from "./photo";
import FIREBASE from "../../config/firebase";
export default function Ajouter_Button({ state, dispatch, edit, close }) {
  const [modal, setModal] = useState({ photo: false, upload: false });
  const add = () => {
    if (state.name !== "" && state.categorie !== "") {
      dispatch({ type: "ADD", payload: state });
      Alert.alert(
        ``,
        `La recettes ${state.name} à été ajouter`,
        [{}, { text: "OK" }],
        { cancelable: false }
      );
    } else {
      Alert.alert(
        ``,
        `Veuillez remplir tout le formulaire`,
        [{}, { text: "OK" }],
        { cancelable: false }
      );
    }
  };

  const update_recette = () => {
    FIREBASE.database()
      .ref("/")
      .child(state.key)
      .update(state);
    close();
  };

  return (
    <>
      {/* MODAL PHOTO */}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modal.photo}
        onRequestClose={() => {
          setModal({ ...modal, photo: !modal.photo });
        }}
      >
        <CameraPage
          dispatch={dispatch}
          close={() => setModal({ ...modal, photo: !modal.photo })}
        />
      </Modal>
      <View style={styles.buttons}>
        <Button
          title={edit ? "Modifier" : "Ajouter"}
          color="green"
          onPress={() => {
            edit ? update_recette() : add();
          }}
        />
        <Button
          title="Photo"
          color="blue"
          onPress={() => {
            setModal({ ...modal, photo: !modal.photo });
          }}
        />
        <Button
          title="Annuler"
          color="red"
          onPress={() => {
            dispatch({ type: "ANNULER" }), edit ? close() : null;
          }}
        />
      </View>
    </>
  );
}
