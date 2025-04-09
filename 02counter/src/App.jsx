import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let counter=5
  const addvalue=()=>{
    // console.log("value added",Math.random());
    counter=counter+1
    console.log("value added",counter)
  }
  return (
    <>
     <h1>counter value:{counter}</h1>
     <button
     onClick={addvalue}>ADD value</button>
     <br></br>
     <button>remove value</button>
    </>
  )
}
export default App
