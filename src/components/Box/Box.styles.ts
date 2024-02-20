import { css } from '@emotion/react';
import { Theme } from 'types';
import { BoxProps } from './types';

export const styles = {
  container:
    ({
      display,
      alignItems,
      justifyContent,
      flexDirection,
      flexWrap,
      gap,

      top,
      right,
      bottom,
      left,

      width,
      height,

      p,
      px,
      py,
      pt,
      pr,
      pb,
      pl,

      m,
      mx,
      my,
      mt,
      mr,
      mb,
      ml,
    }: BoxProps) =>
    (theme: Theme) => css`
      ${display && `display: ${display};`}
      ${alignItems && `align-items: ${alignItems};`}
        ${justifyContent && `justify-content: ${justifyContent};`}
        ${flexDirection && `flex-direction: ${flexDirection};`}
        ${flexWrap && `flex-wrap: ${flexWrap};`}
        ${gap && `gap: ${theme.sizing(gap)};`}
        
        ${top && `top: ${theme.sizing(top)};`}
        ${right && `right: ${theme.sizing(right)};`}
        ${bottom && `bottom: ${theme.sizing(bottom)};`}
        ${left && `left: ${theme.sizing(left)};`}
        
        ${width && `left: ${theme.sizing(width)};`}
        ${height && `left: ${theme.sizing(height)};`}
        
        ${(p || py || pt) && `padding-top: ${theme.sizing(p || py || pt)};`}
        ${(p || px || pr) && `padding-right: ${theme.sizing(p || px || pb)};`}
        ${(p || py || pb) && `padding-bottom: ${theme.sizing(p || py || pb)};`}
        ${(p || px || pl) && `padding-left: ${theme.sizing(p || pl || pb)};`}
        
        ${(m || my || mt) && `margin-top: ${theme.sizing(m || my || mt)};`}
        ${(m || mx || mr) && `margin-right: ${theme.sizing(m || mx || mr)};`}
        ${(m || my || mb) && `margin-bottom: ${theme.sizing(m || my || mb)};`}
        ${(m || mx || ml) && `margin-left: ${theme.sizing(m || mx || ml)};`}
    `,
};
