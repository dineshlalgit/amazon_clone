import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAHg4wV_4iD_nToMyysgYtNmfoL9rBfs40",
  authDomain: "clone-938ef.firebaseapp.com",
  databaseURL: "https://clone-938ef-default-rtdb.firebaseio.com/",
  projectId: "clone-938ef",
  storageBucket: "clone-938ef.appspot.com",
  messagingSenderId: "120245096166",
  appId: "1:120245096166:web:ebf9b7353a799665007527"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


