import React, { useCallback } from 'react'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { FilterActionCreator } from '../../store/reducers/filters/action-creators'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import styles from './header.module.scss'

const Header: React.FC = () => {
  const dispatch = useTypedDispatch()
  const { isMenuVisible } = useTypedSelector((state) => state.generalReducer)
  const { isCircleVisible, isSquareVisible } = useTypedSelector((state) => state.filtersReducer)

  const handleMenuClick = useCallback(() => {
    dispatch(generalActionCreator.setIsMenuVisible(!isMenuVisible))
  }, [isMenuVisible]) //eslint-disable-line

  const handleCircleChange = useCallback(() => {
    dispatch(FilterActionCreator.setIsCircleVisible(!isCircleVisible))
  }, [isCircleVisible]) //eslint-disable-line

  const handleSquareChange = useCallback(() => {
    dispatch(FilterActionCreator.setIsSquareVisible(!isSquareVisible))
  }, [isSquareVisible]) //eslint-disable-line

  return (
    <div className={styles.header}>
      <button className={styles.menuBtn} onClick={handleMenuClick}>
        {isMenuVisible ? <AiOutlineMenuFold size={'4em'} /> : <AiOutlineMenuUnfold size={'4em'} />}
      </button>
      <div className={styles.filter}>
        <input type="checkbox" id="circle" name="circle" onChange={handleCircleChange} checked={isCircleVisible} />
        <label htmlFor="circle">Круги</label>
        <input type="checkbox" id="square" name="square" onChange={handleSquareChange} checked={isSquareVisible} />
        <label htmlFor="square">Квадраты</label>
      </div>
    </div>
  )
}

export default Header
