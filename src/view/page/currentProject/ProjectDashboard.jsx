import React, {useReducer,} from "react";
import CurrentProject from "./CurrentProject";
import ProjectListDisplay from "./ProjectListDisplay";
import {reducer, initalState} from './ProjectDashboardUtils'
import './ProjectDashboard.css'
function ProjectDashboard() {
  const [projectStore, updateProjectStore]=useReducer(reducer, initalState)

  return (
    <div className="project-dashboard-container">
      ProjectDashboard
      <div className="project-dashboard-list">
        <ProjectListDisplay projectList={projectStore?.projectList} />
      </div>
      <div className="project-dashboard-current-project">
        <CurrentProject />
      </div>
    </div>
  );
}

export default ProjectDashboard;
