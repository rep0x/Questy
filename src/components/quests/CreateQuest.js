import React, { useState, useContext } from 'react'
import { questsService } from '../../services'

// A S S E T S
import SvgArrowRight from '../../assets/icons/arrowRight'

// C O M P O N E N T S
import Input from '../elements/fields/Input'
import Dropdown from '../elements/fields/Dropdown'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

const CreateQuest = ({ closed, currentProject }) => {
  const { quests, setQuests, projects, setProjects } = useContext(GlobalContext)
  const [validForm, setValidForm] = useState(false)
  const [validTitle, setValidTitle] = useState(false)
  const [formData, setFormData] = useState({
    id: currentProject.nextQuestId,
    project: currentProject.id,
    epic: currentProject.epics[0],
    title: '',
    priority: 1,
    status: 'todo',
    todos: []
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
    // questsService.create(formData.title)

    // Update quests
    let newQuest = formData
    let updatedQuests = [...quests]
    updatedQuests.push(newQuest)
    setQuests(updatedQuests)

    // Update project
    let updatedProjects = [...projects]
    updatedProjects[currentProject.id].nextQuestId += 1
    setProjects(updatedProjects)

    e.preventDefault()
  }

  let prioOptions = {
    label: 'Priority',
    default: formData.priority,
    options: [1, 2, 3]
  }
  let epicOptions = {
    label: 'Epic',
    default: formData.epic,
    options: currentProject.epics
  }
  const changePriority = value => {
    let newFormData = formData
    newFormData.priority = value
    setFormData(newFormData)
  }
  const changeEpic = value => {
    let newFormData = formData
    newFormData.epic = value
    setFormData(newFormData)
  }

  // Helper to set autofocus on toggle form
  if (!closed) {
    let firstElement = document.getElementById('title')
    setTimeout(function() {
      firstElement.focus()
    }, 200)
  }

  return (
    <div className={`sidebar ${closed}`}>
      <form action='submit' style={{ marginTop: 40 }}>
        <h1>Create Quest</h1>
        <Input
          id='title'
          type='text'
          placeholder='Title'
          firstChild={true}
          autofocus={false}
          minLength={3}
          updateValidation={validateTitle}
        />
        <Dropdown
          id='priority'
          options={prioOptions}
          changeCurrent={changePriority}
        />
        <Dropdown
          id='epic'
          options={epicOptions}
          changeCurrent={changeEpic}
          lastchild={true}
        />
        <div>
          <button
            type='submit'
            className={`btn btn-auth float-right ${validForm ? 'valid' : ''}`}
            onClick={formSubmit}
          >
            <SvgArrowRight />
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateQuest
