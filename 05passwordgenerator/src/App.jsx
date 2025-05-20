import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength] = useState(8);
  const [numberallowed, setnumberallowed]=useState(false);
  const [charallowed,setcharallowed]=useState(false);
  const [password,setpassword]=usestate("");
  

  return (
    <>
    <h1 className="text-4xl text-center">Password Generator</h1>
    </>
  )
}

export default App
