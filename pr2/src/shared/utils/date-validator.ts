import { FullMonths, Months } from '../constants';

export const validateDate = (date: Date) => {
  const day =
    date && (date.getDate() < 9 ? '0' + date.getDate() : date.getDate());
  const dayAsNumber = date.getDate();
  const monthAsNumber = date.getMonth() + 1;
  const month = Months[date.getMonth()];
  const fullMonth = FullMonths[month];
  const year = date.getFullYear();

  const lastDigit = date.getDate() % 10;
  const lastTwoDigits = date.getDate() % 100;

  const daySuffix =
    lastTwoDigits >= 11 && lastTwoDigits <= 13
      ? ' th'
      : lastDigit === 1
      ? 'st'
      : lastDigit === 2
      ? 'nd'
      : lastDigit === 3
      ? 'rd'
      : 'th';
  return { day, month, year, daySuffix, monthAsNumber, dayAsNumber, fullMonth };
};
