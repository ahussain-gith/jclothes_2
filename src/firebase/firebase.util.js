import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5l6Gw58rEvIe8ChClYgdRbFG9Fwlx-C4",
  authDomain: "crown-db-9e92a.firebaseapp.com",
  databaseURL: "https://crown-db-9e92a.firebaseio.com",
  projectId: "crown-db-9e92a",
  storageBucket: "crown-db-9e92a.appspot.com",
  messagingSenderId: "1076853875332",
  appId: "1:1076853875332:web:64830a7efbed701fe518d1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
