import { PropsWithChildren } from 'react';
import { ThemeProvider, Global } from '@emotion/react';
import { Theme } from 'types';
import { styles } from './UIProvider.styles';

const staticTheme: Omit<Theme, 'sizing'> = {
  color: {
    primary: '#0088cc',
    primaryLight: '#0197e2',
    primaryDark: '#0082c2',
    black: '#000000',
    white: '#ffffff',
  },
  font: "'Open Sans', sans-serif",
  unit: 4,
};

const getTheme = (): Theme => {
  const { unit, ...rest } = staticTheme;

  return {
    ...rest,
    unit,
    sizing: (...sizes) => {
      return sizes.reduce<string>((accumulator, size) => {
        if (size) {
          return `${accumulator}${
            typeof size === 'string' ? size : `${size * unit}px`
          } `;
        }

        return accumulator;
      }, '');
    },
  };
};

export const UIProvider = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={getTheme()}>
    {children}
    <Global styles={styles.global(getTheme())} />
  </ThemeProvider>
);
