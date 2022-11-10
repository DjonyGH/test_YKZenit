export enum EGeneralAction {
  SET_IS_LOADING = 'SET_IS_LOADING',
  SET_IS_MENU_VISIBLE = 'SET_IS_MENU_VISIBLE',
  SET_ERROR = 'SET_ERROR'
}

export interface IGeneralState {
  isLoading: boolean
  isMenuVisible: boolean
  error: string
}

export interface ISetIsLoadingAction {
  type: EGeneralAction.SET_IS_LOADING
  payload: boolean
}

export interface ISetIsmenuVisibleAction {
  type: EGeneralAction.SET_IS_MENU_VISIBLE
  payload: boolean
}

export interface ISetNotificationAction {
  type: EGeneralAction.SET_ERROR
  payload: string
}

export type TGeneralAction = ISetIsLoadingAction | ISetIsmenuVisibleAction | ISetNotificationAction
