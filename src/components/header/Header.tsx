import React, { useCallback } from 'react'
import { AiOutlineMenuUnfold, AiOutlineMenuFold } from 'react-icons/ai'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { generalActionCreator } from '../../store/reducers/general/action-creators'
import styles from './header.module.scss'

const Header: React.FC = () => {
  const dispatch = useTypedDispatch()
  const { isMenuVisible } = useTypedSelector((state) => state.generalReducer)

  const handleMenuClick = useCallback(() => {
    dispatch(generalActionCreator.setIsMenuVisible(!isMenuVisible))
  }, [isMenuVisible]) //eslint-disable-line

  return (
    <div className={styles.header}>
      <button className={styles.menuBtn} onClick={handleMenuClick}>
        {isMenuVisible ? <AiOutlineMenuFold size={'4em'} /> : <AiOutlineMenuUnfold size={'4em'} />}
      </button>
      <div className={styles.filter}></div>
    </div>
  )
}

export default Header
