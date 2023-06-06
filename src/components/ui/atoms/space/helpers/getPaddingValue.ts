export const getPaddingValue = (
  padding?: number,
  paddingX?: number,
  paddingY?: number,
  paddingTop?: number,
  paddingBottom?: number,
  paddingLeft?: number,
  paddingRight?: number,
) => {
  let result = [0, 0, 0, 0];

  if (padding) result = result.map(() => padding);

  if (paddingX) {
    result[1] = paddingX;
    result[3] = paddingX;
  }

  if (paddingY) {
    result[0] = paddingY;
    result[2] = paddingY;
  }

  if (paddingTop) result[0] = paddingTop;
  if (paddingRight) result[1] = paddingRight;
  if (paddingBottom) result[2] = paddingBottom;
  if (paddingLeft) result[3] = paddingLeft;

  return result.reduce((acc, cur) => `${acc}${cur}px `, '');
};
