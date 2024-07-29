// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1VXv9FPQpVsc4_H9XISBvX39XS5gVNVo",
  authDomain: "jwellery-website.firebaseapp.com",
  projectId: "jwellery-website",
  storageBucket: "jwellery-website.appspot.com",
  messagingSenderId: "1056141183617",
  appId: "1:1056141183617:web:3d82bc16e803b3c2b11b80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };