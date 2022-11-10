import React, { useMemo } from 'react'
import { COLORS } from '../../const/colors'
import { EFigureColor, EFigureForm } from '../../types'

interface IProps {
  form: EFigureForm
  color: EFigureColor
  dark: boolean
  width: number
}

const Figure: React.FC<IProps> = ({ form, color, dark, width }) => {
  const style = useMemo(
    () => ({
      borderRadius: form === EFigureForm.circle ? '50%' : undefined,
      backgroundColor: COLORS[`${color}${dark ? ' dark' : ''}`],
      width: `${width}px`,
      height: `${width}px`
    }),
    [form, color, dark, width]
  )

  return <div style={style}></div>
}

export default Figure
