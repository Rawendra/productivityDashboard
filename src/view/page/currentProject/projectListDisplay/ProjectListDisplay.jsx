import TableDisplayProjectList from "../../../../components/table/TableDisplayProjectList";
import {
  useProjectStore,
  useUpdateProjectStore,
} from "../../../../context/ProjectContextStore";
import { PROJECT_REDUCER_TYPES } from "../ProjectDashboardUtils";
function ProjectListDisplay({ projectList = [] }) {
  const projectStore = useProjectStore();
  const dispatchProject = useUpdateProjectStore();

  console.log("projectList", projectList);
  const headerList = ["Sr.No.", "Project Title", "Status", "URL"];

  const onHandleRowClick = (project) => {
    console.log(project);
    dispatchProject({
      type: PROJECT_REDUCER_TYPES.SET_SELECTED_PROJECT,
      selectedProject: project,
    });
  };

  return (
    <div>
      <TableDisplayProjectList
        headerList={headerList}
        displayList={projectList}
        onHandleRowClick={onHandleRowClick}
      />{" "}
    </div>
  );
}
ProjectListDisplay.propTypes = {
  projectList: [{}],
  onHandleRowClick: () => {},
};
export default ProjectListDisplay;
