import { EFilterAction } from './types'

export const filterActionCreator = {
  setIsCircleVisible: (isCircleVisible: boolean) => ({
    type: EFilterAction.SET_IS_CIRCLE_VISIBLE,
    payload: isCircleVisible
  }),
  setIsSquareVisible: (isSquareVisible: boolean) => ({
    type: EFilterAction.SET_IS_SQUARE_VISIBLE,
    payload: isSquareVisible
  }),
  setIsBlueVisible: (isBlueVisible: boolean) => ({
    type: EFilterAction.SET_IS_BLUE_VISIBLE,
    payload: isBlueVisible
  }),
  setIsGreenVisible: (isGreenVisible: boolean) => ({
    type: EFilterAction.SET_IS_GREEN_VISIBLE,
    payload: isGreenVisible
  }),
  setIsRedVisible: (isRedVisible: boolean) => ({
    type: EFilterAction.SET_IS_RED_VISIBLE,
    payload: isRedVisible
  }),
  setIsYellowVisible: (isYellowVisible: boolean) => ({
    type: EFilterAction.SET_IS_YELLOW_VISIBLE,
    payload: isYellowVisible
  }),
  setIsDarkVisible: (isDarkVisible: boolean) => ({
    type: EFilterAction.SET_IS_DARK_VISIBLE,
    payload: isDarkVisible
  })
}
