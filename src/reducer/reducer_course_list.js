import FIREBASE from "../config/firebase";

export const initialList = {
  type: "course",
  article: ""
};

export function switchList(list, action) {
  switch (action.type) {
    case "ADD_ARTICLE":
      FIREBASE.database()
        .ref("/")
        .push({ type: "course", article: action.payload });
      break;
    case "REMOVE_ARTICLE":
      const temp_remove = list.article;
      temp_remove.splice(action.payload, 1);
      return {
        ...list,
        article: temp_remove
      };
    default:
      return {
        initialList
      };
  }
}
