import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

function SideHeader() {
  const [togglevalue, setToggleValue] = useState(false);
  const expandCollapse = () => {
    setToggleValue(prevState=>!prevState)
  };
  return (
    <>
      <div className="personalised-dashboard-parent-header-right-bar">
        {togglevalue ? (
          <>
            <div className="personalised-dashboard-parent-header-right-bar-item">
              PROFILE
            </div>
            <div className="personalised-dashboard-parent-header-right-bar-item">
              ABOUT US
            </div>
            <div className="personalised-dashboard-parent-header-right-bar-item">
              LOG OFF
            </div>
            <div className="personalised-dashboard-parent-header-right-bar-item">
              <Button onClick={expandCollapse}>
                {" "}
                <ArrowRightIcon />
              </Button>
            </div>
          </>
        ) : (
          <div className="personalised-dashboard-parent-header-right-bar-item">
            <Button onClick={expandCollapse}>
              {" "}
              <ArrowLeftIcon />
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default SideHeader;
