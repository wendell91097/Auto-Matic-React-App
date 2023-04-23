import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcBgJTLWbl-v-xcVC4LWUGDLMWNCzgqMs",
  authDomain: "auto-matic-react.firebaseapp.com",
  projectId: "auto-matic-react",
  storageBucket: "auto-matic-react.appspot.com",
  messagingSenderId: "625548311718",
  appId: "1:625548311718:web:a2ff9a038ce90145a68867"
};

export const Firebase = initializeApp(firebaseConfig);
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() }