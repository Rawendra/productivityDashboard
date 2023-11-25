export function getDaysInCurrentMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}
export const getArrayOfCurrentMonthDates = () => {
  const date = new Date();

  const prevDates = [date];
  console.log("prevDates[0].getDay()", prevDates[0].getDay());
  while (prevDates[0].getDay() > 1) {
    const prevDate = new Date();
    prevDate.setDate(prevDates[0].getDate() - 1);
    prevDates.unshift(prevDate);
  }

  //getting days rest of current week
  console.log(
    "prevDates[prevDates.length-1].getDay()",
    prevDates[prevDates.length - 1].getDay()
  );

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

  console.log("printing the days upto monday in ", prevDates);
 
  return prevDates ;//[...daysHeaders, ...prevDates];
};
export  const daysHeaders = ["MON", "TUES", "WED", "THURS", "FRI", "SAT", "SUN"];