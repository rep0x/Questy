import React from 'react'

// A S S E T S
import SvgDashboard from '../../assets/icons/apps/dashboard'
import SvgBacklog from '../../assets/icons/apps/backlog'
import SvgKanban from '../../assets/icons/apps/kanban'
import SvgRoadmap from '../../assets/icons/apps/roadmap'
import SvgTeam from '../../assets/icons/apps/team'
import SvgSettings from '../../assets/icons/apps/settings'

const AppNav = () => {
  return (
    <div className='app-nav box'>
      <div className='app-nav--item'>
        <SvgDashboard />
      </div>
      <div className='app-nav--item active'>
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
  )
}

export default AppNav
