import '@emotion/react';
import type { Interpolation } from '@emotion/serialize';
import type { Theme as UITheme } from '.';

declare module '@emotion/react' {
  export type Theme = UITheme;
}

declare module '@emotion/core' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMAttributes<T> {
    css?: Interpolation<UITheme>;
  }
}
