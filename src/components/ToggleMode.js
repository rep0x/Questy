import React, { useContext } from 'react'
import moon from '../assets/icons/moon.svg'
import sun from '../assets/icons/sun.svg'

import { GlobalContext } from '../context/GlobalContext'

const ToggleMode = () => {
  const { mode, setMode } = useContext(GlobalContext)
  let updatedMode = mode
  const toggleMode = () => {
    updatedMode = !updatedMode
    setMode(updatedMode)
  }
  return (
    <div className='toggle-mode box' onClick={toggleMode}>
      <img src={mode ? moon : sun} alt='' className='icon' />
    </div>
  )
}

export default ToggleMode
