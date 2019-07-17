import React from 'react'

// A S S E T S
import SvgCurrency from '../../assets/icons/currency'
import wave from '../../assets/waves/wave-row.png'

const QuestItem = ({ quest }) => {
  let prioOutput
  if (quest.prio === 3) {
    prioOutput = '!!!'
  } else if (quest.prio === 2) {
    prioOutput = '!!'
  } else if (quest.prio === 1) {
    prioOutput = '!'
  } else {
    prioOutput = 'TBD'
  }

  let weigthOutput
  if (quest.estimation >= 0) {
    weigthOutput = (
      <div className='label icon'>
        <SvgCurrency />
        {quest.estimation}
      </div>
    )
  } else {
    weigthOutput = <div className='label'>{quest.estimation}</div>
  }

  let progressOutput
  const todoIsDone = value => {
    return value.isDone === true
  }
  const doneTodos = quest.todos.filter(todoIsDone)
  let progress = doneTodos.length / quest.todos.length

  return (
    <div className='tr'>
      <div className='td col-1'>{quest.id}</div>
      <div className='td col-3'>{quest.epic}</div>
      <div className='td col-6 regular'>{quest.title}</div>
      <div className='td col-2'>
        <div className={`label ${quest.status}`}>{quest.status}</div>
      </div>
      <div className='td col-1'>
        <div className={`label ${quest.prio >= 1 ? 'prio' : ''}`}>
          {prioOutput}
        </div>
      </div>
      <div className='td col-1'>{weigthOutput}</div>
      <div className='td col-1'>{quest.spent}</div>
      <div className='td col-4' dataProgress='100'>
        <div
          className={`progress-container ${progress === 0 ? 'untouched' : ''}`}
          style={{ backgroundImage: `url(${wave})` }}
        >
          <div
            className='progress-overlay'
            style={{ width: `calc(100% * ${1 - progress})` }}
          />
          <div className='progress-numbers'>
            <div className='progress-todos'>
              <span className='progress-done'>{doneTodos.length}</span>
              <span className='progress-total'>{`/${quest.todos.length}`}</span>
            </div>
            <span className='progress-percentage'>
              {`${Math.floor(progress * 100)}%`}
            </span>
          </div>
        </div>
      </div>
      <div className='td col-2'>0%</div>
      <div className='td col-3' />
    </div>
  )
}

export default QuestItem
