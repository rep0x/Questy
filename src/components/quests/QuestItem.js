import React from 'react'

// C O M P O N E N T S
import Td from '../elements/table/Td'

// A S S E T S
import SvgCurrency from '../../assets/icons/currency'
import SvgBin from '../../assets/icons/bin'
import wave from '../../assets/waves/wave-row.png'

const QuestItem = ({ quest, epics }) => {
  let prioOutput
  if (quest.priority === 3) {
    prioOutput = '!!!'
  } else if (quest.priority === 2) {
    prioOutput = '!!'
  } else if (quest.priority === 1) {
    prioOutput = '!'
  } else {
    prioOutput = 'TBD'
  }

  let weigthOutput = (
    <div className='label icon'>
      <SvgCurrency />
      {quest.todos.length}
    </div>
  )

  let doneTodos = []
  let progress = 0
  if (quest.todos.length > 0) {
    const todoIsDone = value => {
      return value.isDone === true
    }
    doneTodos = quest.todos.filter(todoIsDone)
    progress = doneTodos.length / quest.todos.length
  }

  return (
    <div className='tr'>
      <div className='td col-1'>
        <div className='quest-id'>{quest.id}</div>
        <div className='delete-quest'>
          <SvgBin />
        </div>
      </div>
      <Td
        data={quest.epic}
        col={3}
        editable={true}
        type={'dropdown'}
        options={epics}
      />
      <Td
        data={quest.title}
        col={8}
        editable={true}
        regular={true}
        type={'input'}
      />
      <div className='td col-2 editable'>
        <div className={`label ${quest.status}`}>{quest.status}</div>
      </div>
      <div className='td col-2 editable'>
        <div className={`label ${quest.priority >= 1 ? 'prio' : ''}`}>
          {prioOutput}
        </div>
      </div>
      <div className='td col-2 editable'>{weigthOutput}</div>
      <div className='td col-4'>
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
      <div className='td col-2' />
    </div>
  )
}

export default QuestItem
