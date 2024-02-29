import React from 'react'
import { useState } from 'react'

const Words = "Harsh hello what are you doing today? ".split(" ")

const App = () => {
  const [Input, setInput] = useState(Words)

  return (
    <div>

    <div className="">
      {Input.map((words, index) => {
        <p>{words}</p>
      })}
    </div>
      
    </div>
  )
}

export default App
