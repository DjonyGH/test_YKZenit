import React from 'react'
import Figure from './components/figure/Figure'
import { EFigureColor, EFigureForm } from './types'

function App() {
  return (
    <div className="App">
      <Figure form={EFigureForm.square} color={EFigureColor.red} dark={true} width={150} />
    </div>
  )
}

export default App
