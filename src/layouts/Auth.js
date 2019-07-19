import React from 'react'

// A S S E T S
import bgImage from '../assets/bg.png'

// C O M P O N E N T S
import Header from '../components/auth/Header'

const Auth = ({ children, ...rest }) => {
  return (
    <div className='App auth'>
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
    </div>
  )
}

export default Auth
