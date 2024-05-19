import type { JSX } from 'react';
import type { ThemeColorName } from 'types';

/**
 * https://mui.com/material-ui/react-typography/#component
 * */
export type TypographyVariant = 'h3';

export type TypographyProps = {
  /**
   * Custom component to use instead of predefined one in `typographyTags`
   * */
  component?: keyof JSX.IntrinsicElements;
  /**
   * Text color
   * */
  color?: ThemeColorName;
  /**
   * Typography appearance variations
   * */
  variant?: TypographyVariant;
};
