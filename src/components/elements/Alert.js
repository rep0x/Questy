import React, { useContext } from 'react'
import posed from 'react-pose'

// A S S E T S
import SvgClose from '../../assets/icons/close'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

const Alert = ({ type, msg }) => {
  const { alert, setAlert } = useContext(GlobalContext)
  const removeAlert = () => {
    setAlert({
      type: '',
      isOpen: false
    })
  }

  const AnimatedAlert = posed.div({
    visible: { scale: 1 },
    hidden: { scale: 0 }
  })

  return (
    <AnimatedAlert
      pose={alert.isOpen ? 'visible' : 'hidden'}
      className={`alert alert--${alert.type} ${alert.isOpen ? 'active' : ''}`}
    >
      <span>{alert.msg}</span>
      <div className='close-wrapper' onClick={removeAlert}>
        <SvgClose />
      </div>
    </AnimatedAlert>
  )
}

export default Alert
