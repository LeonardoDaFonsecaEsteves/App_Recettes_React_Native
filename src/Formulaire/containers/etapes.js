import React, { useState } from "react";
import { FlatList, TextInput, Button, Text, View } from "react-native";
import styles from "../../styles/styles";

export default function Etapes({ state, dispatch }) {
  const [prepa, setPrepa] = useState("");

  return (
    <>
      <View style={styles.ajouteEtape}>
        <TextInput
          style={styles.etapes}
          underlineColorAndroid="transparent"
          placeholder="Préparation.... "
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
          value={prepa}
          onChangeText={preparation => setPrepa(preparation)}
        />
        <View style={{ width: 70 }}>
          <Button
            title="+"
            color="green"
            onPress={() => {
              dispatch({ type: "PREPARATION", payload: prepa }), setPrepa("");
            }}
          />
        </View>
      </View>
      <View style={styles.listAdd}>
        <Text style={styles.list_title}>Préparation</Text>
        <View style={styles.separator} />
        {state.preparation !== "" ? (
          <FlatList
            data={state.preparation}
            renderItem={({ item, index }) => (
              <View style={styles.list_view} key={index}>
                <Text>{item}</Text>
                <Button
                  title="X"
                  color="red"
                  onPress={() =>
                    dispatch({ type: "DELETE_PREPARATION", payload: index })
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
