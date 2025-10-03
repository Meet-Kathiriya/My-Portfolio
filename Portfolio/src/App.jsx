import React from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Thank from './components/Thank'

export default function App() {
  return (
    <div className='bg-black border-1 max-sm:w-190 max-md:w-195'>
      <Nav/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Thank/>
    </div>
  )
}