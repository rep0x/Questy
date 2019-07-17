import React, { useContext, useState } from 'react'

// I O T A
import Mam from '@iota/mam'
import { asciiToTrytes } from '@iota/converter'
import generateSeed from 'iota-generate-seed'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

// C O M P O N E N T S
import QuestItem from './QuestItem'

// D A T A
import intitalQuestsData from '../../data/quests.json'

const QuestList = () => {
  const { seed } = useContext(GlobalContext)
  let mamState = Mam.init('https://nodes.devnet.iota.org:443', seed)

  const [quest, setQuest] = useState({ title: '' })

  const [quests, setQuests] = useState(
    JSON.parse(
      localStorage.getItem('quests') || JSON.stringify(intitalQuestsData)
    )
  )

  const createQuest = () => {
    publishToMAM(quest).then(response => {
      quest.seed = generateSeed()
      let updated_quests = [...quests]
      updated_quests.push(quest)

      // Publish to State
      setQuests(updated_quests)
      // Publish to localStorage
      localStorage.setItem('quests', JSON.stringify(updated_quests))

      // Reset 'createQuest' input
      setQuest({
        title: ''
      })
    })
  }

  const onChange = e => {
    let value = e.target.value
    setQuest({
      title: value
    })
  }

  const updateMamState = newMamState => (mamState = newMamState)

  // Publish to tangle
  const publishToMAM = async data => {
    // Create MAM Payload - STRING OF TRYTES
    const trytes = asciiToTrytes(JSON.stringify(data))
    const message = Mam.create(mamState, trytes)

    // Save new mamState
    updateMamState(message.state)

    // Attach the payload
    // let x = await Mam.attach(message.payload, message.address, 3, 9)

    return message
  }

  const questList = quests.map((quest, index) => (
    <QuestItem key={index} quest={quest} />
  ))
  return (
    <div>
      {/* P E R S O N A L    S E E D */}
      {/* <p>Seed: {seed}</p> */}

      {/* M E T H O D :   C R E A T E  */}
      {/* <input value={quest.title} onChange={onChange} type='text' />
      <button type='submit' onClick={createQuest}>
        Create
      </button> */}

      <div className='table'>
        <div className='thead'>
          <div className='tr'>
            <div className='th col-1'>ID</div>
            <div className='th col-3'>Epic</div>
            <div className='th col-6'>Title</div>
            <div className='th col-2'>Status</div>
            <div className='th col-1'>Prio</div>
            <div className='th col-1'>Weight</div>
            <div className='th col-1'>Spent</div>
            <div className='th col-4'>Progress</div>
            <div className='th col-2'>Performance</div>
            <div className='th col-3'>Contributors</div>
          </div>
        </div>
        <div className='tbody'>{questList}</div>
      </div>
    </div>
  )
}

export default QuestList
