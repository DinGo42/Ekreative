import { StepProps } from "./step";

type StepsInfoType = {
  id: number;
  title: StepProps["stepTitle"];
  text: StepProps["stepText"];
};

export const stepsInfo: StepsInfoType[] = [
  {
    id: 1,
    title: "Strategy",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
  {
    id: 2,
    title: "Wireframing",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
  {
    id: 3,
    title: "Design",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
  {
    id: 4,
    title: "Development",
    text: "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .",
  },
];
