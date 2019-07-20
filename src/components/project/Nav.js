import React, { useContext } from 'react'

// C O M P O N E N T S
import Dropdown from '../elements/Dropdown'

// A S S E T S
import SvgMenu from '../../assets/icons/menu'

// D A T A
import initialProjects from '../../data/projects.json'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

const Nav = () => {
  const { currentProject, projects, setCurrentProject } = useContext(
    GlobalContext
  )
  let projectNames = []
  initialProjects.forEach(project => {
    projectNames.push(project.name)
  })
  let dropdownOptions = {
    label: 'Project',
    icon: null,
    default: currentProject.name,
    options: projectNames
  }
  const changeCurrent = value => {
    let newProject = projects.find(function(project) {
      return project.name === value
    })
    setCurrentProject(newProject)
  }
  return (
    <nav className='nav box'>
      <div className='menu'>
        <SvgMenu />
      </div>
      <Dropdown options={dropdownOptions} changeCurrent={changeCurrent} />
    </nav>
  )
}

export default Nav
