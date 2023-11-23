import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const auth = getAuth();
export const database= getFirestore(app)


