import JSONData from './data.json';

export type blogsDataType = {
  categoty: CategoriesTypes;
  imageSrc: string;
  imageAlt: string;
  avatarBgColor: string;
  avatarSrc: string;
  avatarAlt: string;
  id: string;
  title: string;
  text: string;
  fullname: string;
  publication: Date;
};
export enum CategoriesTypes {
  DESIGN = 'Design',
  PRODUCT = 'Product',
  SOFTWARE_ENGINEERING = 'Software Engineering',
  CUSTOMER_SUCCESS = 'Customer Success',
}

export const blogsData: blogsDataType[] = JSON.parse(JSON.stringify(JSONData));
