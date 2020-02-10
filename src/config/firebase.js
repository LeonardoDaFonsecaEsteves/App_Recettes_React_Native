import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "",
  authDomain: "recettes-ea3bc.firebaseapp.com",
  databaseURL: "https://recettes-ea3bc.firebaseio.com",
  storageBucket: "recettes-ea3bc.appspot.com",
  messagingSenderId: "381261694392",
  appId: "1:381261694392:web:5c8b0065c28470d8603b4d",
  measurementId: "G-0VK8J2VEVR"
};

export default firebase.initializeApp(firebaseConfig);
