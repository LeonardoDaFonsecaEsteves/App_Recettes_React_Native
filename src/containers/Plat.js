import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from "../styles/styles";
import ScreenView from "../components/Screen.View";
import color from "../styles/color";

export default function Plat() {
  return (
    <>
      <View style={{ backgroundColor: color.Plat, padding: 5 }}>
        <Text style={styles.header}>Plat</Text>
      </View>
      <ScrollView>
        <ScreenView view={"Plat"} color={color.Plat} />
      </ScrollView>
    </>
  );
}
