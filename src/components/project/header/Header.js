import React from 'react'

// C O M P O N E N T S
import Nav from './Nav'

const Header = () => {
  return (
    <header className='header'>
      <Nav />
      <div className='actions' />
    </header>
  )
}

export default Header
