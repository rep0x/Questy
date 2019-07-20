import React, { useState, createContext } from 'react'

// Import initial D A T A
import initialUsers from '../data/users.json'
import initialProjects from '../data/projects.json'
import initialQuestsData from '../data/quests.json'

// C R E A T E   C O N T E X T
export const GlobalContext = createContext()

// C R E A T E   P R O V I D E R
export const GlobalContextProvider = props => {
  const [users, setUsers] = useState(initialUsers)

  const [projects, setProjects] = useState(initialProjects)
  const [currentProject, setCurrentProject] = useState(projects[0].name)

  const initialQuests = JSON.parse(
    localStorage.getItem('quests') || JSON.stringify(initialQuestsData)
  )
  const [quests, setQuests] = useState(initialQuests)

  const [alert, setAlert] = useState({
    type: '',
    isOpen: false
  })

  const [currentUser, setCurrentUser] = useState()

  const [theme, setTheme] = useState(false)

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
