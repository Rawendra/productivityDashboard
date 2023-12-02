import HeaderLink from "./HeaderLink";
import { appConfig } from "../../AppConfig";
import SideHeader from "./SideHeader";
import "./Header.css";
function Header() {
  const { pages } = appConfig;
  return (
    <>
      <div className="personalised-dashboard-parent-header">
        {pages.map((page, key) => (
          <HeaderLink
            key={`header-Link-${key}`}
            title={page?.title}
            route={page?.route}
          />
        ))}

        <SideHeader />
      </div>
    </>
  );
}

export default Header;
