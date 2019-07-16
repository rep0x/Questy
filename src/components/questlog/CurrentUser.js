import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

// A S S E T S
import SvgOff from '../../assets/icons/off'
import SvgSettings from '../../assets/icons/apps/settings'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

const CurrentUser = () => {
  const { setAlert } = useContext(GlobalContext)
  const signOut = () => {
    setAlert({
      type: 'success',
      msg: 'Successfully signed out',
      isOpen: true
    })
  }
  return (
    <div className='box-footer user'>
      <div className='user--wrapper'>
        <div className='user-avatar-wrapper'>
          <img
            src='/users/male_1.png'
            alt='User avatar'
            className='user-avatar'
          />
          <div className='user-avatar-overlay' />
        </div>
        <div className='user-info'>
          <span className='user-name'>r3p0x</span>
          <span className='user-role'>Designer</span>
        </div>
      </div>
      <div className='user--actions'>
        <div className='action'>
          <SvgSettings />
        </div>
        <NavLink to='/' exact className='action' onClick={signOut}>
          <SvgOff />
        </NavLink>
      </div>
    </div>
  )
}

export default CurrentUser
