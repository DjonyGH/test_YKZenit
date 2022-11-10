export enum EFilterAction {
  SET_IS_CIRCLE_VISIBLE = 'SET_IS_CIRCLE_VISIBLE',
  SET_IS_SQUARE_VISIBLE = 'SET_IS_SQUARE_VISIBLE'
}

export interface IFilterState {
  isCircleVisible: boolean
  isSquareVisible: boolean
}

export interface ISetIsCircleVisibleAction {
  type: EFilterAction.SET_IS_CIRCLE_VISIBLE
  payload: boolean
}

export interface ISetIsSquareVisibleAction {
  type: EFilterAction.SET_IS_SQUARE_VISIBLE
  payload: boolean
}

export type TFilterAction = ISetIsCircleVisibleAction | ISetIsSquareVisibleAction
