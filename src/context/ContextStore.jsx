import { createContext, useReducer, useContext } from "react";

export const TYPES = {
  UPDATE_DB_METADATA: "UPDATE_DB_METADATA",
  UPDATE_TODO_LIST: "UPDATE_TODO_LIST",
  UPDATE_NEW_TASK_META: "UPDATE_NEW_TASK_META",
  UPDATE_NEW_TASK: "UPDATE_NEW_TASK",
  RESET_NEWTASK: "RESET_NEWTASK",
  SET_NEWTASK:'SET_NEWTASK'
};
const _newTask = { itemName: "", priority: 0, etaDate: "" };
const initialState = {
  data: {},
  dbMetaData: {},
  todoList: [],
  device: {},
  status: {},
  newTask: _newTask,
  newTaskMetaData: { isOpen: false },
  user: { name: "Rawendra", auth: "isAuthenticated" },
  version: 0,
};
const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.UPDATE_DB_METADATA:
      return { ...state, dbMetaData: action.dbMetaData };
    case TYPES.UPDATE_NEW_TASK_META:
      return { ...state, ...{ newTaskMetaData: action.newTaskMetaData } };
    case TYPES.UPDATE_NEW_TASK:
      return {
        ...state,
        ...{ newTask: { ...state.newTask, [action.key]: action.value } },
      };
    case TYPES.SET_NEWTASK:
      return { ...state, newTask: action.newTask };
    case "udpate":
      return { ...state, data: action.data };

    case TYPES.UPDATE_TODO_LIST:
      return {
        ...state,
        todoList: action.todoList,
        version: state.version + 1,
      };
    case TYPES.RESET_NEWTASK:
      return { ...state, newTask: _newTask };
    case "truncate":
      return {};
    default:
      return state;
  }
};
const Store = createContext();
const UpdateStore = createContext();

export const ContextStore = ({ children }) => {
  const [store, dispatchUpdate] = useReducer(reducer, initialState);

  console.log("store", store);
  return (
    <Store.Provider value={{ store }}>
      <UpdateStore.Provider value={dispatchUpdate}>
        {children}
      </UpdateStore.Provider>
    </Store.Provider>
  );
};

export const useStore = () => useContext(Store);
export const useUpdateStore = () => useContext(UpdateStore);
