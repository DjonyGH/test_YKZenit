import React, { useCallback, useState } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { filterActionCreator } from '../../store/reducers/filters/action-creators'
import styles from './menu.module.scss'
import InputNumber from 'react-input-number'

const Menu: React.FC = () => {
  const dispatch = useTypedDispatch()
  const { isMenuVisible } = useTypedSelector((state) => state.generalReducer)
  const { isBlueVisible, isGreenVisible, isRedVisible, isYellowVisible, isDarkVisible, columns } = useTypedSelector(
    (state) => state.filtersReducer
  )
  const [error, setError] = useState<boolean>(false)

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

  const handleAllChange = useCallback(() => {
    dispatch(filterActionCreator.setIsDarkVisible(null))
  }, []) //eslint-disable-line

  const handleDarkChange = useCallback(() => {
    dispatch(filterActionCreator.setIsDarkVisible(true))
  }, []) //eslint-disable-line

  const handleLightChange = useCallback(() => {
    dispatch(filterActionCreator.setIsDarkVisible(false))
  }, []) //eslint-disable-line

  const handleColumnsChange = useCallback((columns: number) => {
    if (columns <= 0 || columns > 10) {
      setError(true)
    } else {
      setError(false)
      dispatch(filterActionCreator.setColimns(columns))
    }
  }, []) //eslint-disable-line

  return (
    <div className={`${styles.menu} ${isMenuVisible ? styles.visible : ''}`}>
      <div className={styles.firstInGroup}>
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
      <div className={styles.firstInGroup}>
        <input type="radio" id="all" name="all" checked={isDarkVisible === null} onChange={handleAllChange} />
        <label htmlFor="all">Все</label>
      </div>
      <div>
        <input type="radio" id="dark" name="dark" checked={!!isDarkVisible} onChange={handleDarkChange} />
        <label htmlFor="dark">Темный</label>
      </div>
      <div>
        <input type="radio" id="light" name="light" checked={isDarkVisible === false} onChange={handleLightChange} />
        <label htmlFor="light">Светлый</label>
      </div>
      <div className={styles.firstInGroup}>
        <label htmlFor="all">Колонок</label>
        <InputNumber min={1} max={10} step={1} value={columns} onChange={handleColumnsChange} />
        {error && <p className={styles.error}>Только цифры от 1 до 10</p>}
      </div>
    </div>
  )
}

export default Menu
