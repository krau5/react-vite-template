export type ThemeColorName =
  | 'primary'
  | 'primaryLight'
  | 'primaryDark'
  | 'black'
  | 'white';

export type Theme = {
  color: Record<ThemeColorName, string>;
  font: string;
  unit: number;
  sizing: (...sizes: (string | number | undefined)[]) => string;
};
