import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// L A Y O U T
import AuthLayout from './layouts/AuthLayout'
import ProjectLayout from './layouts/ProjectLayout'
import QuestLayout from './layouts/QuestLayout'

// C O M P O N E N T S
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Alert from './components/elements/Alert'
import Backlog from './components/project/Backlog'

const App = props => {
  return (
    <Router>
      <Switch>
        <AuthLayout path='/' exact component={Login} props={props} />
        <AuthLayout path='/signup' component={Signup} />
        <ProjectLayout path='/project' component={Backlog} />
        <QuestLayout exact path='/project/quest' />
      </Switch>
      <Alert />
    </Router>
  )
}

export default App
