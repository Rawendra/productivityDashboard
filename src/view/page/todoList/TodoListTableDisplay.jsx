import { useUpdateStore, useStore } from "../../../context/ContextStore";
import { TYPES } from "../../../context/ContextStoreUtil";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Tooltip,
} from "@chakra-ui/react";
import {
  DeleteIcon,
  LinkIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  InfoOutlineIcon,
  ExternalLinkIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

import { handleDelete, _handleDrawer } from "./todoListUtils";
function TodoListTableDisplay() {
  const store = useStore();

  const dispatch = useUpdateStore();
  const {
    store: { todoList, user },
  } = store;

  const displayList = todoList.sort((e1, e2) => e1.priority - e2.priority);

  const handlePriorityChange = (_id, priority, key, task) => {
    const newList = [...displayList];

    if (priority === "high") {
      const tempPriority = newList[key - 1].priority;
      newList[key - 1].priority = task.priority;
      task.priority = tempPriority;
      task.updated = true;
      newList[key - 1].updated = true;
    } else {
      const tempPriority = newList[key + 1].priority;
      newList[key + 1].priority = task.priority;
      task.priority = tempPriority;
      task.updated = true;
      newList[key + 1].updated = true;
    }
    dispatch({ type: TYPES.UPDATE_TODO_LIST, todoList: newList });
  };

  const handleUpdate = (task) => {
    _handleDrawer(true, dispatch);
    dispatch({ type: TYPES.SET_NEWTASK, newTask: task });
  };
  
  return (
    <>
      {!!displayList?.length && (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Sr.No.</Th>
                <Th>ToDo Task</Th>
                <Th>URL</Th>
                <Th>PLAY</Th>
                <Th>Date</Th>

                <Th>Priority</Th>
                <Th>Update</Th>
                <Th>Delete</Th>
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
                    <Td>
                      <ArrowForwardIcon />
                    </Td>
                    <Td>{task?.etaDate}</Td>
                    <Td>
                      <>
                        {" "}
                        <Button
                          colorScheme="gray"
                          isDisabled={index == 0}
                          onClick={() => {
                            handlePriorityChange(task.id, "high", index, task);
                          }}
                          variant="outline"
                        >
                          <ChevronUpIcon />
                        </Button>
                        <Button
                          colorScheme="gray"
                          isDisabled={index == displayList.length - 1}
                          onClick={() => {
                            handlePriorityChange(task.id, "low", index, task);
                          }}
                          variant="outline"
                        >
                          <ChevronDownIcon />
                        </Button>
                      </>
                      <Tooltip
                        label={`priority is ${task?.priority}`}
                        aria-label="A tooltip"
                      >
                        <InfoOutlineIcon />
                      </Tooltip>
                    </Td>
                    <Td>
                      {" "}
                      <Button
                        onClick={() => handleUpdate(task)}
                        colorScheme="blue"
                        variant="outline"
                      >
                        <LinkIcon />
                      </Button>
                    </Td>
                    <Td>
                      {" "}
                      <Button
                        onClick={() =>
                          handleDelete(task?.id, dispatch, user?.uid)
                        }
                        colorScheme="orange"
                        variant="outline"
                      >
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
