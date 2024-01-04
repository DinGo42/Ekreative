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
