import HeaderLink from "./HeaderLink";
import { appConfig } from "../../AppConfig";

import "./Header.css";
function Header() {
  const { pages } = appConfig;
  return (
    <>
      <div className="personalised-dashboard-parent-header">
        {pages.map((page, key) => {
          return (
            <HeaderLink
              key={`header-Link-${key}`}
              title={page?.title}
              route={page?.route}
            />
          );
        })}
        <div className="personalised-dashboard-parent-header-right-bar">
          <div className="personalised-dashboard-parent-header-right-bar-item">
            PROFILE
          </div>
          <div className="personalised-dashboard-parent-header-right-bar-item">
            ABOUT US
          </div>
          <div className="personalised-dashboard-parent-header-right-bar-item">
            LOG OFF
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
