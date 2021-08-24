import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDLzYGsKGkm8tN59ty_1l-sM0Nz7KBUAiM",
  authDomain: "unichat-2f5af.firebaseapp.com",
  projectId: "unichat-2f5af",
  storageBucket: "unichat-2f5af.appspot.com",
  messagingSenderId: "451633197785",
  appId: "1:451633197785:web:9da9cd9579c850c912c4c8",
};

export const auth = firebase.initializeApp(firebaseConfig).auth();
