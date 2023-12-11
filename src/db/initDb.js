import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";
import { TODOLIST, AUTH_TODO_LIST } from "./collections";
import { getAuth } from "firebase/auth";
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const auth = getAuth();
export const database = getFirestore(app);
export const collectionRefToDoList = collection(database, TODOLIST);
export const collectionRefAuthToDoList = collection(database, AUTH_TODO_LIST);
export const auth = getAuth();
