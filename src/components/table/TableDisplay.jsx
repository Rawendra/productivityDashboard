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

function TableDisplay(props) {
  const { displayList } = props || { displayList: [] };
  return (
    <div>
      {" "}
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Sr.No.</Th>
              <Th>ToDo Task</Th>
              <Th>URL</Th>
              <Th>Date</Th>
            </Tr>
          </Thead>
          <Tbody>
            {displayList?.map((task, index) => {
              return (
                <Tr key={task?.id}>
                  <Td>{index + 1}</Td>
                  <Td>{task?.itemName}</Td>
                  <Td>
                    <a href={task?.url}>
                      <ExternalLinkIcon />
                    </a>
                  </Td>
                  <Td>{task?.etaDate}</Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TableDisplay;
