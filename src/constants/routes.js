import HabitTracker from "../view/page/habitTracker/HabitTracker";
import TodoListDashboard from "../view/page/todoList/TodoListDashboard";
import ReminderComponent from "../view/page/reminders/ReminderComponent";
import LandingPage from "../view/page/landingPage/LandingPage";
import ProjectDashboard from "../view/page/currentProject/ProjectDashboard";

export const ROUTES = {
  REMINDERS_ROUTE: "/reminders-page",
  TODOLIST_ROUTE: "/todoList-page",
  HABIT_TRACKER_ROUTES: "/habitTracker-page",
  PROJECT_DASHBOARD: "/projects-tracker-page",
  SIGN_UP: "/",
};

export const TITLES = {
  REMINDERS_ROUTE: "Reminders",
  TODOLIST_ROUTE: "To Do List",
  HABIT_TRACKER_ROUTES: "Habit Tracker",
  PROJECT_DASHBOARD: "Projects-Tracker",
  SIGN_UP: "Sign Up",
};

export const pages = [
  {
    route: ROUTES.REMINDERS_ROUTE,
    title: TITLES.REMINDERS_ROUTE,
    Component: ReminderComponent,
    isAuthNeeded: true,
  },
  {
    route: ROUTES.TODOLIST_ROUTE,
    title: TITLES.TODOLIST_ROUTE,
    Component: TodoListDashboard,
    isAuthNeeded: true,
  },
  {
    route: ROUTES.HABIT_TRACKER_ROUTES,
    title: TITLES.HABIT_TRACKER_ROUTES,
    Component: HabitTracker,
    isAuthNeeded: true,
  },
  {
    route: ROUTES.PROJECT_DASHBOARD,
    title: TITLES.PROJECT_DASHBOARD,
    Component: ProjectDashboard,
    isAuthNeeded: true,
  },
  {
    route: ROUTES.SIGN_UP,
    title: TITLES.SIGN_UP,
    Component: LandingPage,
    isAuthNeeded: false,
  },
];
