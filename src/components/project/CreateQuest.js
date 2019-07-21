import React, { useState } from 'react'
import { questsService } from '../../services'

// A S S E T S
import SvgArrowRight from '../../assets/icons/arrowRight'

// C O M P O N E N T S
import Input from '../elements/Input'
import Dropdown from '../elements/Dropdown'

const CreateQuest = ({ open }) => {
  const [validForm, setValidForm] = useState(false)
  const [validTitle, setValidTitle] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    priority: 1
  })

  const validateTitle = (boolean, value) => {
    let newFormData = formData
    newFormData.title = value
    setFormData(newFormData)
    setValidTitle(boolean)
    if (boolean === true && validTitle === true) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }

  const formSubmit = e => {
    console.log(formData)
    questsService.create(title)
    e.preventDefault()
  }
  let prioOptions = {
    label: 'Priority',
    icon: null,
    default: formData.priority,
    options: [1, 2, 3]
  }
  const changePriority = value => {
    let newFormData = formData
    newFormData.priority = value
    setFormData(newFormData)
    console.log('Change priority in CreateQuest')
  }
  return (
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <form action='submit'>
        <h1>Create Quest</h1>
        <Input
          id='title'
          type='text'
          placeholder='Title'
          firstChild={true}
          minLength={3}
          updateValidation={validateTitle}
        />
        <div className='field dropdown last'>
          <Dropdown
            label=''
            id='priority'
            options={prioOptions}
            changeCurrent={changePriority}
            lastchild={true}
          />
        </div>
        <button
          type='submit'
          className={`btn btn-auth float-right ${validForm ? 'valid' : ''}`}
          onClick={formSubmit}
        >
          <SvgArrowRight />
        </button>
      </form>
    </div>
  )
}

export default CreateQuest
