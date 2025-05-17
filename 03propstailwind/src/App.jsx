import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card' 
function App() {
  const [count, setCount] = useState(0)
  let obj1={
    username:"charvy"
  }
  let arr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 rounded-xl'>Tailwind Test</h1>
      {/* <Card channel="charvy" obj={obj1} newarr={arr}/>  */}
      <Card username="charvy"/>
      <Card/>
    </>
  )
}

export default App;
