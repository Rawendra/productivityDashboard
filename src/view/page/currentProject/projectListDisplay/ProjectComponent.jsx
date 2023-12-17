
function ProjectComponent({ project = {trackingDetails:[]} }) {
  return (
    <div>
      {project.projectTitle}
      <ol>
        {project.trackingDetails.map((tracker, index) => (
          <li key={index}>
            {tracker.key}|{tracker.value}
          </li>
        ))}
      </ol>
    </div>
  );
}
ProjectComponent.propTypes = {
  project: { projectTitle: String, trackingDetails: Array },
};

export default ProjectComponent;
