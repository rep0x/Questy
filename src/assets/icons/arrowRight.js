import React from 'react'

const arrowRight = ({ validForm }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='15.578'
      height='10.72'
      viewBox='0 0 15.578 10.72'
    >
      <g id='arrow-pointing-to-right' transform='translate(0 -41.916)'>
        <path
          id='Pfad_57'
          data-name='Pfad 57'
          d='M15.365,46.764,10.73,42.128a.724.724,0,0,0-1.024,1.024l3.4,3.4H.724A.724.724,0,1,0,.724,48H13.1l-3.4,3.4a.724.724,0,0,0,1.024,1.024l4.636-4.636A.724.724,0,0,0,15.365,46.764Z'
          fill={`${validForm ? 'var(--white)' : 'var(--black)'}`}
        />
      </g>
    </svg>
  )
}

export default arrowRight
