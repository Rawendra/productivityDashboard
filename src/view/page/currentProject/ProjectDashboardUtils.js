import { collectionRefProjectList, database } from "../../../db/initDb";
import { addDoc, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { PROJECT_LIST } from "../../../db/collections";
import { TYPES } from "../../../context/ContextStoreUtil";

export const PROJECT_REDUCER_TYPES = {
  SET_TITLE: "SET_TITLE",
  SET_PROJECT_DETAILS: "SET_PROJECT_DETAILS",
  SET_SELECTED_PROJECT: "SET_SELECTED_PROJECT",
  CLEAR_SELECTED_PROJECT: "CLEAR_SELECTED_PROJECT",
};
export const reducer = (state, action) => {
  switch (action.type) {
    case PROJECT_REDUCER_TYPES.CLEAR_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: {
          projectTitle: "",
          status: "",
          url: "",
        },
      };
    case PROJECT_REDUCER_TYPES.SET_TITLE:
      return { ...state, projectTitle: action.projectTitle };
    case PROJECT_REDUCER_TYPES.SET_PROJECT_DETAILS:
      return {
        ...state,
        selectedProject: { ...state.selectedProject, ...action.data },
      };

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
    const result = docs
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
        return {  ...data.project ,id: doc.id};
      });
    console.log("result", result);

    dispatch({ type: TYPES.SET_PROJECT_LIST, projectList: result });
  });
};

export const submitProject = ({
  newProject,
  dispatch,
  uid,
  projectList,
  operation,
}) => {
  if (operation === "DELETE") {
      deleteDoc(doc(database, PROJECT_LIST, newProject.id)).then(() => {
        udpateProjectsFromDatabase(dispatch, uid);
    });

  } else {//operation can be ADD_UPDATE
    const isUpdateOperation = projectList.find((_project) => {
      return _project.id === newProject.id;
    });
    if (isUpdateOperation) {
      console.log("the operation is update");
      updateDoc(doc(database, PROJECT_LIST, newProject.id), {project: newProject})
        .then(() => {
          udpateProjectsFromDatabase(dispatch, uid);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      // fresh push operation===ADD

      addDoc(collectionRefProjectList, { uid: uid, project: newProject })
        .then((response) => {
          console.log(response);
          udpateProjectsFromDatabase(dispatch, uid);
        })
        .catch((err) => {
          console.log(err);
        });
      // udpateToDoListFromDatabase(dispatch, uid);
    }
  }
};
