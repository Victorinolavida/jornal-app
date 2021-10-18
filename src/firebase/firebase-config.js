import "firebase/firestore";
import "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// console.log(process.env);

// Your web app's Firebase configuration
// const firebaseConfig = {
//   // tuinformación de tu app en firebase
//   apiKey: "AIzaSyDecTzEamsUlG-6UzZG8DdGfHEQIFoariA",
//   authDomain: "react-apps-12913.firebaseapp.com",
//   projectId: "react-apps-12913",
//   storageBucket: "react-apps-12913.appspot.com",
//   messagingSenderId: "93106550062",
//   appId: "1:93106550062:web:669d611d8eb9550318f6bf",
// };

// const firebaseConfigTesting = {
//   apiKey: "AIzaSyDSuYTrHxbVFb_LpXLyVoTChPymSTzgT50",
//   authDomain: "chatapp-3c5c2.firebaseapp.com",
//   projectId: "chatapp-3c5c2",
//   storageBucket: "chatapp-3c5c2.appspot.com",
//   messagingSenderId: "610761195759",
//   appId: "1:610761195759:web:947a9cf3e52a346a661b1a",
// };

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

// if (process.env.NODE_ENV === "test") {
//   const app = initializeApp(firebaseConfigTesting);
// } else {
//   const app = initializeApp(firebaseConfig);
// }

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore();

const googleAuthProvider = new GoogleAuthProvider();

export { db, googleAuthProvider };
