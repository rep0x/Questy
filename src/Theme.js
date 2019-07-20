import React, { useContext } from 'react'
import styled from 'styled-components'

// A S S E T S
import moon from './assets/icons/moon.svg'
import sun from './assets/icons/sun.svg'

// C O M P O N E N T S
import App from './App'

// C O N T E X T
import { GlobalContext } from './context/GlobalContext'

const Theme = () => {
  const { theme, setTheme } = useContext(GlobalContext)
  let updatedTheme = theme
  const toggleTheme = () => {
    updatedTheme = !updatedTheme
    setTheme(updatedTheme)
    console.log('Läuft')
  }
  const Root = styled.div`
    --black: ${theme ? 'rgba(44, 44, 44, 1)' : 'rgba(255, 255, 255, 1)'};
    --black_25: ${theme ? 'rgba(44, 44, 44, .25)' : 'rgba(255, 255, 255, .25)'};
    --black_50: ${theme ? 'rgba(44, 44, 44, .50)' : 'rgba(255, 255, 255, .50)'};
    --black_05: ${theme ? 'rgba(44, 44, 44, .05)' : 'rgba(255, 255, 255, .05)'};
    --black_10: ${theme ? 'rgba(44, 44, 44, .1)' : 'rgba(255, 255, 255, .1)'};
    --dark: ${theme ? 'rgba(65, 65, 65, 1)' : 'rgba(235, 234, 236, 1)'};
    --light: ${theme ? 'rgba(235, 234, 236, 1)' : 'rgba(65, 65, 65, 1)'};
    --light_50: ${theme ? 'rgba(235, 234, 236, 0.5)' : 'rgba(65, 65, 65, 0.5)'};
    --white: ${theme ? 'rgba(255, 255, 255, 1)' : 'rgba(44, 44, 44, 1)'};
    --white_50: ${theme ? 'rgba(255, 255, 255, .5)' : 'rgba(44, 44, 44, .5)'};
    --box-shadow: ${theme
      ? '0 0 3px rgba(44, 44, 44, .25)'
      : '0 0 3px rgba(255, 255, 255, .25)'};
    --box-shadow-active: ${theme
      ? '0 0 10px rgba(44, 44, 44, .25)'
      : '0 0 10px rgba(255, 255, 255, .25)'};
  `
  return (
    <Root>
      <App />
      <div className='toggle-mode box' onClick={toggleTheme}>
        <img src={theme ? moon : sun} alt='' className='icon' />
      </div>
    </Root>
  )
}

export default Theme
