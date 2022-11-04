// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDj7-ZTN_vicR4Wv6VaGs7MALd6wSz8uo",
  authDomain: "favourite-songs-app.firebaseapp.com",
  projectId: "favourite-songs-app",
  storageBucket: "favourite-songs-app.appspot.com",
  messagingSenderId: "220607209605",
  appId: "1:220607209605:web:56e0181034fc6de0afc9ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);