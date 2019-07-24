import React, { useState } from 'react'

const Input = ({
  type,
  placeholder,
  id,
  firstChild,
  lastChild,
  minLength,
  updateValidation,
  autofocus
}) => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('')

  const onFocus = () => {
    if (value.length === 0) {
      let newFocus = !focus
      setFocus(newFocus)
    }
  }

  const onBlur = () => {
    if (value.length === 0) {
      let newFocus = !focus
      setFocus(newFocus)
    }
  }

  const onChange = e => {
    let value = e.target.value
    setValue(value)
    if (value.length >= minLength) {
      setStatus('success')
      updateValidation(true, value)
    } else {
      setStatus('')
      updateValidation(false, value)
    }
  }

  let input = document.getElementById(id ? id : placeholder)

  const onClickPlaceholder = () => {
    if (value === '') {
      let newFocus = !focus
      setFocus(newFocus)
      input.focus()
    }
  }

  return (
    <div
      className={`field input ${status} ${focus ? 'focus' : ''} ${
        firstChild ? 'first' : ''
      } ${lastChild ? 'last' : ''}`}
    >
      <input
        id={id ? id : placeholder}
        value={value}
        type={type}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autoFocus={autofocus ? true : false}
      />
      <span className='placeholder hidden' onClick={onClickPlaceholder}>
        {placeholder ? placeholder : 'Click me'}
      </span>
    </div>
  )
}

export default Input
