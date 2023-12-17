import { Route, Routes } from "react-router-dom";
import LandingPage from "../view/page/landingPage/LandingPage";
import { pages } from "../constants/routes";
import { useStore } from "../context/ContextStore";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function RoutesCustom() {
  const {
    store: {
      user: { isAuthenticated },
    },
  } = useStore();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const shouldRedirect = location.pathname !== "/" && !isAuthenticated;
    if (shouldRedirect) {
      navigate("/");
    }
  }, []);

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
