import { Route, Routes } from "react-router-dom";

import HabitTracker from "../view/page/habitTracker/HabitTracker";
import TodoListDashboard from "../view/page/todoList/TodoListDashboard";
import ReminderComponent from "../view/page/reminders/ReminderComponent";
import LandingPage from "../view/page/landingPage/LandingPage";
import CurrentProject from "../view/page/currentProject/CurrentProject";
import { ROUTES, pages } from "../constants/routes";
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
        {pages.map(({ Component, route, isAuthNeeded }) => {
          if (isAuthNeeded && isAuthenticated) {
            return <Route key={route} path={route} element={<Component />} />;
          } else {
            <Route key={route} path={route} element={<Component />} />;
          }
        })}
    
         <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default RoutesCustom;
