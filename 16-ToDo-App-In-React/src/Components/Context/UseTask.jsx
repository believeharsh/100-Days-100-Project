
import {useContext} from 'react'
import { TaskContext } from './TaskContext'
const UseTask = () => {
    const {Tasks, setTasks, addTask , EditTask , deleteTask} = useContext(TaskContext)
  return {Tasks, setTasks, addTask , EditTask , deleteTask}
}

export default UseTask
