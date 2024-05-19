import type { JSX, PropsWithChildren } from 'react';
import type { TypographyProps, TypographyVariant } from './types';
import { typographyStyles } from './Typography.styles';

const typographyTags: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
  h3: 'h3',
};

export const Typography = ({
  children,
  color,
  component,
  variant = 'h3',
}: PropsWithChildren<TypographyProps>) => {
  const Component = typographyTags[variant] ?? component;

  return (
    <Component css={typographyStyles[variant](color)}>{children}</Component>
  );
};
