export const calculateReadingTime = (sentence: string, readingSpeed: number = 200) => {
  const minutes = sentence.split(" ").length / readingSpeed;
  return Math.ceil(minutes);
};
