import React, { useState } from 'react'

// A S S E T S
import SvgCaretDown from '../../assets/icons/caretDown'

const Dropdown = ({ options, changeCurrent }) => {
  const [open, setOpen] = useState(false)
  const [current] = useState(options.default)

  const toggleDropdown = () => {
    let newState = !open
    setOpen(newState)
  }

  const changeValue = value => {
    changeCurrent(value)
    toggleDropdown()
  }

  let labelOutput
  if (options.label !== null) {
    labelOutput = <span className='dropdown-label'>{options.label}</span>
  }

  let optionsOutput = options.options
    .filter(option => option !== current)
    .map((option, i) => (
      <div key={i} className='option' onClick={() => changeValue(option)}>
        <span className='option-value'>{option}</span>
      </div>
    ))
  return (
    <div className={`dropdown ${open ? 'open' : ''}`}>
      <div className='selected' onClick={toggleDropdown}>
        <div className='selected-item'>
          <span className='dropdown-label'>{labelOutput}</span>
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
