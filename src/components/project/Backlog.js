import React, { Fragment, useContext, useState } from 'react'

// A S S E T S
import SvgAdd from '../../assets/icons/add'

// C O M P O N E N T S
import Header from './header/Header'
import AppNav from './AppNav'
import CreateQuest from '../quests/CreateQuest'
import QuestList from '../quests/QuestList'
import QuestLog from '../questlog/QuestLog'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

const Backlog = () => {
  const { projects, currentProject } = useContext(GlobalContext)

  const [closed, setClosed] = useState(true)

  const toggleCreateQuest = () => {
    let updatedValue = !closed
    setClosed(updatedValue)
  }

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
                closed ? '' : 'rotate-45'
              }`}
              onClick={toggleCreateQuest}
            >
              <SvgAdd />
            </button>
          </div>
          <div className='box-body'>
            <QuestList />
          </div>
          <CreateQuest closed={closed} currentProject={currentProject} />
        </div>
      </div>
      <QuestLog />
    </Fragment>
  )
}

export default Backlog
