import React from 'react'

const Project = ({ children, ...rest }) => {
  console.log("Layout::Project")
  return <div className='App project'>{children}</div>
}

export default Project
