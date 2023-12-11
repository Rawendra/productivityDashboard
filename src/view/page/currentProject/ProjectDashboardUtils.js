export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.key]: action.value };
    default:
      return state;
  }
};

export const initalState = {
  projectList: [{ projectTitle: "projectTitle", trackingDetails: [{ key: "key", value:'value' }] }],
};
