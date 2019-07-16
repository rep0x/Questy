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

  const validateUsername = (boolean, value) => {
    let newFormData = formData
    newFormData.username = value
    setFormData(newFormData)
    setValidUsername(boolean)
    if (boolean === true && validUsername === true && validPassword === true) {
      setValidForm(true)
    } else {
      setValidForm(false)
    }
  }

  const validatePassword = (boolean, value) => {
    let newFormData = formData
    newFormData.password = value
    setFormData(newFormData)
    setValidPassword(boolean)
    if (boolean === true && validUsername === true && validPassword === true) {
      setValidForm(boolean)
    } else {
      setValidForm(boolean)
    }
  }

  const formSubmit = e => {
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
      } else if (formData.username === '' || formData.password === '') {
        setAlert({
          type: 'notice',
          msg: 'Please enter username and password',
          isOpen: true
        })
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
          <SvgArrowRight />
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
