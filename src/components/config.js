// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA1jPcCoEqmjSnm1qHR7O56rMmGNw6yX4",
  authDomain: "voluntrix-app.firebaseapp.com",
  projectId: "voluntrix-app",
  storageBucket: "voluntrix-app.appspot.com",
  messagingSenderId: "127791978657",
  appId: "1:127791978657:web:2301bbbf1cc8b2633138e0",
  measurementId: "G-XF0CT3PM8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export {auth,provider};