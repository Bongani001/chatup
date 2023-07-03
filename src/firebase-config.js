import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgsVTJqpN6UOsHrU8OUebPBEqxEDMdeII",
  authDomain: "whatsup-0.firebaseapp.com",
  projectId: "whatsup-0",
  storageBucket: "whatsup-0.appspot.com",
  messagingSenderId: "1073467632742",
  appId: "1:1073467632742:web:ab97041bf3d4546d7e91a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore();