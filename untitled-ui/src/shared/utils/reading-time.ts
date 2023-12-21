export const calculateReadingTime = (
  sentence: string,
  readingSpeed: number = 200
) => {
  const minutes = sentence.split(/\s+/).length / readingSpeed;
  return Math.ceil(minutes);
};
