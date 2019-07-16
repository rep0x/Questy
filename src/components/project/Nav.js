import React from 'react'

// C O M P O N E N T S
import Dropdown from '../elements/Dropdown'

// A S S E T S
import SvgMenu from '../../assets/icons/menu'

const Nav = () => {
  return (
    <nav className='nav box'>
      <div className='menu'>
        <SvgMenu />
      </div>
      <Dropdown />
    </nav>
  )
}

export default Nav
