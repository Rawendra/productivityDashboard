import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { TYPES } from "../../../context/ContextStoreUtil";
import { udpateToDoListFromDatabase } from "../todoList/todoListUtils";
import { udpateProjectsFromDatabase } from "../currentProject/ProjectDashboardUtils";
const UPDATE_ALERT = "UPDATE_ALERT";
export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...{ [action.key]: action.value } };
    case UPDATE_ALERT:
      return {
        ...state,
        alertMessage: action.alertMessage,
        alertStatus: action.alertStatus,
      };
    default:
      return state;
  }
};
export const initialState = {
  email: "",
  password: "",
  retypePassword: "",
  isAuthenticated: false,
  alertMessage: "",
  alertStatus: "success",
};

export const handleSubmitSignUp = ({ user, auth, dispatchUser }) => {
  const { email, password } = user;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      dispatchUser({
        type: UPDATE_ALERT,
        alertMessage: "USER created successfully, You Sign In NOW",
        alertStatus: "success",
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      dispatchUser({
        type: UPDATE_ALERT,
        alertMessage: errorMessage,
        alertStatus: "error",
      });
      // ..
    });
};

export const handleSignInSubmit = ({ auth, user, dispatch, dispatchUser }) => {
  const { email, password } = user;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      dispatch({
        type: TYPES.UPDATE_USER,
        data: { isAuthenticated: true, uid: user.uid, email },
      });
      udpateToDoListFromDatabase(dispatch, user.uid);
      udpateProjectsFromDatabase(dispatch, user.uid);
      dispatchUser({
        type: UPDATE_ALERT,
        alertStatus: "success",
        alertMessage:
          "sign in was successfully, all routes will be functioning now",
      });
      // ...
    })
    .catch((error) => {
      dispatch({
        type: TYPES.UPDATE_USER,
        data: { isAuthenticated: false, email },
      });
      dispatchUser({
        type: UPDATE_ALERT,
        alertStatus: "error",
        alertMessage: "sign in failed",
      });
    });
};
