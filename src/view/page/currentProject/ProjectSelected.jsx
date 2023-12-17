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

import { useEffect, useReducer, useState } from "react";
import {
  reducer,
  PROJECT_REDUCER_TYPES,
  submitProject,
} from "./ProjectDashboardUtils";

import ButtonBar from "./buttonBar/ButtonBar";
import StatusDropdown from "./statusDropdown/StatusDropdown";
import ProjectDetail from "./selectedProjectDetail/ProjectDetail";

const initialState = {
  projectTitle: "projectTitle",
  trackingDetails: [],
};

function ProjectSelected({ uid, projectList = [] ,showSelectedProject}) {
  const [toggleEdit, settoggleEdit] = useState(false);
  const [selectedProject, dispatchUpdateSelectedProject] = useReducer(
    reducer,
    initialState
  );

  useEffect(()=>{

  },[showSelectedProject])
  const handleEditTitle = () => {
    settoggleEdit((prevState) => !prevState);
  };
  const handleChange = (e, key) => {
    dispatchUpdateSelectedProject({
      type: PROJECT_REDUCER_TYPES.SET_PROJECT_DETAILS,
      data: { [key]: e.target.value },
    });
  };

  const handleAddProject = () => {
    submitProject(selectedProject, "", uid, [...projectList, selectedProject]);
  };

  const projectDetailsMap = {
    summary: Textarea,
    status: StatusDropdown,
    url: Input,
  };
  const projectKeys = Object.keys(projectDetailsMap);
  const handlers = { handleAddProject, handleEditTitle };

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
  showSelectedProject:{}
};
export default ProjectSelected;
