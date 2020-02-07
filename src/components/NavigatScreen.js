import React from "react";
import { View, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Ajouter from "../Formulaire/Ajouter";
import Cocktails from "../containers/Cocktails";
import Aperitif from "../containers/Aperitif";
import Entrer from "../containers/Entrer";
import Plat from "../containers/Plat";
import Dessert from "../containers/Dessert";
import color from "../styles/color";
import List_course from "../containers/List_course";

const NavigatScreen = createMaterialBottomTabNavigator(
  {
    Ajoute: {
      screen: Ajouter,
      navigationOptions: {
        tabBarLabel: "Ajouter",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <StatusBar hidden={true} />
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-add-circle-outline"}
            />
          </View>
        ),
        barStyle: { backgroundColor: color.Ajouter }
      }
    },
    Cocktails: {
      screen: Cocktails,
      navigationOptions: {
        tabBarLabel: "Cocktails",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <StatusBar hidden={true} />
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-beer"} />
          </View>
        ),
        barStyle: { backgroundColor: color.Cocktails }
      }
    },
    Aperitif: {
      screen: Aperitif,
      navigationOptions: {
        tabBarLabel: "Apéritif",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <StatusBar hidden={true} />
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-pizza"} />
          </View>
        ),
        barStyle: { backgroundColor: color.Aperitif }
      }
    },
    Entrer: {
      screen: Entrer,
      navigationOptions: {
        tabBarLabel: "Entrée",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <StatusBar hidden={true} />
            <Icon style={[{ color: tintColor }]} size={25} name={"ios-rose"} />
          </View>
        ),
        barStyle: { backgroundColor: color.Entrer }
      }
    },
    Plat: {
      screen: Plat,
      navigationOptions: {
        tabBarLabel: "Plat",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <StatusBar hidden={true} />

            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-restaurant"}
            />
          </View>
        ),
        barStyle: { backgroundColor: color.Plat }
      }
    },
    Dessert: {
      screen: Dessert,
      navigationOptions: {
        tabBarLabel: "Déssert",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <StatusBar hidden={true} />
            <Icon
              style={[{ color: tintColor }]}
              size={25}
              name={"ios-ice-cream"}
            />
          </View>
        ),
        barStyle: { backgroundColor: color.Dessert }
      }
    },
    ListCourse: {
      screen: List_course,
      navigationOptions: {
        tabBarLabel: "Liste",
        tabBarIcon: ({ tintColor }) => (
          <View>
            <StatusBar hidden={true} />
            <Icon
              onPress={() => dispatch({ type: "SAVE_ARTICLE" })}
              style={[{ color: tintColor }]}
              size={25}
              name={"md-basket"}
            />
          </View>
        ),
        barStyle: { backgroundColor: color.List }
      }
    }
  },
  {
    initialRouteName: "Ajoute",
    activeColor: "#FFFFFF",
    inactiveColor: "#000000"
  }
);

export default createAppContainer(NavigatScreen);
