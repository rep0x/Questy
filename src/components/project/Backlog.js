import React, { Fragment, useContext, useState } from 'react'

// A S S E T S
import SvgAdd from '../../assets/icons/add'

// C O M P O N E N T S
import Header from './Header'
import AppNav from './AppNav'
import CreateQuest from './CreateQuest'
import QuestList from '../questList/QuestList'
import QuestLog from '../questlog/QuestLog'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

const Backlog = () => {
  const { projects } = useContext(GlobalContext)
  const currentProject = projects[0].name

  const [open, setOpen] = useState(false)

  const toggleCreateQuest = () => {
    let updatedValue = !open
    setOpen(updatedValue)
    console.log('getoggled')
  }

  // const createQuest = () => {
  //   //   let updated_quests = [...quests]
  //   //   updated_quests.push(quest)
  //   //   // Publish to State
  //   //   setQuests(updated_quests)
  //   //   // Publish to localStorage
  //   //   localStorage.setItem('quests', JSON.stringify(updated_quests))
  //   //   // Reset 'createQuest' input
  //   //   setQuest({
  //   //     title: ''
  //   //   })
  //   console.log('Create Quest')
  // }
  return (
    <Fragment>
      <Header currentProject={currentProject} projects={projects} />
      <div className='app-container'>
        <AppNav />
        <div className='app-main box'>
          <div className='box-header'>
            <span className='title'>Backlog</span>
            <button
              className={`btn btn-icon-only btn__white br-t-r ${
                open ? 'rotate-45' : ''
              }`}
              onClick={toggleCreateQuest}
            >
              <SvgAdd />
            </button>
          </div>
          <div className='box-body'>
            <QuestList />
          </div>
          <CreateQuest />
        </div>
      </div>
      <QuestLog />
    </Fragment>
  )
}

export default Backlog
