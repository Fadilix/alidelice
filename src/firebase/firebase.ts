import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkd8yHdnZQ9QzLqqVrKhM27bmSMBEN7nk",
  authDomain: "xbetrecharge-17c51.firebaseapp.com",
  projectId: "xbetrecharge-17c51",
  storageBucket: "xbetrecharge-17c51.appspot.com",
  messagingSenderId: "721236533121",
  appId: "1:721236533121:web:fb6b12fe67c3daebd3d280",
  measurementId: "G-JBREB6T9K4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
