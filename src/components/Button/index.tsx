import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { styles } from './Button.styles';

export const Button = ({
  children,
  type = 'button',
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button css={styles.button} type={type} {...props}>
    {children}
  </button>
);
