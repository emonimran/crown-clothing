import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPjuSfNILtMvvJ3PCKLI5NoHYGkV4mjIc",
  authDomain: "crown-clothing-db-d77dd.firebaseapp.com",
  projectId: "crown-clothing-db-d77dd",
  storageBucket: "crown-clothing-db-d77dd.appspot.com",
  messagingSenderId: "431113342504",
  appId: "1:431113342504:web:52f9495a251366ac676f1d",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //if user data does not exists
  if (!userSnapshot.exists()) {
    // create/set the document with data from the userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error craeting the user", error.message);
    }
  }
  //if user data exists

  //return userDocRef
  return userDocRef;
};
