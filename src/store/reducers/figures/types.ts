import { IFigure } from '../../../types'

export interface IFigureState {
  figures: IFigure[]
}

export enum EFigureAction {
  SET_FIGURES = 'SET_FIGURES'
}

export interface ISetFiguresAction {
  type: EFigureAction.SET_FIGURES
  payload: IFigure[]
}

export type TFigureAction = ISetFiguresAction
