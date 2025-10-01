import React from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Work from './Component/Work'
import Contact from './Component/Contact'

export default function App() {
  return (
    <div className="min-h-screen">
      <Home/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  )
}