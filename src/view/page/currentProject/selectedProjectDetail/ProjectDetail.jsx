import { Heading, Box, Text } from "@chakra-ui/react";

function ProjectDetail({
  toggleEdit = false,
  handleChange,
  selectedProject,
  Component,
  projectDetailKey = "",
}) {
  return (
    <div>
      {" "}
      <Box>
        <Heading size="xs" textTransform="uppercase">
          {projectDetailKey}
        </Heading>
        {toggleEdit ? (
          <Component
            handleChange={handleChange}
            value ={selectedProject[projectDetailKey]}
            onChange={(e) => handleChange(e, projectDetailKey)}
            selectedProject={selectedProject}
          />
        ) : (
          // <StatusDropdown

          // />
          <Text pt="2" fontSize="sm">
            {selectedProject?.[projectDetailKey]}
          </Text>
        )}
      </Box>
    </div>
  );
}
ProjectDetail.propTypes = {
  toggleEdit: Boolean,
  handleChange: Function,
  selectedProject: { status: String },
  Component: HTMLBaseElement,
  projectDetailKey: String,
};
export default ProjectDetail;
