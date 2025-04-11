import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import Navbar from './Navbar'
import 'flowbite'; 
import BackgroundVideo from './BackgroundVideo';
import PatternLinks from './PatternLinks';
import Hero from './Hero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <div className='main-container'>

    <BackgroundVideo/>
    <PatternLinks/>
       <Hero/>
    </div>

    </>
  )
}

export default App
