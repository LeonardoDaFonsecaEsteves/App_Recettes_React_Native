import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../styles/styles";
import ScreenView from "../components/Screen.View";
import color from "../styles/color";

export default function Dessert() {
  return (
    <>
      <View style={{ backgroundColor: color.Dessert, padding: 5 }}>
        <Text style={styles.header}>Déssert</Text>
      </View>
      <ScreenView view={"Dessert"} color={color.Dessert} />
    </>
  );
}
