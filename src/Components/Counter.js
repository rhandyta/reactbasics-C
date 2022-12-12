import React, { useState } from 'react'

export default function Counter () {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter+1)
    console.log(counter)
  }

  const decrement = () => {
    if(!counter <= 0) {
      setCounter(counter - 1)
      console.log(counter)
    }
    return false
  }

  return (
    <div style={{ textAlign:"center" }}>
      <button onClick={decrement}>Decrement</button>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}