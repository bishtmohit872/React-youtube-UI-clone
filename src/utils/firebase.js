// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbVQGAOEPW_gn4bmR3TxeOFfMKhSCUHzQ",
  authDomain: "ytclone-81214.firebaseapp.com",
  projectId: "ytclone-81214",
  storageBucket: "ytclone-81214.firebasestorage.app",
  messagingSenderId: "1046083962203",
  appId: "1:1046083962203:web:0e54e4a64220c9c4d5c67e",
  measurementId: "G-PXZQV4EYH8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()