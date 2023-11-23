import { Route, Routes } from "react-router-dom";

import HabitTracker from "../view/page/habitTracker/HabitTracker";
import TodoListDashboard from "../view/page/todoList/TodoListDashboard";
import ReminderComponent from "../view/page/reminders/ReminderComponent";
import LandingPage from "../view/page/landingPage/LandingPage";
import { ROUTES } from "../constants/routes";
function RoutesCustom() {
  return (
    <>
      {" "}
    
      <Routes>
        <Route path={ROUTES.REMINDERS_ROUTE}element={<ReminderComponent />} />
        <Route path={ROUTES.TODOLIST_ROUTE} element={<TodoListDashboard />} />
        <Route path={ROUTES.HABIT_TRACKER_ROUTES}  element={<HabitTracker />} />

        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default RoutesCustom;
