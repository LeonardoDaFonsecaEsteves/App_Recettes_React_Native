import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../styles/styles";
import ScreenView from "../components/Screen.View.js";
import color from "../styles/color";

export default function Aperitif() {
  return (
    <>
      <View style={{ backgroundColor: color.Aperitif, padding: 5 }}>
        <Text style={styles.header}>Apéritif</Text>
      </View>
      <ScreenView view={"Aperitif"} color={color.Aperitif} />
    </>
  );
}
