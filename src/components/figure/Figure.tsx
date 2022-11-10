import React, { useMemo } from 'react'
import { COLORS } from '../../const/colors'
import { EFigureColor, EFigureForm } from '../../types'

interface IProps {
  form: EFigureForm
  color: EFigureColor
  dark: boolean
  width: number
  margin?: number
}

const Figure: React.FC<IProps> = ({ form, color, dark, width, margin = 10 }) => {
  const style = useMemo(
    () => ({
      borderRadius: form === EFigureForm.circle ? '50%' : undefined,
      backgroundColor: COLORS[`${color}${dark ? ' dark' : ''}`],
      width: `${width - margin * 2}px`,
      height: `${width - margin * 2}px`,
      margin: `0 ${margin}px ${margin * 2}px`
    }),
    [form, color, dark, width, margin]
  )

  return <div style={style}></div>
}

export default Figure
