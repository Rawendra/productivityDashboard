export const getReminder = (date) => {
  if (date === new Date()) {
    return true;
  }
  return false;
};

export const getArrayOfCurrentMonthDates = (currentDate = new Date()) => {
  //const date = new Date();

  const prevDates = [currentDate];
  const _currentDateReference=new Date(currentDate.valueOf())

  //prevDateReference.setDate(currentDate.getDate()-1)
  while (prevDates[0].getDay() > 0) {
    _currentDateReference.setDate(_currentDateReference.getDate()-1)//_currentDateReference  to 1 day before
    const prevDateReference = new Date(_currentDateReference.valueOf());//creating prev from _currentDateReference    
    prevDates.unshift(prevDateReference);//pushing the prevDateReference as first entry
    
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
      hasReminder: getReminder(date),
    };
  });
  return result; //[...daysHeaders, ...prevDates];
};
export const daysHeaders = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"];
