import { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "./ProjectContextStoreUtil";

const ProjectStore = createContext();
const UpdateProjectStore = createContext();

export const ContextStore = ({ children }) => {
  const [store, dispatchUpdate] = useReducer(reducer, initialState);

  return (
    <ProjectStore.Provider value={{ store }}>
      <UpdateProjectStore.Provider value={dispatchUpdate}>
        {children}
      </UpdateProjectStore.Provider>
    </ProjectStore.Provider>
  );
};

ContextStore.propTypes = {
  children: {},
};
export const useStore = () => useContext(Store);
export const useUpdateStore = () => useContext(UpdateStore);
