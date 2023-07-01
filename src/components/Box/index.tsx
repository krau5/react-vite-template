import { PropsWithChildren } from 'react';
import { BoxProps } from './types';
import { styles } from './Box.styles';

export const Box = ({ children, ...props }: PropsWithChildren<BoxProps>) => (
  <div css={styles.container(props)}>{children}</div>
);
