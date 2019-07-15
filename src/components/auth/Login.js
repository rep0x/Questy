import React, { Fragment, useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import Input from '../elements/Input'
import Checkbox from '../elements/Checkbox'
import SvgArrowRight from '../../assets/icons/arrowRight'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

const Login = props => {
  const { users, alert, setAlert, setCurrentUser } = useContext(GlobalContext)
  const [validForm, setValidForm] = useState(false)
  const [validUsername, setValidUsername] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  let newFormData = formData
  const validateUsername = (boolean, value) => {
    newFormData.username = value
    setFormData(newFormData)
    setValidUsername(boolean)
    validateForm(boolean)
  }

  const validatePassword = (boolean, value) => {
    newFormData.password = value
    setFormData(newFormData)
    console.log('formData', formData)
    setValidPassword(boolean)
    validateForm(boolean)
  }

  const validateForm = boolean => {
    if (boolean) {
      if (validUsername && validPassword) {
        setValidForm(true)
      }
    } else {
      setValidForm(false)
    }
  }

  const formSubmit = e => {
    console.log('Users.length', users.length)
    for (let i = 0; i < users.length; i++) {
      if (
        formData.username === users[i].name &&
        formData.password === users[i].password
      ) {
        setAlert({
          type: 'success',
          msg: 'Successfully signed in',
          isOpen: true
        })
        setCurrentUser(users[i].name)
        props.history.push('/project')
        return
      } else {
        setAlert({
          type: 'error',
          msg: 'Username or password is wrong!',
          isOpen: true
        })
      }
    }
    e.preventDefault()
  }

  return (
    <Fragment>
      <form className='form'>
        <h1>Sign in</h1>
        <Input
          id='username'
          type='text'
          placeholder='Username'
          firstChild={true}
          minLength={3}
          updateValidation={validateUsername}
        />
        <Input
          id='password'
          type='password'
          placeholder='Password'
          lastChild={true}
          minLength={8}
          updateValidation={validatePassword}
        />
        <Checkbox id='stay-signed-in' label='stay signed in' />
        <button
          type='submit'
          className={`btn btn-auth float-right ${validForm ? 'valid' : ''}`}
          onClick={formSubmit}
        >
          <SvgArrowRight validForm={validForm} />
        </button>
      </form>
      <div className='footer'>
        <NavLink className='link' exact to='/signup'>
          Create Account
        </NavLink>
        <NavLink className='link' exact to='/signup'>
          Can't sign in?
        </NavLink>
      </div>
    </Fragment>
  )
}

export default Login
