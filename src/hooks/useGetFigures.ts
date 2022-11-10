import { useCallback } from 'react'
import { EFigureColor, EFigureForm, IFigure } from '../types'
import { useTypedSelector } from './useTypedSelector'

type IUseGetFigures = () => IFigure[]

export const useGetFigures: IUseGetFigures = () => {
  const { figures } = useTypedSelector((state) => state.figuresReducer)
  const {
    isCircleVisible,
    isSquareVisible,
    isBlueVisible,
    isGreenVisible,
    isRedVisible,
    isYellowVisible,
    isDarkVisible
  } = useTypedSelector((state) => state.filtersReducer)

  const getFigures = useCallback(
    () =>
      figures.filter(
        (figure) =>
          (!isCircleVisible ? figure.form === EFigureForm.square : true) &&
          (!isSquareVisible ? figure.form === EFigureForm.circle : true) &&
          (!isBlueVisible ? figure.color !== EFigureColor.blue : true) &&
          (!isGreenVisible ? figure.color !== EFigureColor.green : true) &&
          (!isRedVisible ? figure.color !== EFigureColor.red : true) &&
          (!isYellowVisible ? figure.color !== EFigureColor.yellow : true) &&
          (isDarkVisible !== null ? (isDarkVisible ? figure.dark : !figure.dark) : true)
      ),
    [
      figures,
      isCircleVisible,
      isSquareVisible,
      isBlueVisible,
      isGreenVisible,
      isRedVisible,
      isYellowVisible,
      isDarkVisible
    ]
  )
  return getFigures()
}
