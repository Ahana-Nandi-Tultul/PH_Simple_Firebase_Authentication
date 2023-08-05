// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRmWtAAMvGARqtffY8opZUOyJCQcZ9dkI",
  authDomain: "simple-firebase-3dfd0.firebaseapp.com",
  projectId: "simple-firebase-3dfd0",
  storageBucket: "simple-firebase-3dfd0.appspot.com",
  messagingSenderId: "185511283188",
  appId: "1:185511283188:web:436f476aa352cc9c5711a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;