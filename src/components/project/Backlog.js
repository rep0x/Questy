import React, { useContext, useState } from 'react'

// IOTA
import Mam from '@iota/mam'
import { asciiToTrytes } from '@iota/converter'
import generateSeed from 'iota-generate-seed'

// C O N T E X T
import { GlobalContext } from '../../context/GlobalContext'

const Backlog = () => {
  const { seed } = useContext(GlobalContext)
  let mamState = Mam.init('https://nodes.devnet.iota.org:443', seed)

  const [quest, setQuest] = useState({ title: '' })

  const [quests, setQuests] = useState(
    JSON.parse(localStorage.getItem('quests') || '[]')
  )

  const createQuest = () => {
    publishToMAM(quest).then(response => {
      quest.seed = generateSeed()
      let updated_quests = [...quests]
      updated_quests.push(quest)
      setQuests(updated_quests)
      localStorage.setItem('quests', JSON.stringify(updated_quests))
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
    <li key={index}>
      <h5>{quest.title}</h5>
    </li>
  ))

  return (
    <div>
      <h1>Project goes here - thats for sure</h1>
      <p>Seed: {seed}</p>
      <input value={quest.title} onChange={onChange} type='text' />
      <button onClick={createQuest}>Create</button>
      <h2>Quests</h2>
      <ul>{questList}</ul>
    </div>
  )
}

export default Backlog
