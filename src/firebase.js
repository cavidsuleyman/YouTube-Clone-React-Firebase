import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPcyIxp_PZJSgfOVr-7b8DVt81NSYBWUQ",
  authDomain: "react-auth-tutorial-9b0dd.firebaseapp.com",
  projectId: "react-auth-tutorial-9b0dd",
  storageBucket: "react-auth-tutorial-9b0dd.appspot.com",
  messagingSenderId: "294816947492",
  appId: "1:294816947492:web:4867b17e978778947d67b1",
  measurementId: "G-FWBN5RX913"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);