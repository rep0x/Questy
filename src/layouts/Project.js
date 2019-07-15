import React from 'react'

// C O M P O N E N T S
import ToggleMode from '../components/ToggleMode'

const Project = ({ children, ...rest }) => {
  return (
    <div className='app project'>
      <div className='container'>{children}</div>
      <ToggleMode />
    </div>
  )
}

export default Project
