import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { TODOLIST } from "./collections";
import { getAuth,  } from "firebase/auth";
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const auth = getAuth();
export const database = getFirestore(app);
export const collectionRefToDoList = collection(database, TODOLIST);
export const auth = getAuth();