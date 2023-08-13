import React from 'react'
import './Features.css'

const Features = ({text, title}) => {
  return (
    <div className='gpt3__features-container__feature'>
       <div className='gpt3__features-container__feature-title'>
          <div className='divider' />
          <h1>{title}</h1>
       </div>
       <div className='gpt3__features-container__feature-text'>
        <p>{text}</p>
       </div>
    </div>
  )
}

export default Features