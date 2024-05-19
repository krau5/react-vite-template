import { css } from '@emotion/react';
import type { Theme } from 'types';

export const styles = {
  button: (theme: Theme) => css`
    padding: ${theme.sizing(2, 4)};
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: ${theme.sizing(2)};
    background: ${theme.color.primary};
    color: ${theme.color.white};

    &:hover {
      background: ${theme.color.primaryLight};
    }

    &:active {
      background: ${theme.color.primaryDark};
    }
  `,
};
