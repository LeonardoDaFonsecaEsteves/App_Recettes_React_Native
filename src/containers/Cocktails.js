import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../styles/styles";
import ScreenView from "../components/Screen.View";
import color from "../styles/color";

export default function Cocktails() {
  return (
    <>
      <View style={{ backgroundColor: color.Cocktails, padding: 5 }}>
        <Text style={styles.header}>Cocktails</Text>
      </View>
      <ScreenView view={"Cocktails"} color={color.Cocktails} />
    </>
  );
}
