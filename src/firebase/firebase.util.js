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

export const createUserProfileDocument = async (userAuth, additionalInfo) => {
  if (!userAuth) return;
  //const userRef = firestore.doc("/users/128abcdfr");
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get(); // returns snapshot

  console.log(snapshot);
  if (!snapshot.exists) {
    // add one
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log("error while creating user", error.message);
    }
  }
  return userRef;
  //console.log(firestore.doc('/users/128abcdfr'));// returns document reference
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
