import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD2sVbZDaErR8RmEGfeT44COYnOT_ds278",
  authDomain: "crwn-db-496af.firebaseapp.com",
  projectId: "crwn-db-496af",
  storageBucket: "crwn-db-496af.appspot.com",
  messagingSenderId: "723284219902",
  appId: "1:723284219902:web:d3152978c643903dfe52af",
  measurementId: "G-X52E1605R5",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt, 
        ...additionalData,
      });
    } catch (error) {
      console.log("error created user", error.message);
    }
  }
 
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
