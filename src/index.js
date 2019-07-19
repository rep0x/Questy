import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import Theme from './Theme'
import { GlobalContextProvider } from './context/GlobalContext'

ReactDOM.render(
  <GlobalContextProvider>
    <Theme />
  </GlobalContextProvider>,
  document.getElementById('root')
)
