// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyASCCKS9dSmro2wmmBHRuCz5XpSv1v-nes",
  authDomain: "zameen-clone-reactapp.firebaseapp.com",
  projectId: "zameen-clone-reactapp",
  storageBucket: "zameen-clone-reactapp.appspot.com",
  messagingSenderId: "625501784459",
  appId: "1:625501784459:web:fb727feb12451ae67b478e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
