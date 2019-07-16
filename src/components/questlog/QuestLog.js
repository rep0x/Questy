import React from 'react'

// C O M P O N E N T S
import CurrentUser from './CurrentUser'

const QuestLog = () => {
  return (
    <div className='questlog box'>
      <div className='box-header'>
        <span className='title'>Questlog</span>
      </div>
      <div className='box-body'>Questlist goes here</div>
      <CurrentUser />
    </div>
  )
}

export default QuestLog
