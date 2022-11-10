export enum EFilterAction {
  SET_IS_CIRCLE_VISIBLE = 'SET_IS_CIRCLE_VISIBLE',
  SET_IS_SQUARE_VISIBLE = 'SET_IS_SQUARE_VISIBLE',
  SET_IS_BLUE_VISIBLE = 'SET_IS_BLUE_VISIBLE',
  SET_IS_GREEN_VISIBLE = 'SET_IS_GREEN_VISIBLE',
  SET_IS_RED_VISIBLE = 'SET_IS_RED_VISIBLE',
  SET_IS_YELLOW_VISIBLE = 'SET_IS_YELLOW_VISIBLE',
  SET_IS_DARK_VISIBLE = 'SET_IS_DARK_VISIBLE'
}

export interface IFilterState {
  isCircleVisible: boolean
  isSquareVisible: boolean
  isBlueVisible: boolean
  isGreenVisible: boolean
  isRedVisible: boolean
  isYellowVisible: boolean
  isDarkVisible: boolean | null
}

export interface ISetIsCircleVisibleAction {
  type: EFilterAction.SET_IS_CIRCLE_VISIBLE
  payload: boolean
}

export interface ISetIsSquareVisibleAction {
  type: EFilterAction.SET_IS_SQUARE_VISIBLE
  payload: boolean
}

export interface ISetIsBlueVisibleAction {
  type: EFilterAction.SET_IS_BLUE_VISIBLE
  payload: boolean
}

export interface ISetIsGreenVisibleAction {
  type: EFilterAction.SET_IS_GREEN_VISIBLE
  payload: boolean
}

export interface ISetIsRedVisibleAction {
  type: EFilterAction.SET_IS_RED_VISIBLE
  payload: boolean
}

export interface ISetIsYellowVisibleAction {
  type: EFilterAction.SET_IS_YELLOW_VISIBLE
  payload: boolean
}

export interface ISetIsDarkVisibleAction {
  type: EFilterAction.SET_IS_DARK_VISIBLE
  payload: boolean | null
}

export type TFilterAction =
  | ISetIsCircleVisibleAction
  | ISetIsSquareVisibleAction
  | ISetIsBlueVisibleAction
  | ISetIsGreenVisibleAction
  | ISetIsRedVisibleAction
  | ISetIsYellowVisibleAction
  | ISetIsDarkVisibleAction
