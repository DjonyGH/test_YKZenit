import { EFilterAction, IFilterState, TFilterAction } from './types'

const initialState: IFilterState = {
  isCircleVisible: true,
  isSquareVisible: true
}

export default function filtersReducer(state = initialState, action: TFilterAction): IFilterState {
  switch (action.type) {
    case EFilterAction.SET_IS_CIRCLE_VISIBLE:
      return { ...state, isCircleVisible: action.payload }
    case EFilterAction.SET_IS_SQUARE_VISIBLE:
      return { ...state, isSquareVisible: action.payload }
    default:
      return state
  }
}
