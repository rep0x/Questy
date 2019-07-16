import React, { Fragment } from 'react'

// C O M P O N E N T S
import Header from './Header'
import AppNav from './AppNav'
import QuestList from '../questList/QuestList'
import QuestLog from '../questlog/QuestLog'

// C O N T E X T
// import { GlobalContext } from '../../context/GlobalContext'

const Backlog = () => {
  return (
    <Fragment>
      <Header />
      <div className='app-container'>
        <AppNav />
        <div className='app-main box'>
          <div className='box-header'>
            <span className='title'>Backlog</span>
          </div>
          <div className='box-body'>
            <QuestList />
          </div>
        </div>
      </div>
      <QuestLog />
    </Fragment>
  )
}

export default Backlog
