import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvie-ZXz4AnseKV3SSmydf5X0PRnHTpv0",
  authDomain: "emergilife.firebaseapp.com",
  projectId: "emergilife",
  storageBucket: "emergilife.appspot.com",
  messagingSenderId: "486227381702",
  appId: "1:486227381702:web:54c9fe7a0c637116dbf6c7",
  measurementId: "G-3PKWDQQQB8"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);