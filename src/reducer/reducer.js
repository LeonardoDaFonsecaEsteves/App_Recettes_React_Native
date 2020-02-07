import FIREBASE from "../config/firebase";
import color from "../styles/color";
const uuidv1 = require("uuid/v1");

export const initialState = {
  type: "recettes",
  name: "",
  categorie: "",
  color: "",
  nb_pers: "",
  picture: "",
  time: "",
  temps: "",
  ingredients: "",
  preparation: ""
};

export function reducer(state, action) {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload
      };
    case "CATEGORIE":
      if (action.payload === "Aperitif") {
        return {
          ...state,
          categorie: action.payload,
          color: color.Aperitif
        };
      }
      if (action.payload === "Cocktails") {
        return {
          ...state,
          categorie: action.payload,
          color: color.Cocktails
        };
      }
      if (action.payload === "Dessert") {
        return {
          ...state,
          categorie: action.payload,
          color: color.Dessert
        };
      }
      if (action.payload === "Entrer") {
        return {
          ...state,
          categorie: action.payload,
          color: color.Entrer
        };
      }
      if (action.payload === "Plat") {
        return {
          ...state,
          categorie: action.payload,
          color: color.Plat
        };
      } else {
        return {
          ...state
        };
      }
    case "TIME":
      return {
        ...state,
        time: action.payload
      };
    case "TEMPS":
      return {
        ...state,
        temps: action.payload
      };
    case "INGREDIENTS":
      if (action.payload !== "") {
        let temp_ingredients = [...state.ingredients];
        temp_ingredients.push(action.payload);
        return {
          ...state,
          ingredients: temp_ingredients
        };
      } else {
        return {
          ...state
        };
      }
    case "NB_PERS":
      return {
        ...state,
        nb_pers: action.payload
      };
    case "PREPARATION":
      if (action.payload !== "") {
        const temp_preparation = [...state.preparation];
        temp_preparation.push(action.payload);
        return {
          ...state,
          preparation: temp_preparation
        };
      } else {
        return {
          ...state
        };
      }
    case "DELETE_INGREDIENTS":
      const temps_ing = state.ingredients;
      temps_ing.splice(action.payload, 1);
      return {
        ...state,
        ingredients: temps_ing
      };
    case "DELETE_PREPARATION":
      const temps_prepa = state.preparation;
      temps_prepa.splice(action.payload, 1);
      return {
        ...state,
        preparation: temps_prepa
      };
    case "DELETE_PICTURE":
      return {
        ...state,
        picture: ""
      };
    case "ANNULER":
      return {
        initialState
      };
    case "ADD":
      fire(state);
      return {
        ...initialState
      };
    case "EDIT":
      return action.payload;
    case "PICTURE": {
      return {
        ...state,
        picture: { uri: action.payload.uri, name: uuidv1() }
      };
    }
    default:
      return state;
  }
}
const fire = data => {
  FIREBASE.database()
    .ref("/")
    .push(data);
  uploadImage(data.picture);
};

const uploadImage = async result => {
  const response = await fetch(result.uri);
  const blob = await response.blob();
  var ref = FIREBASE.storage().ref("images/" + result.name);
  return ref.put(blob);
};
