// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0edDFbJyb-3DNaBgpjGyw2il4AT3LO7w",
  authDomain: "tomato-44275.firebaseapp.com",
  projectId: "tomato-44275",
  storageBucket: "tomato-44275.appspot.com",
  messagingSenderId: "1039484918984",
  appId: "1:1039484918984:web:09426f5f6c043d1bc7d9fd",
  measurementId: "G-1RWDSVMLLN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
