import { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import {
  submit,
  _handleDrawer,
  submitBatch,
} from "./todoListUtils";
import { useUpdateStore, useStore } from "../../../context/ContextStore";
import { TYPES } from "../../../context/ContextStoreUtil";
function ToDoListAddTask() {
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    store: {
      newTaskMetaData,
      newTask,
      todoList,
      user: { uid },
    },
  } = useStore();

  const [showAlert] = useState(false);
  //const [newTask, dispatch] = useReducer(reducer, initalState);
  const dispatch = useUpdateStore();
  const btnRef = useRef();
  const handleUpdate = (e, key) => {
    dispatch({ type: TYPES.UPDATE_NEW_TASK, key, value: e.target.value });
  };

  const handleSubmit = () => {
    submit(newTask, dispatch, uid);
    //dispatchToContextStore({ type: TYPES.UPDATE_TODO_LIST });
    handleDrawer(false);
  };
  const handleDrawer = (isOpen) => {
    _handleDrawer(isOpen, dispatch);
  };

  const handlePublish = () => {
    const updatedTask = todoList.filter((task) => task.updated);
    submitBatch(updatedTask, dispatch, uid);
  };
  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        variant="outline"
        onClick={() => handleDrawer(true)}
      >
        ADD NEW TASK
      </Button>
      <Button
        ref={btnRef}
        colorScheme="blue"
        variant="outline"
        onClick={() => handlePublish(true)}
      >
        PUBLISH TASKS
      </Button>
      <Drawer
        isOpen={newTaskMetaData?.isOpen}
        placement="right"
        onClose={() => handleDrawer(false)}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            TASK :{" "}
            <Input
              value={newTask.itemName}
              onChange={(e) => handleUpdate(e, "itemName")}
              placeholder="Type here..."
            />
            ETA DATE :
            <Input
              onChange={(e) => handleUpdate(e, "etaDate")}
              value={newTask.etaDate}
              placeholder="Select Date and Time"
              size="md"
              type="date"
            />
            PRIORITY :
            <Input
              value={newTask.priority}
              onChange={(e) => handleUpdate(e, "priority")}
              placeholder=""
              size="md"
              type="number"
              min={1}
              max={100}
            />
            URL :
            <Input
              value={newTask.url}
              onChange={(e) => handleUpdate(e, "url")}
              placeholder=""
              size="md"
            />
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                dispatch({ type: TYPES.RESET_NEWTASK });
              }}
            >
              Clear
            </Button>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                dispatch({ type: TYPES.RESET_NEWTASK });
                handleDrawer(false);
              }}
            >
              Cancel
            </Button>
            <Button onClick={handleSubmit} colorScheme="blue">
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {showAlert && (
        <Alert status="success" variant="solid">
          <AlertIcon />
          Data uploaded to the server. Fire on!
        </Alert>
      )}
    </>
  );
}

export default ToDoListAddTask;
