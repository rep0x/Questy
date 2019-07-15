import React from 'react'

// A S S E T S
import bgImage from '../assets/bg.png'

// C O M P O N E N T S
import ToggleMode from '../components/ToggleMode'
import Header from '../components/auth/Header'

const Auth = ({ children, ...rest }) => {
  return (
    <div className='app auth'>
      <div className='container'>
        <div className='form-wrapper'>
          <Header />
          {children}
        </div>
        <div
          className='bg-image'
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      </div>
      <ToggleMode />
    </div>
  )
}

export default Auth
