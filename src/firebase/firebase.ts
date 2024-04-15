import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsTF_OMs2Uv2cT-GtqVhQUg3HVNiXCEsE",
  authDomain: "memory-card-99e66.firebaseapp.com",
  projectId: "memory-card-99e66",
  storageBucket: "memory-card-99e66.appspot.com",
  messagingSenderId: "892950645580",
  appId: "1:892950645580:web:dd21628b4881ea91fb9de9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
