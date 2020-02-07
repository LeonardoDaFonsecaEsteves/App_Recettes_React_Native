import React, { useState } from "react";
import { FlatList, TextInput, Button, Text, View } from "react-native";
import styles from "../../styles/styles";

export default function Ingredients({ state, dispatch }) {
  const [ing, setIng] = useState("");
  return (
    <>
      <View style={styles.ajouteIngredient}>
        <TextInput
          style={styles.ingredients}
          placeholder="Ingredient"
          value={ing}
          onChangeText={ingredients => setIng(ingredients)}
        />
        <View style={{ width: 70 }}>
          <Button
            title="+"
            color="green"
            onPress={() => {
              dispatch({ type: "INGREDIENTS", payload: ing }), setIng("");
            }}
          />
        </View>
      </View>
      <View style={styles.listAdd}>
        <Text style={styles.list_title}>Ingrédients</Text>
        <View style={styles.separator} />

        {state.ingredients !== "" ? (
          <FlatList
            data={state.ingredients}
            renderItem={({ item, index }) => (
              <View style={styles.list_view} key={index}>
                <Text>{item}</Text>
                <Button
                  title="X"
                  color="red"
                  onPress={() =>
                    dispatch({ type: "DELETE_INGREDIENTS", payload: index })
                  }
                />
              </View>
            )}
            keyExtractor={index => index}
          />
        ) : null}
      </View>
    </>
  );
}
