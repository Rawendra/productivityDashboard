import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Badge,
  TableContainer,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import { useProjectStore } from "../../context/ProjectContextStore";

function TableDisplayProjectList(props) {
  const {
    store: { selectedProject },
  } = useProjectStore();
  const { displayList, headerList, onHandleRowClick } = props || {
    displayList: [],
  };
  console.log("displayList", displayList);
  const handleClick = (project) => {
    onHandleRowClick(project);
  };
  const getClassRow = (projectId) => {
    if (projectId === selectedProject.id) {
      return "table-display-product-list-row-active";
    }
    return "table-display-product-list-row";
  };
  const getColorScheme = (status) => {
    let colorScheme = "";
    switch (status) {
      case "In-progress":
        colorScheme = "orange";
        break;
      case "Done":
        colorScheme = "green";
        break;
      case "To-do":
        colorScheme = "purple";
        break;
      default:
        colorScheme = "gray";
        break;
    }
    console.log("colorScheme", status,colorScheme);
    return colorScheme;
  };
  return (
    <div>
      {" "}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              {headerList?.map((header) => {
                return <Th key={header}>{header}</Th>;
              })}
            </Tr>
          </Thead>
          <Tbody>
            {displayList?.map((project, index) => {
              return (
                <Tr
                  className={getClassRow(project.id)}
                  onClick={() => handleClick(project)}
                  key={project?.id}
                >
                  <Td>{index + 1}</Td>
                  <Td>{project?.projectTitle}</Td>
                  <Td>
                    <Badge
                      
                      colorScheme={getColorScheme(project?.status)}
                    >
                      {project?.status}
                    </Badge>
                  </Td>

                  <Td>
                    <a href={project?.url}>
                      <ExternalLinkIcon />
                    </a>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableDisplayProjectList;
