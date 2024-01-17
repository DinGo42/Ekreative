const clamp = (value: number, min: number, max: number): number => Math.min(Math.max(value, min), max);

export const generatePageIndexes = (
  currentPage: number,
  totalPages: number,
  lastItemsCount: number,
  sidewaysCount: number,
): number[] => {
  if (currentPage < 0 || totalPages < 0 || lastItemsCount < 0 || sidewaysCount < 0) {
    return [];
  }

  if (lastItemsCount + sidewaysCount * 2 >= totalPages) {
    return Array.from({ length: totalPages }, (unknown, index) => index + 1);
  }

  const minimalLength = lastItemsCount + sidewaysCount * 2 + 1;
  const result: number[] = [];

  const countToLeftEnd = clamp(
    currentPage - sidewaysCount >= 0 ? currentPage - sidewaysCount : sidewaysCount - (currentPage - sidewaysCount),
    0,
    sidewaysCount,
  );

  const countToRightEnd = clamp(
    currentPage + sidewaysCount <= totalPages - lastItemsCount
      ? currentPage + sidewaysCount
      : totalPages - lastItemsCount - (currentPage + sidewaysCount),
    0,
    countToLeftEnd === 0 ? lastItemsCount : sidewaysCount,
  );

  const countToLeftEndAdjusted =
    countToRightEnd < sidewaysCount
      ? clamp(minimalLength - 1 - lastItemsCount, 0, minimalLength - lastItemsCount - countToRightEnd)
      : countToLeftEnd;

  Array.from({ length: countToLeftEndAdjusted + countToRightEnd + 1 }).forEach((unknown, index) => {
    const adjustedCurrentPage = currentPage > totalPages - lastItemsCount ? totalPages - lastItemsCount : currentPage;
    result.push(adjustedCurrentPage - countToLeftEndAdjusted + index);
  });

  Array.from({ length: lastItemsCount }).forEach((unknown, index) =>
    result.push(totalPages + index + 1 - lastItemsCount),
  );

  return result;
};
