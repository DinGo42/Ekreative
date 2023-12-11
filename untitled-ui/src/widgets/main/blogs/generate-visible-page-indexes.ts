const getNumberInRange = (number: number, min?: number, max?: number) =>
  Math.min(Math.max(number, min!), max!);

export const generatePageIndexes = (
  current: number,
  maximum: number,
  step: number
): number[][] => {
  const max: number[] = [];
  const min: number[] = [];

  if (maximum >= (step + 1) * 2) {
    for (let i = 0; i <= step * 2; i++) {
      max.push(maximum - i);
    }

    const totalIndex = step * 2 + 1;
    const smallestOfMaxIndexes = max[step * 2];
    const NumberOfIndexesToCurrentPage = step + 1;

    if (current > totalIndex) {
      min.push(
        ...Array.from({ length: step }, (_, index) =>
          getNumberInRange(
            current - (index + 1),
            index + 1,
            smallestOfMaxIndexes - (index + 2) - step
          )
        )
      );

      min.push(
        Math.min(current, smallestOfMaxIndexes - NumberOfIndexesToCurrentPage)
      );

      min.push(
        ...Array.from({ length: step }, (_, index) =>
          Math.min(current + index + 1, smallestOfMaxIndexes - index - 1)
        )
      );

      return [min.sort((a, b) => a - b), max.sort()];
    }
    min.push(...Array.from({ length: totalIndex }, (_, index) => index + 1));

    return [min, max.sort()];
  }
  const result = [];
  for (let i = 1; i <= maximum; i++) {
    result.push(i);
  }
  return [result.splice(0, (step + 1) * 2), result.splice((step + 1) * 2)];
};
