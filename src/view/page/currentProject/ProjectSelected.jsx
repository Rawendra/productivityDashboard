import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Stack,
  Input,
  Textarea,
} from "@chakra-ui/react";

import { useState } from "react";
import { PROJECT_REDUCER_TYPES, submitProject } from "./ProjectDashboardUtils";

import ButtonBar from "./buttonBar/ButtonBar";
import StatusDropdown from "./statusDropdown/StatusDropdown";
import ProjectDetail from "./selectedProjectDetail/ProjectDetail";
import {
  useProjectStore,
  useUpdateProjectStore,
} from "../../../context/ProjectContextStore";
import { useUpdateStore, useStore } from "../../../context/ContextStore";

function ProjectSelected({ uid }) {
  const [toggleEdit, settoggleEdit] = useState(false);
  const dispatchProject = useUpdateProjectStore();
  const { store } = useStore();
  const dispatch = useUpdateStore();

  const {
    store: { selectedProject },
  } = useProjectStore();

  const handleEditSelectedProject = () => {
    settoggleEdit((prevState) => !prevState);
  };
  const handleChange = (e, key) => {
    dispatchProject({
      type: PROJECT_REDUCER_TYPES.SET_PROJECT_DETAILS,
      data: { [key]: e.target.value },
    });
  };

  const handleCRUD = (operation) => {
    submitProject({
      newProject: selectedProject,
      dispatch,
      uid,
      operation,
      projectList: store?.projectList,
    });
  };

  const handleCancelSelectedProject = () => {
    handleEditSelectedProject();
    dispatchProject({
      type: PROJECT_REDUCER_TYPES.CLEAR_SELECTED_PROJECT,
    });
  };

  const handleClearSelectedProject = () => {
    dispatchProject({
      type: PROJECT_REDUCER_TYPES.CLEAR_SELECTED_PROJECT,
    });
  };

  const projectDetailsMap = {
    summary: Textarea,
    status: StatusDropdown,
    url: Input,
  };
  const projectKeys = Object.keys(projectDetailsMap);
  const handlers = {
    handleCRUD,
    handleEditSelectedProject,
    handleCancelSelectedProject,
    handleClearSelectedProject,
  };
  console.log("selectedProject", selectedProject);
  return (
    <div>
      <Heading as="h4" size="md">
        Project Viewer
      </Heading>
      <Card>
        <CardHeader>
          <Heading size="md">
            {toggleEdit ? (
              <Input
                onChange={(e) => handleChange(e, "projectTitle")}
                value={selectedProject.projectTitle}
              />
            ) : (
              selectedProject?.projectTitle
            )}
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            {projectKeys.map((projectDetailsMapKey) => {
              return (
                <ProjectDetail
                  key={projectDetailsMapKey}
                  projectDetailKey={projectDetailsMapKey}
                  toggleEdit={toggleEdit}
                  handleChange={handleChange}
                  selectedProject={selectedProject}
                  Component={projectDetailsMap[projectDetailsMapKey]}
                />
              );
            })}

            <ButtonBar
              toggleEdit={toggleEdit}
              selectedProject={selectedProject}
              handlers={handlers}
            />
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}
ProjectSelected.propTypes = {
  uid: String,
  projectList: Array,
  showSelectedProject: {},
};
export default ProjectSelected;
