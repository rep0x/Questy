import React from 'react'

// C O M P O N E N T
import TableInput from '../questList/TableInput'
import TableDropdown from '../questList/TableDropdown'

const Td = ({ data, col, editable, regular, type, options }) => {
  let dataOutput
  if (type === 'input') {
    dataOutput = <TableInput data={data} />
  } else if (type === 'dropdown') {
    dataOutput = <TableDropdown options={options} currentItem={data} />
  }

  return (
    <div
      className={`td col-${col} ${editable ? 'editable' : ''} ${
        regular ? 'regular' : ''
      }`}
    >
      {dataOutput}
    </div>
  )
}

export default Td
