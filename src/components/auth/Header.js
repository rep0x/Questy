import React from 'react'

// A S S E T S
import SvgLogo from '../../assets/logo.js'
import SvgWorld from '../../assets/icons/world.js'

const Header = () => {
  return (
    <div className='header'>
      <SvgLogo />
      <div className='region-wrapper'>
        <span className='region'>EU</span>
        <SvgWorld />
      </div>
    </div>
  )
}

export default Header
