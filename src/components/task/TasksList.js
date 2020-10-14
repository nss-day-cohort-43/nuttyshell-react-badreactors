import React, { useContext, useEffect} from "react"
import { TaskContext } from "./TasksProvider"
import { TaskCard } from "./TasksCard"
import "./Tasks.css"
import { useHistory } from "react-router-dom";

export const TaskList = () => {
    // This state changes when `getTask()` is invoked below
     const { tasks, getTask } = useContext(TaskContext)
  
 
     //useEffect - reach out to the world for something
     useEffect(() => {
         getTask()    
     }, [])
 
     const history = useHistory()
 
     return (	
       <>
         <h2>Tasks</h2>
             <button onClick={() => {history.push("/tasks/create")}}>
                 Add Task
             </button>
         <div className="tasks">
            {
                tasks.map(task => {
                    tasks.sort(
                        (currentTask, nextTask) =>
                            Date.parse(nextTask.date) - Date.parse(currentTask.date)
                    )
                    return <TaskCard key={task.id} task={task}/>
                })
            }
         </div>
     </>
   )
 }