import React from 'react'
import './App.css'

import {Navbar, CTA, Brand, Feature } from './components'
import { Blog, Header,  Possibility, Footer, WhatGPT3 } from './containers'

function App() {
  return (
    <div className='App'> 
      <div className='gradient__bg '>
          <Navbar />
          <Header />
      </div>
       <Brand />
       <WhatGPT3 />
       <Feature />
       <Possibility />
       <CTA />
       <Blog />
       <Footer />

    </div>
  )
}

export default App