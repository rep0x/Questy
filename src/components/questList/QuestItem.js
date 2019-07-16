import React from 'react'

const QuestItem = ({ quest }) => {
  return (
    <div className='tr'>
      <td>{quest.id}</td>
      <td>{quest.epic}</td>
      <td>{quest.title}</td>
      <td>{quest.status}</td>
      <td>{quest.prio}</td>
      <td>{quest.estimation}</td>
      <td>{quest.spent}</td>
      <td dataProgress='100'>6/8</td>
      <td>0%</td>
      <td />
    </div>
  )
}

export default QuestItem
