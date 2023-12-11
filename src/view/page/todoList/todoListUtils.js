import { collectionRefToDoList, database } from "../../../db/initDb";
import {
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

export const submit = (newTask, dispatch, uid) => {
  
  if (newTask.id) {
    updateDoc(doc(database, TODOLIST, newTask.id), newTask)
      .then(() => {
        udpateToDoListFromDatabase(dispatch, uid);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    addDoc(collectionRefToDoList, {...newTask, uid});
    udpateToDoListFromDatabase(dispatch, uid);
  }
};

export const udpateToDoListFromDatabase = (dispatch, uid) => {
  getDocs(collectionRefToDoList).then(({ docs }) => {

    const todoList = docs.filter(doc=>doc.data().uid===uid) .map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
   
    dispatch({ type: TYPES.UPDATE_TODO_LIST, todoList });
    dispatch({type: TYPES.SET_NEWTASK_CLEAR})
  });
};

export const handleDelete = (deleteId, dispatch, uid) => {
  deleteDoc(doc(database, TODOLIST, deleteId)).then(() => {
    udpateToDoListFromDatabase(dispatch, uid);
  });
};

export const _handleDrawer = (isOpen, dispatch) => {
  dispatch({
    type: TYPES.UPDATE_NEW_TASK_META,
    newTaskMetaData: { isOpen: isOpen },
  });
};

export const submitBatch = (tasks, dispatch, uid) => {
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
    udpateToDoListFromDatabase(dispatch, uid);
  });
};
