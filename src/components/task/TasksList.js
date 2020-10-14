import React, { useContext, useEffect} from "react"
import { TaskContext } from "./TasksProvider"
import { TaskCard } from "./TasksCard"
import "./Tasks.css"
import { useHistory } from "react-router-dom";
import { Button, Col, Container, Row } from "reactstrap"

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
        <Container className="bg-light overflow-auto h-15 border border-primary rounded-top">
            <Button outline color="primary" className="float-right sticky-top" onClick={() => {history.push("/tasks/create")}}>
                 Add Task
             </Button>
         <h2 className="text-primary">Tasks</h2> 
        </Container>
        <Container className="bg-light overflow-auto h-50 border border-primary rounded-bottom border-top-0">
            {
                tasks.map(task => {
                    tasks.sort(
                        (currentTask, nextTask) =>
                            Date.parse(nextTask.date) - Date.parse(currentTask.date)
                    )
                    return <TaskCard key={task.id} task={task}/>
                })
            }
         </Container>
     </>
   )
 }