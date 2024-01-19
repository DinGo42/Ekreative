import { FeedbackCardProps } from "./feedback-card";

type FeedbacksType = {
  avatar: FeedbackCardProps["authorAvatarLink"];
  fullName: FeedbackCardProps["authorFullName"];
  position: FeedbackCardProps["authorPosition"];
  text: string;
};

export const feedbacks: FeedbacksType[] = [
  {
    avatar: "/feedbacks/avatar_1.png",
    fullName: "Jenny Wilson",
    text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    position: "Vice President",
  },
  {
    avatar: "/feedbacks/avatar_1.png",
    fullName: "Ivan Nesterenko",
    text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    position: "Frontend Developer",
  },
  {
    avatar: "/feedbacks/avatar_1.png",
    fullName: "Jenny Wilson",
    text: "The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus.",
    position: "Vice President",
  },
];
