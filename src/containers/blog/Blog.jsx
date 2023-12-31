import React from 'react'
import './blog.css'
import Article from '../Article/Article'
import {blog01, blog02, blog03, blog04, blog05} from './Imports'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening We are blogging about it</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imageURL={blog01} date="Aug, 11, 2023" title="GPT3 and Open AI is the future. Let us explore how it is" />
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imageURL={blog02} date="Aug, 11, 2023" title="GPT3 and Open AI is the future. Let us explore how it is" />
          <Article imageURL={blog03} date="Aug, 11, 2023" title="GPT3 and Open AI is the future. Let us explore how it is" />
          <Article imageURL={blog04} date="Aug, 11, 2023" title="GPT3 and Open AI is the future. Let us explore how it is" />
          <Article imageURL={blog05} date="Aug, 11, 2023" title="GPT3 and Open AI is the future. Let us explore how it is" />
        </div>
      </div>
    </div>
  )
}

export default Blog