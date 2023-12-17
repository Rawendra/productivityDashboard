import { collectionRefProjectList, database } from "../../../db/initDb";
import { addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

import { TYPES } from "../../../context/ContextStoreUtil";

export const PROJECT_REDUCER_TYPES = {
  SET_TITLE: "SET_TITLE",
  SET_PROJECT_DETAILS: "SET_PROJECT_DETAILS",
  SET_SELECTED_PROJECT:'SET_SELECTED_PROJECT'
};
export const reducer = (state, action) => {
  switch (action.type) {
    case PROJECT_REDUCER_TYPES.SET_TITLE:
      return { ...state, projectTitle: action.projectTitle };
    case PROJECT_REDUCER_TYPES.SET_PROJECT_DETAILS:
      return { ...state, ...action.data };

    case PROJECT_REDUCER_TYPES.SET_SELECTED_PROJECT:
      return { ...state, selectedProject: action.selectedProject };
    default:
      return state;
  }
};

export const initialState = {
  selectedProject: {},
  projectList: [
    {
      projectTitle: "projectTitle",
      trackingDetails: [],
    },
  ],
};

export const udpateProjectsFromDatabase = (dispatch, uid) => {
  getDocs(collectionRefProjectList).then(({ docs }) => {
    const projectList = docs
      .filter((doc) => {
        const data = doc.data();
        if (data.uid === uid) {
          return true;
        }
        return false;
      })
      .map((doc) => {
        const data = doc.data();
        console.log("data.uid", data.uid);
        return data.projectList;
      });
    // .filter((doc) => doc.data().uid === uid)
    // .map((doc) => {
    //   return { id: doc.id, ...doc.data() };
    // });
    if (projectList?.length === 1) {
      //project list is present for uid
      dispatch({ type: TYPES.SET_PROJECT_LIST, projectList: projectList[0] });
    }

    // dispatch({ type: TYPES.SET_NEWTASK_CLEAR });
  });
};

export const submitProject = (newProject, dispatch, uid, projectList) => {
  if (newProject.id) {
    // updateDoc(doc(database, TODOLIST, newTask.id), newTask)
    //   .then(() => {
    //     //udpateToDoListFromDatabase(dispatch, uid);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  } else {
    addDoc(collectionRefProjectList, { uid: uid, projectList: projectList })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    // udpateToDoListFromDatabase(dispatch, uid);
  }
};
