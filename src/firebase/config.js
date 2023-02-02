// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZO9Ig0LXa8VJM59BUNoaL-4typ0rCZbM",
  authDomain: "react-curso-8e52a.firebaseapp.com",
  projectId: "react-curso-8e52a",
  storageBucket: "react-curso-8e52a.appspot.com",
  messagingSenderId: "851464951212",
  appId: "1:851464951212:web:4b7c7ed9b05c8ae3c4d609",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
