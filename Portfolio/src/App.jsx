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
    <div >
    <BackgroundVideo/>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <Hero/>
    <PatternLinks/>
  </div>
  <div>
  </div>
</div>

    </>
  )
}

export default App
