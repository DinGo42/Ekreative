import { FeedbackCardProps } from './feedback-card';

type feedbacksType = {
  avatar: FeedbackCardProps['authorAvatarLink'];
  fullName: FeedbackCardProps['authorFullName'];
  possition: FeedbackCardProps['authorPossition'];
  text: string;
};

export const feedbacks: feedbacksType[] = [
  {
    avatar: '/feedbacks/avatar_1.png',
    fullName: 'Jenny Wilson',
    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    possition: 'Vice President',
  },
  {
    avatar: '/feedbacks/avatar_1.png',
    fullName: 'Ivan Nesterenko',
    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    possition: 'Frontend Developer',
  },
  {
    avatar: '/feedbacks/avatar_1.png',
    fullName: 'Jenny Wilson',
    text: '"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."',
    possition: 'Vice President',
  },
];
