import React from 'react'

// C O M P O N E N T S
import Dropdown from '../elements/Dropdown'

// A S S E T S
import SvgMenu from '../../assets/icons/menu'

// D A T A
import initialProjects from '../../data/projects.json'

const Nav = () => {
  let projectNames = []
  initialProjects.forEach(project => {
    projectNames.push(project.name)
  })
  console.log('ProjectNames: ', projectNames)
  let dropdownOptions = {
    label: 'Project',
    icon: null,
    default: 0,
    options: projectNames
  }
  return (
    <nav className='nav box'>
      <div className='menu'>
        <SvgMenu />
      </div>
      <Dropdown options={dropdownOptions} />
    </nav>
  )
}

export default Nav
