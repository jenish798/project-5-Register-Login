// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2fQPUR1y0IlayBMEmK9q8VFo2zV8uD34",
  authDomain: "registerlogin-cdd57.firebaseapp.com",
  projectId: "registerlogin-cdd57",
  storageBucket: "registerlogin-cdd57.appspot.com",
  messagingSenderId: "297503441481",
  appId: "1:297503441481:web:3f4894f995cda7b575f598",
  measurementId: "G-F0G3N3N4YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);