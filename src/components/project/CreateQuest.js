import React, { useState } from 'react'

const CreateQuest = () => {
  const [title, setTitle] = useState('')

  const onChange = e => {
    let value = e.target.value
    setTitle(value)
  }
  const onClick = e => {
    console.log('SUBMIT!!!')
    e.preventDefault()
  }

  return (
    <div className='sidebar'>
      <h1>Create Quest</h1>
      <form action='submit'>
        <input type='text' placeholder='Title' onChange={onChange} />
        <button type='submit' onClick={onClick} value={title}>
          Click me buddy
        </button>
      </form>
    </div>
  )
}

export default CreateQuest
