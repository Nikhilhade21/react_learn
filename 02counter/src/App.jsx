import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter, setCounter] = useState(15)
  // let counter = 5

  const addValue = () => {
    // console.log("clicked", counter)
    setCounter(counter + 1)
    if(counter == 20){
      setCounter(20)
    }    
  }

  const removeValue = () => {
    setCounter(counter - 1)
    if(counter == 0){
      setCounter(0)
    }
  }

  return (
    <>
     <h1>Nikhil</h1>
     <h3>Counter Value {counter}</h3>

     <button
     onClick={addValue}>Add Value</button>
     <br />
     <button
     onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
