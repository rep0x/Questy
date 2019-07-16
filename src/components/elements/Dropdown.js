import React, { useState } from 'react'

// A S S E T S
import SvgCaretDown from '../../assets/icons/caretDown'

const Dropdown = () => {
  const [open, setOpen] = useState(false)
  const toggleDropdown = () => {
    let newState = !open
    setOpen(newState)
    console.log('Es geht schon')
  }
  return (
    <div className={`dropdown ${open ? 'open' : ''}`}>
      <div className='selected' onClick={toggleDropdown}>
        <div className='selected-item'>
          <span className='label'>Project</span>
          <input type='text' value='Questy' />
        </div>
        <div className='caret'>
          <SvgCaretDown />
        </div>
      </div>
      <div className='options'>
        <div className='option'>
          <span className='option-value'>Düsentrieb</span>
        </div>
        <div className='option'>
          <span className='option-value'>Pages</span>
        </div>
        <div className='option'>
          <span className='option-value'>Collections</span>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
