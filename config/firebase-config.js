import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC6wHpxRT0fYT8lVn-0pedPpGXRmsxNKlo",
    authDomain: "loginauth-6164e.firebaseapp.com",
    projectId: "loginauth-6164e",
    storageBucket: "loginauth-6164e.appspot.com",
    messagingSenderId: "403705053368",
    appId: "1:403705053368:web:cfc378ae74e3f32448344d",
    measurementId: "G-E1P83KK5MS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
