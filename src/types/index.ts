export interface IFigure {
  form: EFigureForm
  color: EFigureColor
  dark: boolean
}

export enum EFigureForm {
  circle = 'circle',
  square = 'square'
}

export enum EFigureColor {
  blue = 'blue',
  yellow = 'yellow',
  red = 'red',
  green = 'green'
}
