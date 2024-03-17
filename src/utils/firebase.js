// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8LvTJIZWmB-t5rbbN6KJF27TMZZkfCLQ",
  authDomain: "netflixgpt-8a51f.firebaseapp.com",
  projectId: "netflixgpt-8a51f",
  storageBucket: "netflixgpt-8a51f.appspot.com",
  messagingSenderId: "472088522576",
  appId: "1:472088522576:web:21331812d30ccaa8ce8655",
  measurementId: "G-CBN6RRXZZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();