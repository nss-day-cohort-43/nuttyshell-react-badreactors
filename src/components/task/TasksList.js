import React, { useContext, useEffect } from "react"
import { TaskContext } from "./TaskProvider"
import { TaskCard } from "./TaskCard"
import "./Task.css"
import { useHistory } from "react-router-dom";

// import { TaskHTML } from "./Tasks.js";
// import { getTasks, useTasks, saveTasks } from "./TasksProvider.js"

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
                 return <TaskCard key={task.id} task={task} />
             })
         }
         </div>
     </>
   )
 }