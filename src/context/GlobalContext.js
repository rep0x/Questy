import React, { useState, createContext } from 'react'

// D A T A
import initialUsers from '../data/users.json'
import initialProjectsData from '../data/projects.json'
import initialQuestsData from '../data/quests.json'

// C R E A T E   C O N T E X T
export const GlobalContext = createContext()

// C R E A T E   P R O V I D E R
export const GlobalContextProvider = props => {
  // USERS
  const [users, setUsers] = useState(initialUsers)
  const initialCurrentUser = JSON.parse(
    localStorage.getItem('currentUser') || JSON.stringify('r3p0x')
  )
  const [currentUser, setCurrentUser] = useState(initialCurrentUser)
  localStorage.setItem('currentUser', JSON.stringify(currentUser))

  // PROJECTS
  const initialProjects = JSON.parse(
    localStorage.getItem('projects') || JSON.stringify(initialProjectsData)
  )
  const [projects, setProjects] = useState(initialProjects)
  localStorage.setItem('projects', JSON.stringify(projects))

  // CURRENT PROJECT
  const initialCurrentProject = JSON.parse(
    localStorage.getItem('currentProject') || JSON.stringify(projects[0])
  )
  const [currentProject, setCurrentProject] = useState(initialCurrentProject)
  localStorage.setItem('currentProject', JSON.stringify(currentProject))

  // QUESTS
  const initialQuests = JSON.parse(
    localStorage.getItem('quests') || JSON.stringify(initialQuestsData)
  )
  const [quests, setQuests] = useState(initialQuests)
  localStorage.setItem('quests', JSON.stringify(quests))

  // ALERT
  const [alert, setAlert] = useState({
    type: '',
    isOpen: false
  })

  // THEME
  const initialTheme = JSON.parse(
    localStorage.getItem('theme') || JSON.stringify(false)
  )
  const [theme, setTheme] = useState(initialTheme)
  localStorage.setItem('theme', JSON.stringify(theme))

  const context = {
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    projects,
    setProjects,
    currentProject,
    setCurrentProject,
    quests,
    setQuests,
    theme,
    setTheme,
    alert,
    setAlert
  }

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}
