// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyBmzuzC5CCjfn8Qkmkrm1_hvFwJn0IZfHA",
  authDomain: "productiondb-e67ee.firebaseapp.com",
  projectId: "productiondb-e67ee",
  storageBucket: "productiondb-e67ee.appspot.com",
  messagingSenderId: "489817608798",
  appId: "1:489817608798:web:9a87b00e3e43a437d31acf",
  measurementId: "G-TD9G32E1R6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}