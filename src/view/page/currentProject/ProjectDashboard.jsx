import ProjectListDisplay from "./projectListDisplay/ProjectListDisplay";
import ProjectSelected from "./ProjectSelected";
import { useStore } from "../../../context/ContextStore";

import "./ProjectDashboard.css";

function ProjectDashboard() {
  const { store } = useStore();

  

  return (
    <div className="project-dashboard-container">
      <div className="project-dashboard-list-container">
        <div className="project-dashboard-list">
          <ProjectListDisplay projectList={store?.projectList} />
        </div>
      </div>

      <div className="project-dashboard-current-project">
        <ProjectSelected
          uid={store?.user?.uid}
          projectList={store?.projectList}
        />
      </div>
    </div>
  );
}

export default ProjectDashboard;
