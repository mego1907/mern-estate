// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.VITE_FIREBASE_API_KEY,
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d9da8.firebaseapp.com",
  projectId: "mern-estate-d9da8",
  storageBucket: "mern-estate-d9da8.appspot.com",
  messagingSenderId: "632758026089",
  appId: "1:632758026089:web:766c98a297149b184e87f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);