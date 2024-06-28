import React from 'react'
import Navbar from './components/navbar/navbar'
import Giang from './components/Giang/Giang'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Giang/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App