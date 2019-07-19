import React, { useState, createContext } from 'react'

// Import initial D A T A
import initialUsers from '../data/users.json'
import initialProjects from '../data/projects.json'
import initialQuests from '../data/quests.json'

// IOTA
import generateSeed from 'iota-generate-seed'

// C R E A T E   C O N T E X T
export const GlobalContext = createContext()

// C R E A T E   P R O V I D E R
export const GlobalContextProvider = props => {
  const [users, setUsers] = useState(initialUsers)
  const [projects, setProjects] = useState(initialProjects)
  const [quests, setQuests] = useState(initialQuests)
  const [alert, setAlert] = useState({
    type: '',
    isOpen: false
  })

  const [currentUser, setCurrentUser] = useState()

  const [theme, setTheme] = useState(false)

  let temp_seed = localStorage.getItem('seed')

  if (!temp_seed) {
    temp_seed = generateSeed()
    localStorage.setItem('seed', temp_seed)
  }

  const [seed, setSeed] = useState(temp_seed)

  const context = {
    users,
    setUsers,
    currentUser,
    setCurrentUser,
    projects,
    setProjects,
    quests,
    setQuests,
    theme,
    setTheme,
    seed,
    alert,
    setAlert
  }

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  )
}
