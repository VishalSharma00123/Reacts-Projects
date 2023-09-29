import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'
const firebaseApp = firebase.initializeApp(
    {
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        apiKey: "AIzaSyBHdMfJ9dJs3Iz0eBEXoxFnuzKWlz0UuRc",
        authDomain: "clone-5c2b4.firebaseapp.com",
        projectId: "clone-5c2b4",
        storageBucket: "clone-5c2b4.appspot.com",
        messagingSenderId: "305446396152",
        appId: "1:305446396152:web:ba9b41f6312bf713ea9b0d",
        measurementId: "G-9GJTT23HZH"
    }
)

const auth = firebase.auth();

export { auth };