export enum EGeneralAction {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_ERROR = 'SET_ERROR'
}

export interface IGeneralState {
  isLoading: boolean
  error: string
}

export interface ISetIsLoadingAction {
  type: EGeneralAction.SET_IS_LOADING
  payload: boolean
}

export interface ISetNotificationAction {
  type: EGeneralAction.SET_ERROR
  payload: string
}

export type TGeneralAction = ISetIsLoadingAction | ISetNotificationAction
