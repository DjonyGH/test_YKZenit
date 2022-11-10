import { EFilterAction, IFilterState, TFilterAction } from './types'

const initialState: IFilterState = {
  isCircleVisible: true,
  isSquareVisible: true,
  isBlueVisible: true,
  isGreenVisible: true,
  isRedVisible: true,
  isYellowVisible: true,
  isDarkVisible: true
}

export default function filtersReducer(state = initialState, action: TFilterAction): IFilterState {
  switch (action.type) {
    case EFilterAction.SET_IS_CIRCLE_VISIBLE:
      return { ...state, isCircleVisible: action.payload }
    case EFilterAction.SET_IS_SQUARE_VISIBLE:
      return { ...state, isSquareVisible: action.payload }
    case EFilterAction.SET_IS_BLUE_VISIBLE:
      return { ...state, isBlueVisible: action.payload }
    case EFilterAction.SET_IS_GREEN_VISIBLE:
      return { ...state, isGreenVisible: action.payload }
    case EFilterAction.SET_IS_RED_VISIBLE:
      return { ...state, isRedVisible: action.payload }
    case EFilterAction.SET_IS_YELLOW_VISIBLE:
      return { ...state, isYellowVisible: action.payload }
    case EFilterAction.SET_IS_DARK_VISIBLE:
      return { ...state, isDarkVisible: action.payload }
    default:
      return state
  }
}
