// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-yf.firebaseapp.com",
  projectId: "mern-estate-yf",
  storageBucket: "mern-estate-yf.appspot.com",
  messagingSenderId: "562383030961",
  appId: "1:562383030961:web:e836bcd1325f247305f090",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
