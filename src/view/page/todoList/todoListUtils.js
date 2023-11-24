import { collectionRefToDoList, database } from "../../../db/initDb";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { TODOLIST } from "../../../db/collections";
import { TYPES } from "../../../context/ContextStore";
export const initalState = {
  itemName: "",
  priority: 0,
  etaDate: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_STATE":
      return { ...state, [action.key]: action.value };
    case "RESET":
      return initalState;
    default:
      return state;
  }
};

export const submit = (newTask, dispatch) => {
  addDoc(collectionRefToDoList, newTask);
  udpateToDoListFromDatabase(dispatch);
};

export const udpateToDoListFromDatabase = (dispatch) => {
  getDocs(collectionRefToDoList).then(({ docs }) => {
    const todoList = docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    console.log("todoList", todoList);
    dispatch({ type: TYPES.UPDATE_TODO_LIST, todoList });
  });
};

export const handleDelete = (deleteId, dispatch) => {
  deleteDoc(doc(database, TODOLIST, deleteId)).then(() => {
    udpateToDoListFromDatabase(dispatch);
  });
};
