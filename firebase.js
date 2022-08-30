// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxtWt1eult_Amu_ZSsgD-FYmSd6I8u2Yg",
  authDomain: "travelapp-9e5d1.firebaseapp.com",
  projectId: "travelapp-9e5d1",
  storageBucket: "travelapp-9e5d1.appspot.com",
  messagingSenderId: "368627381807",
  appId: "1:368627381807:web:0c0b2c6a31869e6b8978da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)