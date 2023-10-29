import { useMemo } from "react";
export const DOTS = "...";

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount,
  currentPage,
  totalPageCount,
}) => {
  const paginationRange = useMemo(() => {
    // our main logic goes here
    const totalPageNumbers = siblingCount + 5;

    // state 1
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }
    // calculating the left and right siblings

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    // calculating whether we want to show to show the left dots , right dots r both of them
    // we don't show dots when it is just a one page number inserted between the sibling and the page limit

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // stage2: no left dots to show but right dots to show
    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    // stage3: no right dot to show but left dots to shown
    if (!shouldShowRightDots && shouldShowLeftDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );

      return [firstPageIndex, DOTS, ...rightRange];
    }

    // stage4: both dots to be shown

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, middleRange, DOTS, lastPageIndex];
    }
  }, [siblingCount, currentPage, totalPageCount]);

  return paginationRange;
};

function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (value, index) => index + start); // [undefined,undefined,undefined,undefined,undefined]
}
