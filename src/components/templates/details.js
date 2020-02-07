import React, { useState, useReducer } from "react";
import {
  Text,
  Image,
  View,
  Button,
  TouchableHighlight,
  Alert
} from "react-native";
import styles from "../../styles/styles";
import ViewPicture from "./viewPicture";
import ViewEdit from "./viewEdit";
import FIREBASE from "../../config/firebase";
import { initialList, switchList } from "../../reducer/reducer_course_list";
import Icon from "react-native-vector-icons/Ionicons";

const Details = ({ data, timer, display }) => {
  const [state, dispatch] = useReducer(switchList, initialList);
  const [modal, setModal] = useState({ edit: false, picture: false });

  const close_picture = () => {
    setModal({ ...modal, picture: !modal.picture });
  };
  const close_edit = () => {
    setModal({ ...modal, edit: !modal.edit });
  };

  const sup = () => {
    Alert.alert(
      `Attention supression`,
      `Confirmé la supression de ${data.name}`,
      [
        { text: "ANNULER" },
        {
          text: "SUPRIMER",
          onPress: () =>
            FIREBASE.database()
              .ref("/")
              .child(data.key)
              .remove()
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <View style={{ backgroundColor: data.color, opacity: 0.9 }}>
        <View style={{ margin: 5 }}>
          {data.picture ? (
            <TouchableHighlight
              onPress={() => setModal({ ...modal, picture: !modal.picture })}
            >
              <Image
                source={{
                  uri: `https://firebasestorage.googleapis.com/v0/b/recettes-ea3bc.appspot.com/o/images%2F${data.picture.name}?alt=media&token=30cd81b2-608d-42de-8cd3-1eacac6ff0ac`
                }}
                style={styles.picture}
              />
            </TouchableHighlight>
          ) : null}
        </View>
        <View
          style={{
            margin: 2,
            marginTop: 5,
            borderRadius: 5,
            justifyContent: "space-between",
            flexDirection: "row"
          }}
        >
          <Text style={styles.textHeader}>
            <Icon size={25} name={"md-people"} />
            {data.nb_pers}
          </Text>

          <Text style={styles.textHeader}>
            <Icon size={25} name={"md-clock"} />
            {data.time} Minutes
          </Text>
          <Text style={styles.textHeader}>
            <Icon size={25} name={"md-thermometer"} />
            {data.temps} °C
          </Text>
        </View>
        <View
          style={{
            margin: 2,
            marginTop: 5,
            borderRadius: 5,
            padding: 10
          }}
        >
          <Text style={styles.list_title}>Ingrédients</Text>
          <View style={styles.separator} />
          {data.ingredients !== ""
            ? data.ingredients.map((value, index) => {
                return (
                  <View style={styles.list_view} key={index}>
                    <Text>{value}</Text>
                    <Icon
                      onPress={() => {
                        dispatch({ type: "ADD_ARTICLE", payload: value }),
                          Alert.alert(
                            `L'ingrédient ${value} a étè ajouté a votre panier`
                          );
                      }}
                      size={25}
                      name={"md-basket"}
                    />
                  </View>
                );
              })
            : null}
        </View>
        <View
          style={{
            margin: 2,
            marginTop: 5,
            borderRadius: 5,
            padding: 10
          }}
        >
          <Text style={styles.list_title}>Préparation</Text>
          <View style={styles.separator} />
          {data.preparation !== ""
            ? data.preparation.map((value, index) => {
                return (
                  <View style={styles.list_view} key={index}>
                    <Text>
                      Etape {index + 1} , {value}
                    </Text>
                  </View>
                );
              })
            : null}
        </View>
        <View
          style={{
            margin: 2,
            marginTop: 5,
            borderRadius: 5,
            padding: 10
          }}
        >
          <View style={styles.detailHeader}>
            <Button
              title="modifier"
              color="green"
              onPress={() => setModal({ ...modal, edit: !modal.edit })}
            />
            <Button
              title={!display ? "Enfourne" : "Retire"}
              color={!display ? "blue" : "red"}
              onPress={() => timer()}
            />
            <Button title="Suprimer" color="red" onPress={() => sup()} />
          </View>
        </View>
      </View>
      <ViewEdit data={data} modal={modal.edit} close={() => close_edit()} />
      <ViewPicture
        uri={data.picture.name}
        modal={modal.picture}
        close={() => close_picture()}
      />
    </>
  );
};

export default Details;
