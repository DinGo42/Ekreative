interface MonthInfo {
  fullMonth: string;
  shortMonth: string;
}

export const Months: MonthInfo[] = [
  { fullMonth: "January", shortMonth: "Jan" },
  { fullMonth: "February", shortMonth: "Feb" },
  { fullMonth: "March", shortMonth: "Mar" },
  { fullMonth: "April", shortMonth: "Apr" },
  { fullMonth: "May", shortMonth: "May" },
  { fullMonth: "June", shortMonth: "Jun" },
  { fullMonth: "July", shortMonth: "Jul" },
  { fullMonth: "August", shortMonth: "Aug" },
  { fullMonth: "September", shortMonth: "Sep" },
  { fullMonth: "October", shortMonth: "Oct" },
  { fullMonth: "November", shortMonth: "Nov" },
  { fullMonth: "December", shortMonth: "Dec" },
];

export const validateDate = (publication?: Date) => {
  if (!publication) return null;
  const date = new Date(publication);
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const year = date.getFullYear();

  const day = date && (currentDay < 9 ? "0" + currentDay : currentDay);
  const month = Months[currentMonth];

  const lastDigit = currentDay % 10;
  const lastTwoDigits = currentDay % 100;

  let daySuffix: "th" | "st" | "nd" | "rd";

  switch (true) {
    case lastTwoDigits >= 11 && lastTwoDigits <= 13:
      daySuffix = "th";
      break;
    case lastDigit === 1:
      daySuffix = "st";
      break;
    case lastDigit === 2:
      daySuffix = "nd";
      break;
    case lastDigit === 3:
      daySuffix = "rd";
      break;
    default:
      daySuffix = "th";
      break;
  }

  return {
    day,
    ...month,
    year,
    daySuffix,
    dayNumber: currentDay,
    monthNumber: currentMonth,
  };
};
