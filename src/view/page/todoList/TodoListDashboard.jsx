import { useUpdateStore, useStore, TYPES } from "../../../context/ContextStore";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../db/initDb";
import TodoListTableDisplay from "./TodoListTableDisplay";
import ToDoListAddTask from "./ToDoListAddTask";
import { udpateToDoListFromDatabase } from "./todoListUtils";
import { Spinner } from "@chakra-ui/react";
function TodoListDashboard() {
  const dispatch = useUpdateStore();

  const [displaySpinner, setdisplaySpinner] = useState(true);
  useEffect(() => {
    udpateToDoListFromDatabase(dispatch);
    setdisplaySpinner(false);
    // getDocs(collectionRef).then(({ docs }) => {
    //   const todoList = docs.map((doc) => {
    //     return { id: doc.id, ...doc.data() };
    //   });
    //   console.log("todoList", todoList);
    //   dispatch({ type: TYPES.UPDATE_TODO_LIST, todoList });
    // });
  }, []);

  return (
    <div>
      {" "}
      {displaySpinner ? (
        <Spinner />
      ) : (
        <>
          {" "}
          <TodoListTableDisplay /> <ToDoListAddTask />
        </>
      )}
    </div>
  );
}

export default TodoListDashboard;
