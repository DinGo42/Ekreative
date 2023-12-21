interface MonthInfo {
  fullMonth: string;
  shortMonth: string;
}

export const Months: Record<number, MonthInfo> = {
  1: { fullMonth: 'January', shortMonth: 'Jan' },
  2: { fullMonth: 'February', shortMonth: 'Feb' },
  3: { fullMonth: 'March', shortMonth: 'Mar' },
  4: { fullMonth: 'April', shortMonth: 'Apr' },
  5: { fullMonth: 'May', shortMonth: 'May' },
  6: { fullMonth: 'June', shortMonth: 'Jun' },
  7: { fullMonth: 'July', shortMonth: 'Jul' },
  8: { fullMonth: 'August', shortMonth: 'Aug' },
  9: { fullMonth: 'September', shortMonth: 'Sep' },
  10: { fullMonth: 'October', shortMonth: 'Oct' },
  11: { fullMonth: 'November', shortMonth: 'Nov' },
  12: { fullMonth: 'December', shortMonth: 'Dec' },
};

export const validateDate = (publication?: Date) => {
  if (!publication) return null;
  const date = new Date(publication);
  const currentDay = date.getDate();
  const currentMonth = date.getMonth() + 1;
  const year = date.getFullYear();

  const day = date && (currentDay < 9 ? '0' + currentDay : currentDay);
  const month = Months[currentMonth];

  const lastDigit = currentDay % 10;
  const lastTwoDigits = currentDay % 100;

  let daySuffix: 'th' | 'st' | 'nd' | 'rd';

  switch (true) {
    case lastTwoDigits >= 11 && lastTwoDigits <= 13:
      daySuffix = 'th';
      break;
    case lastDigit === 1:
      daySuffix = 'st';
      break;
    case lastDigit === 2:
      daySuffix = 'nd';
      break;
    case lastDigit === 3:
      daySuffix = 'rd';
      break;
    default:
      daySuffix = 'th';
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
