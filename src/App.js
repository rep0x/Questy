import React, { useContext, Fragment } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

// L A Y O U T
import AuthLayout from './layouts/AuthLayout'
import ProjectLayout from './layouts/ProjectLayout'

// C O M P O N E N T S
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Alert from './components/elements/Alert'
import Backlog from './components/project/Backlog'
import { GlobalContext } from './context/GlobalContext'

const App = props => {
  const { currentUser } = useContext(GlobalContext)

  let routesOutput = ''

  if (currentUser) {
    routesOutput = (
      <Fragment>
        <ProjectLayout exact path='/' component={Backlog} />
      </Fragment>
    )
  } else {
    routesOutput = (
      <Fragment>
        <AuthLayout path='/' exact component={Login} props={props} />
        <AuthLayout path='/signup' component={Signup} />
      </Fragment>
    )
  }

  return (
    <Router>
      <Switch>{routesOutput}</Switch>
      <Alert />
    </Router>
  )
}

export default App
