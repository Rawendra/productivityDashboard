import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Box,
  Stack,
  Text,
  Select,
  Button,
  Input,
  Textarea,
} from "@chakra-ui/react";
import {
  PlusSquareIcon,
  EditIcon,
  CheckIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { useReducer, useState } from "react";
import {
  reducer,
  updateTrackingsDetails,
  PROJECT_REDUCER_TYPES,
} from "./ProjectDashboardUtils";

const initialState = {
  projectTitle: "projectTitle",
  trackingDetails: [],
};
let detailId = 0;
function ProjectSelected() {
  const [selectedProject, dispatchUpdateSelectedProject] = useReducer(
    reducer,
    initialState
  );
  const [toggleEdit, settoggleEdit] = useState(false);
  const handleOnClick = () => {
    console.log("handleOnClick");
    const { trackingDetails } = selectedProject;
    trackingDetails.push({
      detailId: ++detailId,
      detailName: "detailId",
      detailValue: "enter the value",
      url: "url",
    });
    updateTrackingsDetails(dispatchUpdateSelectedProject, trackingDetails);
  };
  const handleEditTitle = (e) => {
    settoggleEdit((prevState) => !prevState);
  };
  const handleChange = (e, key) => {
    dispatchUpdateSelectedProject({
      type: PROJECT_REDUCER_TYPES.SET_PROJECT_DETAILS,
      data: { [key]: e.target.value },
    });
  };

  const handleChangeDetails = (e, _detail, key) => {
    //const { trackingDetails } = selectedProject;
    const trackingDetails = selectedProject?.trackingDetails?.map((detail) => {
      if (detail.detailId === _detail.detailId) {
        detail = { ..._detail, [key]: e.target.value };
      }
      return detail;
    });
    updateTrackingsDetails(dispatchUpdateSelectedProject, trackingDetails);
  };
  console.log("selectedProject", selectedProject);

  return (
    <div>
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
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Summary
              </Heading>
              {toggleEdit ? (
                <Textarea
                  onChange={(e) => {
                    handleChange(e, "summary");
                  }}
                  value={selectedProject?.summary}
                />
              ) : (
                <Text pt="2" fontSize="sm">
                  {selectedProject?.summary}
                </Text>
              )}
            </Box>
            <Box>
              <Heading size="xs" textTransform="uppercase">
                Status
              </Heading>
              {toggleEdit ? (
                <Select
                  placeholder="Select option"
                  value={selectedProject?.status}
                  onChange={(e) => {
                    handleChange(e, "status");
                  }}
                >
                  <option value="todo">To-do</option>
                  <option value="inprogress">In-progress</option>
                  <option value="done">Done</option>
                </Select>
              ) : (
                <Text pt="2" fontSize="sm">
                  {selectedProject?.status}
                </Text>
              )}
            </Box>
            {toggleEdit ? (
              <>
                {" "}
                <Button
                  isDisabled={selectedProject?.status === ""}
                  onClick={handleEditTitle}
                >
                  SAVE
                </Button>
              </>
            ) : (
              <Button onClick={handleEditTitle}> EDIT</Button>
            )}
            <div>
              {" "}
              <PlusSquareIcon
                onClick={handleOnClick}
                className="project-selected-add-field-button"
              />{" "}
            </div>

            <Box>
              <Heading size="xs" textTransform="uppercase">
                Overview
              </Heading>
              <Text pt="2" fontSize="sm">
                Check out the overview of your clients.
              </Text>
            </Box>
            {selectedProject.trackingDetails.map((detail) => (
              <Box key={detail.detailId}>
                {toggleEdit ? (
                  <Input
                    placeholder={"enter the detail identifier"}
                    onChange={(e) =>
                      handleChangeDetails(e, detail, "detailName")
                    }
                    value={detail?.detailName}
                  />
                ) : (
                  <Heading size="xs" textTransform="uppercase">
                    {detail.detailName}
                  </Heading>
                )}

                {toggleEdit ? (
                  <Input
                    placeholder={"enter the detail description"}
                    onChange={(e) => {
                      handleChangeDetails(e, detail, "detailValue");
                    }}
                    value={detail?.detailValue}
                  />
                ) : (
                  <Text pt="2" fontSize="sm">
                    {detail?.detailValue}
                  </Text>
                )}
                {toggleEdit ? (
                  <Input
                    placeholder={"enter the url"}
                    onChange={(e) => {
                      handleChangeDetails(e, detail, "url");
                    }}
                    value={detail?.url}
                  />
                ) : (
                  <Text pt="2" fontSize="sm">
                    {detail?.url}
                  </Text>
                )}
              </Box>
            ))}

            {/* */}
          </Stack>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProjectSelected;
