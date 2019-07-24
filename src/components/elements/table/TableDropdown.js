import React, { useState } from 'react'

// A S S E T S
import SvgCaretDown from '../../../assets/icons/caretDown'

const Dropdown = ({ options, currentItem }) => {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(currentItem)

  const toggleDropdown = () => {
    let newState = !open
    setOpen(newState)
  }

  const changeValue = value => {
    setCurrent(value)
    toggleDropdown()
  }

  let optionsOutput = options
    .filter(option => option !== current)
    .map((option, i) => (
      <div key={i} className='option' onClick={() => changeValue(option)}>
        <span className='option-value'>{option}</span>
      </div>
    ))

  return (
    <div className={`dropdown table-dropdown ${open ? 'open' : ''}`}>
      <div className='selected' onClick={toggleDropdown}>
        <div className='selected-item'>
          <span>{current}</span>
        </div>
        <div className='caret'>
          <SvgCaretDown />
        </div>
      </div>
      <div className='options'>{optionsOutput}</div>
    </div>
  )
}

export default Dropdown
