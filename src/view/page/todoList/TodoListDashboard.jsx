import { useUpdateStore, useStore, TYPES } from "../../../context/ContextStore";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../../db/initDb";
import TodoListTableDisplay from "./TodoListTableDisplay";

function TodoListDashboard() {
  const dispatch = useUpdateStore();
  useEffect(() => {
    const collectionRef = collection(database, "todoList");
    getDocs(collectionRef).then(({ docs }) => {
      const todoList = docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      console.log("todoList", todoList);
      dispatch({ type: TYPES.UPDATE_TODO_LIST, todoList });
    });
  }, []);

  return (
    <div>
      {" "}
      <TodoListTableDisplay />{" "}
    </div>
  );
}

export default TodoListDashboard;
