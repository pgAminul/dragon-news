// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOsiEqS_0J5jveT6ZizRW9R1TJ-qaE_3g",
  authDomain: "dragon-news-9ea04.firebaseapp.com",
  projectId: "dragon-news-9ea04",
  storageBucket: "dragon-news-9ea04.firebasestorage.app",
  messagingSenderId: "369583908953",
  appId: "1:369583908953:web:f0472c3797ac740577e948",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);
