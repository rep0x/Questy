import React, { useState } from 'react'

const TableInput = ({ data }) => {
  const [currentValue, setCurrentValue] = useState(data)
  const onChange = e => {
    let value = e.target.value
    setCurrentValue(value)
  }
  return (
    <input
      className='table-input'
      type='text'
      value={currentValue}
      onChange={onChange}
    />
  )
}

export default TableInput
