import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_HCbx6aqOeYOrBzvFH-e_IlELXs1m6R8",
  authDomain: "alidelice-c23f3.firebaseapp.com",
  projectId: "alidelice-c23f3",
  storageBucket: "alidelice-c23f3.appspot.com",
  messagingSenderId: "351757411413",
  appId: "1:351757411413:web:5300c48af685508b06a0dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
