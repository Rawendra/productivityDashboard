import React from "react";
import ProjectComponent from "./ProjectComponent";
function ProjectListDisplay({ projectList = [] }) {
  return (
    <div>
      ProjectListDisplay
      {projectList.map((project, key) => {
        return <ProjectComponent key={key}   />;
      })}
    </div>
  );
}

export default ProjectListDisplay;
