import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBjp071ZHbBhy6vBOOUiXF9-wNrNc8JcvA",
  authDomain: "disney-clone-razz28.firebaseapp.com",
  projectId: "disney-clone-razz28",
  storageBucket: "disney-clone-razz28.appspot.com",
  messagingSenderId: "573797711917",
  appId: "1:573797711917:web:bad1f000cfc0961be978a4",
  measurementId: "G-FJ2BTFCPRD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;