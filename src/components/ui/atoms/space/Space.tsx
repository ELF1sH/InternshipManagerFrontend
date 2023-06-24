import styled, { css } from 'styled-components';

import { getPaddingValue } from 'components/ui/atoms/space/helpers/getPaddingValue';

interface SpaceProps {
  direction?: 'vertical' | 'horizontal';
  justifyContent?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'start' | 'center' | 'end';
  gap?: number;
  $wrap?: boolean;

  padding?: number;
  paddingX?: number;
  paddingY?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;

  growAllChildren?: boolean;
  shrinkAllChildren?: boolean;
  noShrink?: boolean;
}

const Space = styled.div<SpaceProps>`
  ${({
    direction = 'horizontal',
    justifyContent,
    alignItems,
    gap,
    $wrap,

    padding,
    paddingX,
    paddingY,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,

    growAllChildren = false,
    shrinkAllChildren = false,
    noShrink = false,
  }) => css`
    display: flex;
    width: 100%;
    flex-direction: ${direction === 'vertical' ? 'column' : 'row'};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    gap: ${gap}px;
    flex-wrap: ${$wrap ? 'wrap' : 'no-wrap'};

    padding: ${getPaddingValue(padding, paddingX, paddingY, paddingTop, paddingBottom, paddingLeft, paddingRight)};

    > * {
      margin-bottom: 0;
    }

    ${growAllChildren && css`
      > * {
        flex-grow: 1;
      }
    `}

    ${shrinkAllChildren && css`
      > * {
        flex-shrink: 1;
      }
    `}

    ${noShrink && css`
      > * {
        flex-shrink: 0;
      }
    `}
  `}
`;

export default Space;
