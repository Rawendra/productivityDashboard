
import TableDisplayProjectList from "../../../../components/table/TableDisplayProjectList";
function ProjectListDisplay({ projectList = [] ,onHandleRowClick}) {

  console.log("projectList", projectList);
  const headerList = ["Sr.No.", "Project Title", "Status", "URL"];

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
