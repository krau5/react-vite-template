import { css } from '@emotion/react';
import { Theme } from 'types';
import { font } from './Font.styles';

export const styles = {
  global: (theme: Theme) => css`
    ${font()}

    * {
      font-family: ${theme.font};
      color: ${theme.color.black};
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
  `,
};
