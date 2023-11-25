import "./Calender.css";

import { getArrayOfCurrentMonthDates ,daysHeaders} from "./CalenderUtils";
function Calender() {
  const allDatesInCurrentMonth = getArrayOfCurrentMonthDates();
  console.log("allDatesInCurrentMonth", allDatesInCurrentMonth);
  return (
    <>
      <h4>Calender</h4>
      <div className="container-calender">
        {daysHeaders?.map((currentDay) => {
          return (
            <div
              key={currentDay?.toString()}
              className="container-calender-item-header"
            >
              {currentDay}
            </div>
          );
        })}
      </div>
      <div className="container-calender">
        {allDatesInCurrentMonth?.map((currentDay) => {
          return (
            <div
              key={currentDay?.toString()}
              className="container-calender-item"
            >
              {currentDay?.getDate()}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Calender;
