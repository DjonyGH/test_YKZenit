import { EFigureAction, ISetFiguresAction } from './types'
import { IFigure } from '../../../types'
import { TAppDispatch } from '../..'
import { generalActionCreator } from '../general/action-creators'
import axios from 'axios'
import { pause } from '../../../utils/pause'

export const figuresActionCreator = {
  setFigures: (figures: IFigure[]): ISetFiguresAction => ({
    type: EFigureAction.SET_FIGURES,
    payload: figures
  }),
  fetchFigures: () => async (dispatch: TAppDispatch) => {
    try {
      dispatch(generalActionCreator.setIsLoading(true))
      // Для реалистичности запроса добавил задержку
      await pause(500)
      const { data } = await axios.get<IFigure[]>('http://localhost:3000/data.json')
      dispatch(figuresActionCreator.setFigures(data))
      return true
    } catch (error: any) {
      dispatch(generalActionCreator.setError(String(error.response.data.message)))
    } finally {
      dispatch(generalActionCreator.setIsLoading(false))
    }
  }
}
