// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgazWLtYOaBmo-2BePOb-g14ERrRgyEDY",
  authDomain: "videoai-48b94.firebaseapp.com",
  projectId: "videoai-48b94",
  storageBucket: "videoai-48b94.appspot.com",
  messagingSenderId: "1046317238142",
  appId: "1:1046317238142:web:20ffb83c2812840ab9552f",
  measurementId: "G-CBXV9DHX90",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
