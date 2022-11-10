import { IFigureState, TFigureAction, EFigureAction } from './types'

const initialState: IFigureState = {
  figures: []
}

export default function figuresReducer(state = initialState, action: TFigureAction): IFigureState {
  switch (action.type) {
    case EFigureAction.SET_FIGURES:
      return { ...state, figures: action.payload }

    default:
      return state
  }
}
