// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqaJhqE1PMLURCaw87EjE8GZ4gIiFr1eE",
  authDomain: "disney-plus-27f95.firebaseapp.com",
  projectId: "disney-plus-27f95",
  storageBucket: "disney-plus-27f95.appspot.com",
  messagingSenderId: "195183298907",
  appId: "1:195183298907:web:fdf3856780189613a2f27e",
  measurementId: "G-2JNZ1L2N46",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const storage = firebase.storage();

export { auth, provider, storage };
export default db;
