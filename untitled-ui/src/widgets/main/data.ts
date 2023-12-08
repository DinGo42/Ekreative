import JSONData from './data.json';

type blogsDataType = {
  categoty: Categories;
  imageSrc: string;
  avatarBgColor: string;
  avatarSrc: string;
  avatarAlt: string;
  title: string;
  text: string;
  fullname: string;
  publication: Date;
};
export enum Categories {
  DESIGN = 'Design',
  PRODUCT = 'Product',
  SOFTWARE_ENGINEERING = 'Software Engineering',
  CUSTOMER_SUCCESS = 'Customer Success',
}

export const blogsData: blogsDataType[] = JSON.parse(JSON.stringify(JSONData));
