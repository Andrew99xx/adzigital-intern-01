// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import {getFirestore,} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// import { getDatabase } from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyAbzkktlGlLO2pAFC6erNvAZp-zwaEloiU",
  authDomain: "furniture-ecommerce-35.firebaseapp.com",
  projectId: "furniture-ecommerce-35",
  storageBucket: "furniture-ecommerce-35.appspot.com",
  messagingSenderId: "373535916677",
  appId: "1:373535916677:web:34970001226c27f22b9fec",
  measurementId: "G-KYFR0T6V5D"
};



const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)//text url 
export const imageDb = getStorage(app);//imahe db

// export const googleProvider = new GoogleAuthProvider();
// export const rtdb = getDatabase(app);