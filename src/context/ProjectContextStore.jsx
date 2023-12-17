import { createContext, useReducer, useContext } from "react";
import { initialState, reducer } from "../view/page/currentProject/ProjectDashboardUtils";

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
export const useProjectStore = () => useContext(ProjectStore);
export const useUpdateProjectStore = () => useContext(UpdateProjectStore);
