import React, { useCallback } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { filterActionCreator } from '../../store/reducers/filters/action-creators'

import styles from './menu.module.scss'

const Menu: React.FC = () => {
  const dispatch = useTypedDispatch()
  const { isMenuVisible } = useTypedSelector((state) => state.generalReducer)
  const { isBlueVisible, isGreenVisible, isRedVisible, isYellowVisible } = useTypedSelector(
    (state) => state.filtersReducer
  )

  const handleBlueChange = useCallback(() => {
    dispatch(filterActionCreator.setIsBlueVisible(!isBlueVisible))
  }, [isBlueVisible]) //eslint-disable-line

  const handleGreenChange = useCallback(() => {
    dispatch(filterActionCreator.setIsGreenVisible(!isGreenVisible))
  }, [isGreenVisible]) //eslint-disable-line

  const handleRedChange = useCallback(() => {
    dispatch(filterActionCreator.setIsRedVisible(!isRedVisible))
  }, [isRedVisible]) //eslint-disable-line

  const handleYellowChange = useCallback(() => {
    dispatch(filterActionCreator.setIsYellowVisible(!isYellowVisible))
  }, [isYellowVisible]) //eslint-disable-line

  const handleDarkChange = useCallback(() => {
    dispatch(filterActionCreator.setIsDarkVisible(!isBlueVisible))
  }, [isBlueVisible]) //eslint-disable-line

  return (
    <div className={`${styles.menu} ${isMenuVisible ? styles.visible : ''}`}>
      <div>
        <input type="checkbox" id="blue" name="blue" onChange={handleBlueChange} checked={isBlueVisible} />
        <label htmlFor="blue">Синий</label>
      </div>
      <div>
        <input type="checkbox" id="green" name="green" onChange={handleGreenChange} checked={isGreenVisible} />
        <label htmlFor="green">Зеленый</label>
      </div>
      <div>
        <input type="checkbox" id="red" name="red" onChange={handleRedChange} checked={isRedVisible} />
        <label htmlFor="red">Красный</label>
      </div>
      <div>
        <input type="checkbox" id="yellow" name="yellow" onChange={handleYellowChange} checked={isYellowVisible} />
        <label htmlFor="yellow">Желтый</label>
      </div>
    </div>
  )
}

export default Menu
