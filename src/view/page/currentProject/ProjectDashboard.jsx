import ProjectListDisplay from "./projectListDisplay/ProjectListDisplay";
import { useReducer } from "react";
import { reducer, initialState ,PROJECT_REDUCER_TYPES} from './ProjectDashboardUtils'
import ProjectSelected from "./ProjectSelected";
import { useStore } from "../../../context/ContextStore";

import "./ProjectDashboard.css";

function ProjectDashboard() {
  const [selectedProject, dispatchUpdateSelectedProject] = useReducer(
    reducer,
    initialState
  );
  const { store } = useStore();

  const onHandleRowClick=(project)=>{
    dispatchUpdateSelectedProject({type:PROJECT_REDUCER_TYPES.SET_SELECTED_PROJECT,
      selectedProject: project })
  }
  return (
    <div className="project-dashboard-container">
      <div className="project-dashboard-list-container">
        <div className="project-dashboard-list">
          <ProjectListDisplay projectList={store?.projectList} onHandleRowClick={onHandleRowClick} />
        </div>
      </div>

      <div className="project-dashboard-current-project">
        <ProjectSelected
          uid={store?.user?.uid}
          showSelectedProject={selectedProject}
          projectList={store?.projectList}
        />
      </div>
    </div>
  );
}

export default ProjectDashboard;
