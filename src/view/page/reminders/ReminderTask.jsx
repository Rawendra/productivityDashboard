import { useEffect, useState } from "react";
import { useStore } from "../../../context/ContextStore";
import { areDatesEqual } from "../../../components/calender/CalenderUtils";
import TableDisplay from "../../../components/table/TableDisplay";
function ReminderTask() {
  const {
    store: { selectedDate, todoList },
  } = useStore();
  const [todoListDisplay, setTodoListDisplay] = useState([]);

  useEffect(() => {
    const _todoList = todoList.filter((task) => {
      return areDatesEqual(new Date(task?.etaDate), selectedDate?.date);
    });
    setTodoListDisplay(_todoList);
  }, [selectedDate, todoList]);
  return (
    <div>
      <TableDisplay displayList={todoListDisplay} />
    </div>
  );
}

export default ReminderTask;
