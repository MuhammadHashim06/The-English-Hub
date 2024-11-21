// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
//   apiKey: "AIzaSyD1kX0nZ9XCkcWZ_txrf8Lj3nXmzLAi0vo",
//   authDomain: "login-cbd62.firebaseapp.com",
//   projectId: "login-cbd62",
//   storageBucket: "login-cbd62.firebasestorage.app",
//   messagingSenderId: "385658145351",
//   appId: "1:385658145351:web:954700aa9a6f9fdb0f7f62",
//   measurementId: "G-CG4YLRY9WH"
apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId:import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const  auth = getAuth()
export const db= getFirestore()

const analytics = getAnalytics(app);