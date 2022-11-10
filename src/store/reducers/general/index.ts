import { EGeneralAction, IGeneralState, TGeneralAction } from './types'

const initialState: IGeneralState = {
  isLoading: false,
  isMenuVisible: false,
  error: ''
}

export default function generalReducer(state = initialState, action: TGeneralAction): IGeneralState {
  switch (action.type) {
    case EGeneralAction.SET_IS_LOADING:
      return { ...state, isLoading: action.payload }
    case EGeneralAction.SET_IS_MENU_VISIBLE:
      return { ...state, isMenuVisible: action.payload }
    case EGeneralAction.SET_ERROR:
      return { ...state, error: action.payload }
    default:
      return state
  }
}
