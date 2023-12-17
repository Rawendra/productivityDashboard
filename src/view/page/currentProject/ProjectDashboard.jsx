import React, { useReducer } from "react";
import CurrentProject from "./CurrentProject";
import ProjectListDisplay from "./ProjectListDisplay";
import { reducer, initalState ,PROJECT_REDUCER_TYPES} from "./ProjectDashboardUtils";
import ProjectSelected from "./ProjectSelected";
import { Button, ButtonGroup } from "@chakra-ui/react";

import "./ProjectDashboard.css";
function ProjectDashboard() {
  const [projectStore, updateProjectStore] = useReducer(reducer, initalState);

  return (
    <div className="project-dashboard-container">
      <div className="project-dashboard-list-container">
     
        <div className="project-dashboard-list">
          <ProjectListDisplay projectList={projectStore?.projectList} />
        </div>
        <Button colorScheme="teal" variant="outline">
          Add Project
        </Button>
      </div>

      {/* <div className="project-dashboard-current-project">
        <CurrentProject />
      </div> */}

      <div className="project-dashboard-current-project">
        <ProjectSelected />
      </div>
    </div>
  );
}

export default ProjectDashboard;
