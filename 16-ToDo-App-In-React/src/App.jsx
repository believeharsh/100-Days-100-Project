import React from 'react'
import TaskProvider from './Components/Context/TaskProvider'
import MainContainer from './Components/Tasks/MainContainer'

const App = () => {
  return (
     <TaskProvider>
      <MainContainer/>
     </TaskProvider>
  )
}

export default App
