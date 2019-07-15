import React from 'react'
import { Route } from 'react-router-dom'

// C O M P O N E N T S
import Project from './Project'

const ProjectLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Project>
          <Component {...matchProps} />
        </Project>
      )}
    />
  )
}

export default ProjectLayout
