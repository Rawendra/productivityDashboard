import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function TableDisplayProjectList(props) {
  const { displayList, headerList, onHandleRowClick } = props || { displayList: [] };
  console.log('displayList',displayList)
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
                <Tr onClick={()=>onHandleRowClick(project)} key={project?.id}>
                  <Td>{index + 1}</Td>
                  <Td>{project?.projectTitle}</Td>
                  <Td>{project?.status}</Td>
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
