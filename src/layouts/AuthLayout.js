import React from 'react'
import { Route } from 'react-router-dom'
import Auth from './Auth'

const AuthLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Auth>
          <Component {...matchProps} />
        </Auth>
      )}
    />
  )
}

export default AuthLayout
