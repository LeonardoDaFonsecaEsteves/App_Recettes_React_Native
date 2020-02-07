import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
const styles = StyleSheet.create({
  ViewScreen: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  header: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  Background: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  detailHeader: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  textHeader: {
    marginLeft: 20,
    width: Dimensions.get("window").width / 4,
    height: Dimensions.get("window").height / 30
  },
  picture: {
    padding: 5,

    resizeMode: "cover",
    width: Dimensions.get("window").width - 10,
    height: Dimensions.get("window").height / 5
  },
  picture_add: {
    width: Dimensions.get("window").width - 20,
    height: Dimensions.get("window").height / 5,
    margin: 10
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  item: {
    backgroundColor: "silver",
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  title: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    fontSize: 25
  },
  inputName: {
    backgroundColor: "white",
    width: Dimensions.get("window").width - 10,
    height: (Dimensions.get("window").height * 5) / 100,
    borderRadius: 5,
    margin: 5,
    padding: 5
  },
  option: {
    width: (Dimensions.get("window").width * 24) / 100,
    height: (Dimensions.get("window").height * 5) / 100,
    backgroundColor: "white",
    padding: 5,
    margin: 1
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 3,
    alignItems: "center"
  },
  ajouteIngredient: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  ingredients: {
    backgroundColor: "white",
    width: Dimensions.get("window").width - 100,
    height: (Dimensions.get("window").height * 5) / 100,
    borderRadius: 5,
    margin: 1,
    padding: 5
  },
  ajouteEtape: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10
  },
  etapes: {
    backgroundColor: "white",
    width: Dimensions.get("window").width - 100,
    height: (Dimensions.get("window").height * 5) / 100,
    borderRadius: 5,
    padding: 5
  },
  list: {
    margin: 5,
    marginTop: 10,
    width: Dimensions.get("window").width - 50,
    height: (Dimensions.get("window").height * 5) / 100,
    borderRadius: 5,
    padding: 10,
    color: "black"
  },
  listAdd: {
    backgroundColor: "white",
    margin: 5,
    marginTop: 10,
    width: Dimensions.get("window").width - 15,
    height: (Dimensions.get("window").height * 25) / 100,
    borderRadius: 5,
    padding: 10
  },
  list_title: {
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "sans-serif-condensed",
    fontSize: 20
  },
  trashSUP: {
    width: 60,
    height: 60,
    position: "absolute",
    top: 0,
    right: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  trash: {
    width: 30,
    height: 30,
    position: "absolute",
    top: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  list_view: {
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 3,
    padding: 5,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 5,
    paddingBottom: (Dimensions.get("window").height * 8) / 100
  }
});

export default styles;
