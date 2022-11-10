import { EGeneralAction } from './types'

export const generalActionCreator = {
  setIsLoading: (isLoading: boolean) => ({
    type: EGeneralAction.SET_IS_LOADING,
    payload: isLoading
  }),
  setIsMenuVisible: (isMenuVisible: boolean) => ({
    type: EGeneralAction.SET_IS_MENU_VISIBLE,
    payload: isMenuVisible
  }),
  setError: (error: string) => {
    return { type: EGeneralAction.SET_ERROR, payload: error }
  }
}
