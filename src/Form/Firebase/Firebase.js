// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoM5m_WTEAhn9UESaZ8TGr_1H7DkUeu9U",
  authDomain: "service-request-form-82cdb.firebaseapp.com",
  projectId: "service-request-form-82cdb",
  storageBucket: "service-request-form-82cdb.appspot.com",
  messagingSenderId: "1054360070449",
  appId: "1:1054360070449:web:489676bf4192942c51e810"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();