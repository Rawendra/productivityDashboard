import { collectionRefToDoList, database } from "../../../db/initDb";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
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
  
  if (newTask.id) {
    updateDoc(doc(database, TODOLIST, newTask.id), newTask)
      .then(() => {
        udpateToDoListFromDatabase(dispatch);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    addDoc(collectionRefToDoList, newTask);
    udpateToDoListFromDatabase(dispatch);
  }
};

export const udpateToDoListFromDatabase = (dispatch) => {
  getDocs(collectionRefToDoList).then(({ docs }) => {
    const todoList = docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    
    dispatch({ type: TYPES.UPDATE_TODO_LIST, todoList });
  });
};

export const handleDelete = (deleteId, dispatch) => {
  deleteDoc(doc(database, TODOLIST, deleteId)).then(() => {
    udpateToDoListFromDatabase(dispatch);
  });
};

export const _handleDrawer = (isOpen, dispatch) => {
  dispatch({
    type: TYPES.UPDATE_NEW_TASK_META,
    newTaskMetaData: { isOpen: isOpen },
  });
};

export const submitBatch = (tasks, dispatch) => {
  const promiseArray = tasks.reduce((_promiseArray, currentTask) => {
    const promise = new Promise((res) => {
      updateDoc(doc(database, TODOLIST, currentTask.id), currentTask).then(
        () => {
          res(true);
        }
      );
    });
    _promiseArray.push(promise);
    return _promiseArray;
  }, []);

  Promise.all(promiseArray).then(() => {    
    udpateToDoListFromDatabase(dispatch);
  });
};
