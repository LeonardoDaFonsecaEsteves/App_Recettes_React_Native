import React, { useEffect, useState } from "react";
import { ScrollView, Text, View, Alert } from "react-native";
import styles from "../styles/styles";
import color from "../styles/color";
import FIREBASE from "../config/firebase";
import Icon from "react-native-vector-icons/Ionicons";

const List_course = () => {
  const [List_course, setList_course] = useState([]);
  useEffect(() => {
    FIREBASE.database()
      .ref("/")
      .on("value", function(data) {
        const temp = [];
        data.forEach(function(childData) {
          const data = childData.val();
          data.key = childData.key;
          temp.push(data);
        });
        setList_course(temp);
      });
  }, []);
  const sup = value => {
    Alert.alert(
      ``,
      `Suprimé l'ingrédient ${value.article} ?`,
      [
        { text: "ANNULER" },
        {
          text: "SUPRIMER",
          onPress: () =>
            FIREBASE.database()
              .ref("/")
              .child(value.key)
              .remove()
        }
      ],
      { cancelable: false }
    );
  };

  return (
    <>
      <View style={{ backgroundColor: color.List, padding: 5 }}>
        <Text style={styles.header}>Liste de course</Text>
      </View>
      <ScrollView>
        {List_course.map((value, index) => {
          if (value.type === "course") {
            return (
              <View key={index} style={styles.list_view}>
                <Text>{value.article}</Text>
                <Icon size={25} onPress={() => sup(value)} name={"md-close"} />
              </View>
            );
          }
        })}
      </ScrollView>
    </>
  );
};

export default List_course;
