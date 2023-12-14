import ProjectComponent from "./ProjectComponent";
function ProjectListDisplay({ projectList = [] }) {
  return (
    <div>
      ProjectListDisplay
      {projectList.map((project, key) => {
        return <ProjectComponent key={key} />;
      })}
    </div>
  );
}
ProjectListDisplay.propTypes = {
  projectList: [{}],
};
export default ProjectListDisplay;
