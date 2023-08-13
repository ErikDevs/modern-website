import React from 'react'
import './Feature.css'
import { Features } from '../../containers'


const featuresDate = [
    {title: "Improving end distrusts instantly",
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {title: "Improving end distrusts instantly",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }

]

const Feature = () => {
  return (
    <div className='gpt3__feature section__padding' id='feature'>
        <div className='gpt3__feature-heading'>
            <h1 className='gradient__text'>
                The Future is Now and You Need to Realize it. Step into Future Today & Make it Happen
            </h1>
            <p> Request Early Access to Get Started</p>
        </div>
        <div className='gpt3__feature-container'>
             {featuresDate.map((item, index) => (
                <Features title={item.title} text={item.text} key={item.title + index}  />
             ))}
        </div>
    </div>
  )
}

export default Feature