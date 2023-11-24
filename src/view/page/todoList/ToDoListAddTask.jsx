import { useRef, useReducer, useState } from "react";
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
import { useDisclosure } from "@chakra-ui/react";
import { initalState, reducer, submit } from "./todoListUtils";
import { useUpdateStore } from "../../../context/ContextStore";

function ToDoListAddTask() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAlert, closeAlert] = useState(false);
  const [newTask, dispatch] = useReducer(reducer, initalState);
  const dispatchToContextStore = useUpdateStore();
  const btnRef = useRef();
  const handleUpdate = (e, key) => {
    dispatch({ type: "UPDATE_STATE", key, value: e.target.value });
  };

  const handleSubmit = () => {
    submit(newTask, dispatchToContextStore);
    //dispatchToContextStore({ type: TYPES.UPDATE_TODO_LIST });
    onClose();
  };

  return (
    <>
      <Button
        ref={btnRef}
        colorScheme="teal"
        variant="outline"
        onClick={onOpen}
      >
        ADD NEW TASK
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
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
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                dispatch({ type: "RESET" });
              }}
            >
              Clear
            </Button>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                dispatch({ type: "RESET" });
                onClose();
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
