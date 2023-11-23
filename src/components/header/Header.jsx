import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
function Header() {
  return (
    <Tabs>
      <TabList>
        <Tab>
          <NavLink
            to={ROUTES.REMINDERS_ROUTE}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            <div className="nav-item-header">REMINDERS_ROUTE</div>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink
            to={ROUTES.TODOLIST_ROUTE}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            <div className="nav-item-header">TODOLIST_ROUTE</div>
          </NavLink>
        </Tab>
        <Tab>
          <NavLink
            to={ROUTES.HABIT_TRACKER_ROUTES}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
          >
            <div className="nav-item-header">HABIT_TRACKER_ROUTES</div>
          </NavLink>
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>one!</p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default Header;
