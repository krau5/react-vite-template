type Common = 'normal' | 'stretch' | 'unset';

type AlignItems =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'baseline';

type JustifyContent =
  | 'center'
  | 'start'
  | 'end'
  | 'flex-start'
  | 'flex-end'
  | 'left'
  | 'right'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type BoxSpacingProps = {
  p?: string | number;
  px?: string | number;
  py?: string | number;
  pt?: string | number;
  pr?: string | number;
  pb?: string | number;
  pl?: string | number;

  m?: string | number;
  mx?: string | number;
  my?: string | number;
  mt?: string | number;
  mr?: string | number;
  mb?: string | number;
  ml?: string | number;
};

type BoxContainerProps = {
  display?: 'flex' | 'block' | 'inline-flex' | 'inline-block';
  alignItems?: AlignItems | Common;
  justifyContent?: JustifyContent | Common;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'wrap' | 'nowrap';
  gap?: string | number;
};

type BoxRectProps = {
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;

  width?: string | number;
  height?: string | number;
};

export type BoxProps = BoxSpacingProps & BoxContainerProps & BoxRectProps;
