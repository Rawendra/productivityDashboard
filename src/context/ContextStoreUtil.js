export const TYPES = {
  UPDATE_DB_METADATA: "UPDATE_DB_METADATA",
  UPDATE_TODO_LIST: "UPDATE_TODO_LIST",
  UPDATE_NEW_TASK_META: "UPDATE_NEW_TASK_META",
  UPDATE_NEW_TASK: "UPDATE_NEW_TASK",
  RESET_NEWTASK: "RESET_NEWTASK",
  SET_NEWTASK: "SET_NEWTASK",
  SET_NEWTASK_CLEAR: "SET_NEWTASK_CLEAR",
  UPDATE_USER: "UPDATE_USER",
  UPDATE_SELECTED_REMINDER_DATE: "UPDATE_SELECTED_REMINDER_DATE",
  SET_PROJECT_LIST: "SET_PROJECT_LIST",
};

export const _newTask = { itemName: "", priority: 0, etaDate: "", url: "" };
export const initialState = {
  data: {},
  dbMetaData: {},
  todoList: [],
  device: {},
  status: {},
  projectList:[],
  newTask: _newTask,
  selectedDate: { date: new Date() },
  newTaskMetaData: { isOpen: false },
  user: { name: "Rawendra", isAuthenticated: false },
  version: 0,
};
export const reducer = (state, action) => {
  switch (action.type) {
   
    case TYPES.SET_PROJECT_LIST:
      return { ...state, projectList: action.projectList };
    case TYPES.UPDATE_SELECTED_REMINDER_DATE:
      return { ...state, selectedDate: action.selectedDate };
    case TYPES.UPDATE_DB_METADATA:
      return { ...state, dbMetaData: action.dbMetaData };
    case TYPES.UPDATE_NEW_TASK_META:
      return { ...state, ...{ newTaskMetaData: action.newTaskMetaData } };
    case TYPES.UPDATE_NEW_TASK:
      return {
        ...state,
        ...{ newTask: { ...state.newTask, [action.key]: action.value } },
      };
    case TYPES.SET_NEWTASK_CLEAR:
      return {
        ...state,
        ...{ newTask: {} },
      };
    case TYPES.SET_NEWTASK:
      return { ...state, newTask: action.newTask };
    case "udpate":
      return { ...state, data: action.data };
    case TYPES.UPDATE_USER:
      return { ...state, user: { ...action.data } };
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
