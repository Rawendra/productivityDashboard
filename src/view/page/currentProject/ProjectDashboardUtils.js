import { collectionRefProjectList, database } from "../../../db/initDb";
import { addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

import { TYPES } from "../../../context/ContextStoreUtil";

export const updateTrackingsDetails = (
  dispatchUpdateSelectedProject,
  trackingDetails
) => {
  dispatchUpdateSelectedProject({
    type: PROJECT_REDUCER_TYPES.SET_PROJECT_DETAILS,
    data: { trackingDetails: trackingDetails },
  });
};
export const PROJECT_REDUCER_TYPES = {
  SET_TITLE: "SET_TITLE",
  SET_PROJECT_DETAILS: "SET_PROJECT_DETAILS",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case PROJECT_REDUCER_TYPES.SET_TITLE:
      return { ...state, projectTitle: action.projectTitle };
    case PROJECT_REDUCER_TYPES.SET_PROJECT_DETAILS:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export const initalState = {
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
      .filter((doc) => doc.data().uid === uid)
      .map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

    dispatch({ type: TYPES.SET_PROJECT_LIST, projectList });
    // dispatch({ type: TYPES.SET_NEWTASK_CLEAR });
  });
};
