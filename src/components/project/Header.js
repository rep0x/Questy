import React from 'react'

// C O M P O N E N T S
import ToggleMode from '../ToggleMode'

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav box'>
        <div className='menu'>
          <img src='' alt='' />
        </div>
        <div className='dropdown'>
          <div className='selected'>
            <div className='selected-item'>
              <span className='label' />
              <input type='text' />
            </div>
            <div className='caret'>
              <img src='' alt='' />
            </div>
          </div>
          <ul className='options'>
            <li className='option'>
              <span className='option-value' />
              <span className='option-value' />
              <span className='option-value' />
            </li>
          </ul>
        </div>
      </nav>
      <div className='actions'>
        <ToggleMode />
      </div>
    </header>
  )
}

export default Header
