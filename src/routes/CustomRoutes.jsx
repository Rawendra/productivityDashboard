import { Route, Routes } from "react-router-dom";

import HabitTracker from "../view/page/habitTracker/HabitTracker";
import TodoListDashboard from "../view/page/todoList/TodoListDashboard";
import ReminderComponent from "../view/page/reminders/ReminderComponent";
import LandingPage from "../view/page/landingPage/LandingPage";
import CurrentProject from "../view/page/currentProject/CurrentProject";
import { ROUTES } from "../constants/routes";
import { useStore } from "../context/ContextStore";

function RoutesCustom() {
  const {
    store: {
      user: { isAuthenticated },
    },
  } = useStore();

  return (
    <>
      {" "}
      <Routes>
        {isAuthenticated && (
          <Route
            path={ROUTES.REMINDERS_ROUTE}
            element={<ReminderComponent />}
          />
        )}

        {isAuthenticated && (
          <Route path={ROUTES.TODOLIST_ROUTE} element={<TodoListDashboard />} />
        )}

        {isAuthenticated && (
          <Route
            path={ROUTES.HABIT_TRACKER_ROUTES}
            element={<HabitTracker />}
          />
        )}

        <Route path={ROUTES.CURRENT_PROJECT} element={<CurrentProject />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default RoutesCustom;
