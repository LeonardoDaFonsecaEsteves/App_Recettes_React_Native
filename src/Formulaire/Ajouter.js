import React, { useReducer, useState, useEffect } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
  Alert,
  TouchableHighlight
} from "react-native";
import styles from "../styles/styles.js";
import Ajouter_Button from "./containers/ajouterButton.js";
import Categorie from "./containers/categorie.js";
import Ingredients from "./containers/ingredients.js";
import Etapes from "./containers/etapes.js";
import color from "../styles/color.js";
import { reducer, initialState } from "../reducer/reducer.js";
import trash from "../../assets/icon/trash.png";
import ViewPicture from "../components/templates/viewPicture.js";
import img from "../img/Ajouter.jpg";

export default function Ajouter({ edit, data, close }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (edit) dispatch({ type: "EDIT", payload: data });
  }, []);

  const closeModal = () => {
    setModal(!modal);
  };

  const sup = () => {
    Alert.alert(
      ``,
      `Suprimé la photo ?`,
      [
        { text: "ANNULER" },
        {
          text: "SUPRIMER",
          onPress: () => dispatch({ type: "DELETE_PICTURE" })
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <ImageBackground
      source={img}
      resizeMode="cover"
      blurRadius={1}
      style={styles.Background}
    >
      <View style={{ backgroundColor: color.Ajouter, padding: 5 }}>
        <Text style={styles.header}>
          {edit ? "Modifier la recette" : "Nouvelle recette"}
        </Text>
      </View>

      <ScrollView style={styles.ViewScreen}>
        <Categorie state={state} dispatch={dispatch} />
        <Ingredients state={state} dispatch={dispatch} />
        <Etapes state={state} dispatch={dispatch} />
        {state.picture !== "" ? (
          <View>
            <TouchableHighlight onPress={() => setModal(!modal)}>
              <ImageBackground
                source={{ uri: state.picture.uri }}
                style={styles.picture_add}
              >
                <TouchableHighlight
                  style={styles.trashSUP}
                  onPress={() => sup()}
                >
                  <Image source={trash} style={styles.trash} />
                </TouchableHighlight>
              </ImageBackground>
            </TouchableHighlight>
          </View>
        ) : null}
        <Ajouter_Button
          close={() => close()}
          edit={edit}
          state={state}
          dispatch={dispatch}
        />
      </ScrollView>
      <ViewPicture
        uri={state.picture.uri}
        modal={modal}
        close={() => closeModal()}
      />
    </ImageBackground>
  );
}
