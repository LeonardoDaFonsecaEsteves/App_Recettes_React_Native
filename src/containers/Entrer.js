import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../styles/styles";
import ScreenView from "../components/Screen.View";
import color from "../styles/color";

export default function Entrer() {
  return (
    <>
      <View style={{ backgroundColor: color.Entrer, padding: 5 }}>
        <Text style={styles.header}>Entrée</Text>
      </View>
      <ScreenView view={"Entrer"} color={color.Entrer} />
    </>
  );
}
