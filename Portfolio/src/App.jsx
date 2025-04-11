import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' 
import Navbar from './Navbar'
import 'flowbite'; 
import BackgroundVideo from './BackgroundVideo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <BackgroundVideo/>

       
    </>
  )
}

export default App
