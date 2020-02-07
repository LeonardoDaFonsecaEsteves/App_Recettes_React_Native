import React from "react";
import { TextInput, View, Picker } from "react-native";
import styles from "../../styles/styles";

export default function Categorie({ state, dispatch }) {
  return (
    <>
      <TextInput
        placeholder="Nom de la recette"
        maxLength={20}
        style={styles.inputName}
        value={state.name}
        onChangeText={name => dispatch({ type: "NAME", payload: name })}
      />
      <View style={styles.row}>
        <Picker
          style={styles.option}
          selectedValue={state.categorie}
          onValueChange={categorie =>
            dispatch({ type: "CATEGORIE", payload: categorie })
          }
        >
          <Picker.Item label="Catégorie" />
          <Picker.Item label="Cocktails" value="Cocktails" />
          <Picker.Item label="Apéritif" value="Aperitif" />
          <Picker.Item label="Entrée" value="Entrer" />
          <Picker.Item label="Plat" value="Plat" />
          <Picker.Item label="Déssert" value="Dessert" />
        </Picker>
        <TextInput
          style={styles.option}
          placeholder="Temps min"
          keyboardType="numeric"
          value={state.time}
          onChangeText={time => dispatch({ type: "TIME", payload: time })}
        />
        <TextInput
          style={styles.option}
          placeholder="Temp °C"
          keyboardType="numeric"
          value={state.temps}
          onChangeText={temps => dispatch({ type: "TEMPS", payload: temps })}
        />
        <TextInput
          style={styles.option}
          placeholder="personnes"
          keyboardType="numeric"
          value={state.nb_pers}
          onChangeText={nb_pers =>
            dispatch({ type: "NB_PERS", payload: nb_pers })
          }
        />
      </View>
    </>
  );
}
