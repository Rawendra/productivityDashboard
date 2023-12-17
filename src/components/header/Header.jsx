import HeaderLink from "./HeaderLink";
import { pages } from "../../constants/routes";
// import SideHeader from "./SideHeader";
import { useStore } from "../../context/ContextStore";
import "./Header.css";
function Header() {
 
  const { store } = useStore();
  const displayAuthLinks = store.user.isAuthenticated;

  return (
    <>
      <div className="personalised-dashboard-parent-header">
        {displayAuthLinks ? (
          pages.map((page, key) => (
            <HeaderLink
              key={`header-Link-${key}`}
              title={page?.title}
              route={page?.route}
            />
          ))
        ) : (
          <HeaderLink
            key={`header-Link-landing-page`}
            title={"Sign Up"}
            route={"/"}
          />
        )}

        {/* <SideHeader /> */}
      </div>
    </>
  );
}

export default Header;
