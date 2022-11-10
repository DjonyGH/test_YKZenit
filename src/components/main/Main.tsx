import React, { useCallback, useEffect, useRef } from 'react'
import { useGetFigures } from '../../hooks/useGetFigures'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { figuresActionCreator } from '../../store/reducers/figures/action-creators'
import Figure from '../figure/Figure'
import styles from './main.module.scss'

const Main: React.FC = () => {
  const dispatch = useTypedDispatch()
  const divBlock = useRef<HTMLDivElement | null>(null)

  const { columns } = useTypedSelector((state) => state.filtersReducer)

  useEffect(() => {
    dispatch(figuresActionCreator.fetchFigures())
  }, []) //eslint-disable-line

  const calcFigureWidth = useCallback(() => {
    return Math.floor((divBlock.current?.getBoundingClientRect().width || 0) / columns)
  }, [columns])

  const filteredFigures = useGetFigures()

  return (
    <div className={styles.main} ref={divBlock}>
      <div className={styles.figures}>
        {filteredFigures.map((fig, idx) => (
          <Figure form={fig.form} color={fig.color} dark={fig.dark} width={calcFigureWidth()} key={idx} />
        ))}
      </div>
    </div>
  )
}

export default Main
