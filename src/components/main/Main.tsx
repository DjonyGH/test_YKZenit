import React, { useEffect } from 'react'
import { useTypedDispatch } from '../../hooks/useTypedDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { figuresActionCreator } from '../../store/reducers/figures/action-creators'

const Main: React.FC = () => {
  const dispatch = useTypedDispatch()
  const { figures } = useTypedSelector((state) => state.figuresReducer)

  useEffect(() => {
    dispatch(figuresActionCreator.fetchFigures())
  }, []) //eslint-disable-line

  console.log('>>', figures)

  return <div>{/* <Figure form={EFigureForm.square} color={EFigureColor.red} dark={true} width={150} /> */}</div>
}

export default Main
