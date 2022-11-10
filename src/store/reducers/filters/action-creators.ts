import { EFilterAction } from './types'

export const FilterActionCreator = {
  setIsCircleVisible: (isCircleVisible: boolean) => ({
    type: EFilterAction.SET_IS_CIRCLE_VISIBLE,
    payload: isCircleVisible
  }),
  setIsSquareVisible: (isSquareVisible: boolean) => ({
    type: EFilterAction.SET_IS_SQUARE_VISIBLE,
    payload: isSquareVisible
  })
}
