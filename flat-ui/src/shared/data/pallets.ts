import palletsJSON from './pallets.json';

const dataJSON = JSON.stringify(palletsJSON);

export const PalletsData = JSON.parse(dataJSON) as {
  paletteName: string;
  id: string;
  emoji: string;
  colors: { name: string; color: string }[];
}[];
