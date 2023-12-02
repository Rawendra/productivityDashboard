import "./Calender.css";

import { getArrayOfCurrentMonthDates, daysHeaders } from "./CalenderUtils";
import { Button } from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";
import { Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const MONTHS = [
  "JAN",
  "FEB",
  "MARCH",
  "APRIL",
  "MAY",
  "JUNE",
  "JULY",
  "AUGUST",
  "SEPTEMBER",
  "OCTOBER",
  "NOVEMBER",
  "DECEMBER",
];
const getMonthName = (date) => {
  const key = date.getMonth() + 1;
  
  return MONTHS[date.getMonth()];
};
const currentDate = new Date();
const getClassForDate = (currentDate) => {
  return currentDate?.isCurrentDate
    ? "container-calender-item-current"
    : "container-calender-item";
};
function Calender() {
  const [shouldDisplay, setshouldDisplay] = useState(false);

  const allDatesInCurrentMonth = getArrayOfCurrentMonthDates(currentDate);
  const handleOnClick = (currentDate) => {
  };
  useEffect(() => {
    setTimeout(() => {
      setshouldDisplay(true);
    }, 2000);
  }, []);

  const handleChangeDate = (_case) => {
    const _currentDateref = new Date(currentDate.valueOf());
    setshouldDisplay(false);
    if (_case == "NEXT") {
      currentDate.setMonth(currentDate.getMonth() + 1);
      _currentDateref.setDate(currentDate);
    } else {
      currentDate.setMonth(currentDate.getMonth() - 1);
      _currentDateref.setDate(currentDate);
    }
    setTimeout(() => {
      setshouldDisplay(true);
    }, 1000);
  };

  return (
    <>
      <div className="calendar-month-tab">
        <Button
          size="xs"
          colorScheme="blue"
          onClick={() => {
            handleChangeDate("PREV");
          }}
        >
          Previous Month
        </Button>
        <Text fontSize="3xl">{`${getMonthName(
          currentDate
        )}-${currentDate.getFullYear()} `}</Text>
        <Button
          size="xs"
          colorScheme="blue"
          onClick={() => {
            handleChangeDate("NEXT");
          }}
        >
          Next Month
        </Button>
      </div>

      <div className="container-calender">
        {daysHeaders?.map((currentDay) => {
          return (
            <div
              key={`${currentDay?.toString()}-header`}
              className="container-calender-item-header"
            >
              {currentDay}
            </div>
          );
        })}
      </div>
      {shouldDisplay ? (
        <div className="container-calender">
          {allDatesInCurrentMonth?.map((currentDay) => {
            return (
              <div
                key={currentDay?.toString()}
                className={getClassForDate(currentDay)}
                onClick={() => handleOnClick(currentDay)}
              >
                {currentDay?.hasReminder && <BellIcon boxSize={3} />}{" "}
                {currentDay?.date?.getDate()}
              </div>
            );
          })}
        </div>
      ) : (
        <>
          We're are rendering the calender <Spinner />
        </>
      )}
    </>
  );
}

export default Calender;
