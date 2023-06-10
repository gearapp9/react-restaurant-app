import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { User } from "../../models/User";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA5JQYO2Hs5A90KC-vPjkU071hEVGMcH10",

  authDomain: "restaurants-app-83e6f.firebaseapp.com",

  projectId: "restaurants-app-83e6f",

  storageBucket: "restaurants-app-83e6f.appspot.com",

  messagingSenderId: "393363829624",

  appId: "1:393363829624:web:c7de7ad5823fbba43e8e8d",

  measurementId: "G-MQTEKP4KK1",
};

// Initialize Firebase
/*three steps
getauth
create provider with custom paraaters
create function with the signinmethods
*/
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const signWithGoogle = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const getUserDoc = async (userAuth: User) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const userAt = new Date();

    try {
      const userDoc = await setDoc(userDocRef, {
        displayName,
        email,
        userAt,
      });
      console.log(userDoc);
    } catch (error) {
      console.log("error creating doc");
    }
  }
};

export const createAuthUserEmailPass = async (
  email: string,
  password: string
) => {
  if(!email || !password) return
  return await createUserWithEmailAndPassword(auth,email, password);
  
};
