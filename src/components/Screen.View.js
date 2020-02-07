import React, { useEffect, useState } from "react";
import { ImageBackground, FlatList, ScrollView } from "react-native";
import FIREBASE from "../config/firebase";
import List from "./templates/list";
import Aperitif from "../img/Aperitif.jpg";
import Cocktails from "../img/Cocktails.jpg";
import Dessert from "../img/Dessert.jpg";
import Entrer from "../img/Entrer.jpg";
import Plat from "../img/Plat.jpg";

import styles from "../styles/styles";

export default function ScreenView({ view }) {
  const [state, setState] = useState([]);
  const img =
    view === "Aperitif"
      ? Aperitif
      : view === "Cocktails"
      ? Cocktails
      : view === "Dessert"
      ? Dessert
      : view === "Entrer"
      ? Entrer
      : Plat;

  useEffect(() => {
    FIREBASE.database()
      .ref("/")
      .once("value", function(data) {
        const temp = [];
        data.forEach(function(childData) {
          const data = childData.val();
          data.key = childData.key;
          temp.push(data);
        });
        setState(temp);
      });
  }, []);

  return (
    <ImageBackground
      source={img}
      resizeMode="cover"
      blurRadius={1}
      style={styles.Background}
    >
      <ScrollView style={{ marginBottom: 100 }}>
        {state.map((item, index) => {
          if (item.categorie === view) {
            return <List key={index} data={item} />;
          }
        })}
      </ScrollView>
    </ImageBackground>
  );
}
