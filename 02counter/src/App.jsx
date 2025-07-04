import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  // let counter = 15

  const addValue = function(){
    // console.log(counter);
    // setCounter(counter + 1)
    if(counter < 15){
     setCounter(counter + 1)
    }
    
  }

  const removeValue = function(){
      //  setCounter(counter - 1)
       if(counter > 0){
        setCounter (counter - 1)
       }
  }

  return (
    <>
     <h1>Counter the value</h1>
     <h2>Counter value {counter}</h2>

     <button onClick={addValue}>Add value {counter}</button>
     <br /><br />
     <button onClick={removeValue}>remove value {counter} </button>
     <p>footer: {counter}</p>
    </>
  )
}

export default App
