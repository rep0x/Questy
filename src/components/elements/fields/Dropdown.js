import React, { useState } from 'react'

// A S S E T S
import SvgCaretDown from '../../../assets/icons/caretDown'

const Dropdown = ({ options, changeCurrent, firstChild, lastChild, id }) => {
  const [focus, setFocus] = useState(false)
  const [current, setCurrent] = useState(options.default)

  const changeValue = value => {
    changeCurrent(value)
    setCurrent(value)
  }

  const onFocus = () => {
    setFocus(true)
  }

  const onBlur = () => {
    setFocus(false)
  }

  const onClick = e => {
    let currentElement = document.getElementById(id)
    let parent = currentElement.parentElement
    let nextElement = parent.nextElementSibling
    let target = e.target

    if (target.classList == 'option') {
      setFocus(false)
      nextElement.children[0].focus()
    } else {
      let newFocus = !focus
      setFocus(newFocus)
      if (!focus) {
        nextElement.children[0].focus()
      }
    }
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
    <div
      className={`field dropdown ${firstChild ? 'first' : ''} ${
        lastChild ? 'last' : ''
      } `}
    >
      <div
        className={`dropdown `}
        tabIndex={0}
        onClick={onClick}
        id={id}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <div className='selected'>
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
    </div>
  )
}

export default Dropdown
