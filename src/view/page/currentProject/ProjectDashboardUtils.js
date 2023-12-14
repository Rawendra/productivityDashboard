import { collectionRefProjectList, database } from "../../../db/initDb";
import { addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { TYPES } from "../../../context/ContextStoreUtil";
export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};

export const initalState = {
  projectList: [
    {
      projectTitle: "projectTitle",
      trackingDetails: [{ key: "key", value: "value" }],
    },
  ],
};

export const udpateProjectsFromDatabase = (dispatch, uid) => {
  getDocs(collectionRefProjectList).then(({ docs }) => {
    const projectList = docs
      .filter((doc) => doc.data().uid === uid)
      .map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

    dispatch({ type: TYPES.SET_PROJECT_LIST, projectList });
   // dispatch({ type: TYPES.SET_NEWTASK_CLEAR });
  });
};
