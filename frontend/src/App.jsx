import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import Menu from './components/Menu'

function App() {
 
  return (
    <>
    {/* <h1 className='text-9xl'>hello</h1> */}
    <HeroSection/>
    <Menu/>
    </>
  )
}

export default App


 