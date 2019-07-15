import React, { useState } from 'react'

const Checkbox = ({ id, label }) => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState(false)

  const onFocus = () => {
    let newFocus = !focus
    setFocus(newFocus)
  }

  const onBlur = () => {
    let newFocus = !focus
    setFocus(newFocus)
  }

  const onChange = () => {
    let newValue = !value
    setValue(newValue)
  }

  const onClickPlaceholder = () => {
    if (focus) {
      onChange()
    } else {
      onChange()
      onFocus()
      document.getElementById(id).focus()
    }
  }

  return (
    <div
      className={`field checkbox ${value ? 'checked' : ''} ${
        focus ? 'focus' : ''
      } `}
      onClick={onClickPlaceholder}
    >
      <div className='checkbox-wrapper'>
        <div className='checkbox-inner' />
      </div>
      <input
        id={id}
        type='checkbox'
        className='hidden-checkbox'
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      <span className='label'>{label}</span>
    </div>
  )
}

export default Checkbox
