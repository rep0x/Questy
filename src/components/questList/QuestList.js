import React, { useContext } from 'react'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

// C O M P O N E N T S
import QuestItem from './QuestItem'

const QuestList = () => {
  const { quests, setQuests, projects } = useContext(GlobalContext)

  const updateQuest = () => {
    console.log('Update Quest')
  }

  const deleteQuest = () => {
    console.log('Delete Quest')
  }

  const questList = quests.map((quest, index) => (
    <QuestItem
      key={index}
      quest={quest}
      updateQuest={updateQuest}
      deleteQuest={deleteQuest}
      // epics={project}
    />
  ))

  return (
    <div>
      <div className='table'>
        <div className='thead'>
          <div className='tr'>
            <div className='th col-1'>ID</div>
            <div className='th col-3'>Epic</div>
            <div className='th col-8'>Title</div>
            <div className='th col-2'>Status</div>
            <div className='th col-2'>Prio</div>
            <div className='th col-2'>Weight</div>
            <div className='th col-4'>Todos</div>
            <div className='th col-2'>Contributors</div>
          </div>
        </div>
        <div className='tbody'>{questList}</div>
      </div>
    </div>
  )
}

export default QuestList
