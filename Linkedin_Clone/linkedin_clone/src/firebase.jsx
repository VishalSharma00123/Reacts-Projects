// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBLauToN2cJGegdPOp32By1e-dor2n5y0",
  authDomain: "linkedin-clone-14f00.firebaseapp.com",
  projectId: "linkedin-clone-14f00",
  storageBucket: "linkedin-clone-14f00.appspot.com",
  messagingSenderId: "154944589666",
  appId: "1:154944589666:web:64d97b8866fcdc4c68263b",
  measurementId: "G-WR7CL12RRP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //initializing firebase app
const db = firebaseApp.firestore(); //accessing database
const auth = firebase.auth(); //for authentication

export { db, auth };
