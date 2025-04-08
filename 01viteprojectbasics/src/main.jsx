import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
function Myapp(){
  return(
    <div>
      <h1>custom app</h1>
    </div>
  )
}
//custom rendor: we dont know yet what to do so we use elt
// const reactElement= {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'Click me to visit google'
// }
// const elt= (
//   <a href='https://google.com' target='_blank'>visit google</a>
// )
// 
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
// )
const anotherElemen="another variable"
//element according to react
const reactelement= React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'this is google',
  anotherElemen
)
ReactDOM.createRoot(document.getElementById('root')).
render(
  // <Myapp />
  // Myapp()
  // <elt />
  reactelement
)