import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import styled from 'styled-components'

// L A Y O U T
import AuthLayout from './layouts/AuthLayout'
import ProjectLayout from './layouts/ProjectLayout'
import QuestLayout from './layouts/QuestLayout'

// C O M P O N E N T S
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Alert from './components/elements/Alert'
import Backlog from './components/project/Backlog'

// C O N T E X T
import { GlobalContext } from './context/GlobalContext'

const App = props => {
  const { mode } = useContext(GlobalContext)

  const Root = styled.div`
    --black: ${mode ? 'rgba(44, 44, 44, 1)' : 'rgba(255, 255, 255, 1)'};
    --black_25: ${mode ? 'rgba(44, 44, 44, .25)' : 'rgba(255, 255, 255, .25)'};
    --dark: ${mode ? 'rgba(65, 65, 65, 1)' : 'rgba(235, 234, 236, 1)'};
    --light: ${mode ? 'rgba(235, 234, 236, 1)' : 'rgba(65, 65, 65, 1)'};
    --light_50: ${mode ? 'rgba(235, 234, 236, 0.5)' : 'rgba(65, 65, 65, 0.5)'};
    --white: ${mode ? 'rgba(255, 255, 255, 1)' : 'rgba(44, 44, 44, 1)'};
    --box-shadow: ${mode
      ? '0 0 3px rgba(44, 44, 44, .25)'
      : '0 0 3px rgba(255, 255, 255, .25)'};
    --box-shadow-active: ${mode
      ? '0 0 10px rgba(44, 44, 44, .25)'
      : '0 0 10px rgba(255, 255, 255, .25)'};
  `
  return (
    <Root>
      <Router>
        <Switch>
          <AuthLayout path='/' exact component={Login} props={props} />
          <AuthLayout path='/signup' component={Signup} />
          <ProjectLayout path='/project' component={Backlog} />
          <QuestLayout exact path='/project/quest' />
        </Switch>
        <Alert />
      </Router>
    </Root>
  )
}

export default App
