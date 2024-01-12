import JSONData from './data.json';

export type Employees = {
  imageSrc: string;
  imageAlt: string;
  fullName: string;
  quote: string;
  rating: number;
  position: string;
};

export const employeesData: Employees[] = JSON.parse(JSON.stringify(JSONData));
