import React, { useContext } from 'react'

import SvgClose from '../../assets/icons/close'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

const Alert = ({ type, msg }) => {
  const { alert, setAlert } = useContext(GlobalContext)

  return (
    <div
      className={`alert alert--${alert.type} ${alert.isOpen ? 'active' : ''}`}
    >
      <span>{alert.msg}</span>
      <div className='close-wrapper'>
        <SvgClose />
      </div>
    </div>
  )
}

export default Alert
