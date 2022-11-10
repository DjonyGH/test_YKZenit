import React, { useCallback, useEffect, useRef } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { figuresActionCreator } from '../../store/reducers/figures/action-creators'
import { EFigureColor, EFigureForm, IFigure } from '../../types'
import Figure from '../figure/Figure'
import styles from './main.module.scss'

const Main: React.FC = () => {
  const dispatch = useTypedDispatch()
  const divBlock = useRef<HTMLDivElement | null>(null)
  const { figures } = useTypedSelector((state) => state.figuresReducer)
  const {
    isCircleVisible,
    isSquareVisible,
    isBlueVisible,
    isGreenVisible,
    isRedVisible,
    isYellowVisible,
    isDarkVisible,
    columns
  } = useTypedSelector((state) => state.filtersReducer)

  useEffect(() => {
    dispatch(figuresActionCreator.fetchFigures())
  }, []) //eslint-disable-line

  const calcFigureWidth = useCallback(() => {
    return Math.floor((divBlock.current?.getBoundingClientRect().width || 0) / columns)
  }, [columns])

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
    [isCircleVisible, isSquareVisible, isBlueVisible, isGreenVisible, isRedVisible, isYellowVisible, isDarkVisible]
  )

  return (
    <div className={styles.main} ref={divBlock}>
      {getFigures().map((fig, idx) => (
        <Figure form={fig.form} color={fig.color} dark={fig.dark} width={calcFigureWidth()} key={idx} />
      ))}
    </div>
  )
}

export default Main
