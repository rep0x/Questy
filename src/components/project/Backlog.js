import React, { Fragment } from 'react'

// C O M P O N E N T S
import QuestList from '../questList/QuestList'
import Header from './Header'
import QuestLog from '../questlog/QuestLog'

// A S S E T S
import SvgDashboard from '../../assets/icons/apps/dashboard'
import SvgBacklog from '../../assets/icons/apps/backlog'
import SvgKanban from '../../assets/icons/apps/kanban'
import SvgRoadmap from '../../assets/icons/apps/roadmap'
import SvgTeam from '../../assets/icons/apps/team'
import SvgSettings from '../../assets/icons/apps/settings'

// C O N T E X T
// import { GlobalContext } from '../../context/GlobalContext'

const Backlog = () => {
  return (
    <Fragment>
      <Header />
      <div className='app-container'>
        <div className='app-nav box'>
          <div className='app-nav--item'>
            <SvgDashboard />
          </div>
          <div className='app-nav--item'>
            <SvgBacklog />
          </div>
          <div className='app-nav--item'>
            <SvgKanban />
          </div>
          <div className='app-nav--item'>
            <SvgRoadmap />
          </div>
          <div className='app-nav--item'>
            <SvgTeam />
          </div>
          <div className='app-nav--item'>
            <SvgSettings />
          </div>
        </div>
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
