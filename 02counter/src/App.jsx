import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(5)   //we will intialize like that so that changes can be made 
  // let counter=5      // counter=variable, setcount=function
  const addvalue=()=>{
    // console.log("value added",Math.random());
    // counter=counter+1
    setCount(counter+1)
    console.log("value added",counter)
  }
  const subvalue=()=>{
    setCount(counter-1)
  }
  return (
    <>
     <h1>counter value:{counter}</h1>
     <button
     onClick={addvalue}>ADD value</button>
     <br></br>
     <button onClick={subvalue}>remove value</button>
    </>
  )
}
export default App


// to study virtual DOM
//visit github react fibre algorithm 
//in virtual dom: two trees will be compared new one and old one and only different part between them will be update 
// whereas in DOM whole tree is made again
//to optimize the working we use virtual dom as only few updates are made by comparison with previous tree 