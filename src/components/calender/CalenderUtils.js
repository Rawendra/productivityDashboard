export function areDatesEqual(date1, date2) {
  // Extract date components
  const day1 = date1.getDate();
  const month1 = date1.getMonth();
  const year1 = date1.getFullYear();

  const day2 = date2.getDate();
  const month2 = date2.getMonth();
  const year2 = date2.getFullYear();

  // Compare date components
  return day1 === day2 && month1 === month2 && year1 === year2;
}

export const getReminder = (date, todoList) => {
  const etaDates = todoList.map((task) => task.etaDate);
  const matchFound = etaDates.find((etaDate) =>
    areDatesEqual(date, new Date(etaDate))
  );

  return matchFound;
};

export const getArrayOfCurrentMonthDates = (
  currentDate = new Date(),
  todoList
) => {
  //const date = new Date();

  const prevDates = [currentDate];
  const _currentDateReference = new Date(currentDate.valueOf());

  //prevDateReference.setDate(currentDate.getDate()-1)
  while (prevDates[0].getDay() > 0) {
    _currentDateReference.setDate(_currentDateReference.getDate() - 1); //_currentDateReference  to 1 day before
    const prevDateReference = new Date(_currentDateReference.valueOf()); //creating prev from _currentDateReference
    prevDates.unshift(prevDateReference); //pushing the prevDateReference as first entry
  }

  //getting days rest of current week

  const currentDateIndex = prevDates.length - 1;
  let remainingDaysOfWeek = 7 - prevDates.length;
  let referenceDate = new Date();
  while (remainingDaysOfWeek > 0) {
    let currentDate = new Date();
    currentDate.setDate(referenceDate.getDate() + 1);
    prevDates.push(currentDate);
    referenceDate.setDate(referenceDate.getDate() + 1);
    remainingDaysOfWeek--;
  }
  //adding next 3 weeks
  remainingDaysOfWeek = 21;
  while (remainingDaysOfWeek > 0) {
    let currentDate = new Date();
    currentDate.setDate(referenceDate.getDate() + 1);
    prevDates.push(currentDate);
    referenceDate.setDate(referenceDate.getDate() + 1);
    remainingDaysOfWeek--;
  }

  const result = prevDates.map((date, index) => {
    return {
      date: date,
      isCurrentDate: index === currentDateIndex,
      hasReminder: getReminder(date, todoList),
    };
  });

  return result; //[...daysHeaders, ...prevDates];
};
export const daysHeaders = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
