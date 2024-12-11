import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import reactLogo from './assets/wave.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Middle } from './components/Middle'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <NavBar/>
      <Hero/>
      <Middle/>
      <Footer/>
    </div>
  )
}

export default App
