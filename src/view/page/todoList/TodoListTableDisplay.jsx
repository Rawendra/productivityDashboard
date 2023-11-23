import { useEffect } from "react";
import { useUpdateStore, useStore, TYPES } from "../../../context/ContextStore";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { DeleteIcon, LinkIcon, WarningIcon } from "@chakra-ui/icons";
function TodoListTableDisplay() {
  const store = useStore();
  const {
    store: { todoList },
  } = store;
  console.log("todoList", todoList);

  return (
    <>
      {!!todoList?.length && (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Sr.No.</Th>
                <Th>ToDo Task</Th>
                <Th>Date</Th>

                <Th>Update</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {todoList?.map((task, key) => {
                return (
                  <Tr key={task?.id}>
                    <Td>{key + 1}</Td>
                    <Td>{task?.itemName}</Td>
                    <Td>{task?.etaDate}</Td>
                    <Td>
                      {" "}
                      <Button colorScheme="blue" variant="outline">
                         <LinkIcon />
                      </Button>
                    </Td>
                    <Td>
                      {" "}
                      <Button colorScheme="orange" variant="outline">
                         <DeleteIcon />
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </>
  );
}

export default TodoListTableDisplay;
