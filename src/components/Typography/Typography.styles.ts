import { css, SerializedStyles } from '@emotion/react';
import { TypographyVariant } from 'components/Typography/types';
import { Theme, ThemeColorName } from 'types';

type Props = {
  fontSize: number;
  fontWeight: number;
  letterSpacing: number;
  lineHeight: number;
};

type TypographyStyleProps = Props & {
  color?: ThemeColorName;
};

const typographyMap: Record<TypographyVariant, Props> = {
  h3: {
    fontSize: 48,
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: 56,
  },
};

const typographyStyle =
  ({
    fontSize,
    fontWeight,
    letterSpacing,
    lineHeight,
    color,
  }: TypographyStyleProps) =>
  (theme: Theme) =>
    css`
      font-family: ${theme.font};
      font-size: ${fontSize}px;
      font-weight: ${fontWeight};
      letter-spacing: ${letterSpacing}px;
      line-height: ${lineHeight}px;

      color: ${color ? theme.color[color] : theme.color.black};
    `;

export const typographyStyles: Record<
  TypographyVariant,
  (color?: ThemeColorName) => (theme: Theme) => SerializedStyles
> = {
  h3: (color) => typographyStyle({ color, ...typographyMap.h3 }),
};
