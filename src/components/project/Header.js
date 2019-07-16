import React from 'react'

// C O M P O N E N T S
import Nav from './Nav'
import ToggleMode from '../ToggleMode'

const Header = () => {
  return (
    <header className='header'>
      <Nav />
      <div className='actions'>
        <ToggleMode />
      </div>
    </header>
  )
}

export default Header
