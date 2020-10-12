
import React, { useContext, useRef, useEffect, useState } from "react"
import { TaskContext } from "../task/TasksProvider"
import "./Tasks.css"
import { useHistory, useParams } from 'react-router-dom';



export const TaskForm = (props) => {
    const { addTask, getTaskById, updateTask } = useContext(TaskContext)
    const [task, setTask] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const { taskId } = useParams();
    const history = useHistory();

// {/*Create a New Task*/}
//     const constructNewTask = () => {
//         const finishBy = finish.current.value

//         if (finishBy === "") {
//             window.alert("Please select a finish by date")
//         } else {
//             addTask({
//                 name: name.current.value,
//                 finishBy
//             })
//             .then(() => history.pushState("/tasks"))
//         }
//     }

{/*Sets the edited task to update with state*/}
const handleControlledInputChange = (task) => {
    const newTask = { ...task }
    newTask[task.target.name] = task.target.value
    setTask(newTask)
}


{/*Get Task by Id*/}
    useEffect(() => {
        if (taskId) {
            getTaskById(taskId)
                .then(task => {
                    setTask(task)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }
    }, [])

{/*Render a Create new Task*/}
    const constructTaskObj = () => {
        //Stops additional clicks on button by disabling
        setIsLoading(true);
        if (taskId) {
            updateTask({
                name: task.tasksName,
                due: task.finishBy,
                userId: parseInt(localStorage.nutshell_user)
            })
                .then(() => history.push(`/tasks/detail/${task.id}`))
        } else {
            addTask({
                name: task.tasksName,
                due: task.finishBy,
                userId: parseInt(localStorage.nutshell_user)
            })
                .then(() => history.push("/"))
        }
    }

{/*Cancel or Close Edit Form Button Function */}
    const Cancel = () => {
        history.push("/")
    }

    return (
        <form className="taskForm">
        <h2 className="taskForm__title">{taskId ? <>Edit Task</> : <>New Task</>}</h2>

{/*Input Field for Task Name*/}      
        <fieldset>
            <div className="form-group">
                <label htmlFor="taskTitle">Task: </label>
                <input type="text" id="taskTitle" name="title" required autoFocus className="form-control"
                    placeholder="Task"
                    onChange={handleControlledInputChange}
                    defaultValue={task.tasksName} />
            </div>
        </fieldset >

{/*Input Field for Task Due Date*/}
        <fieldset>
            <div className="form-group">
                <label htmlFor="taskDueDate">Due Date:</label>
                <input type="date" id="taskDueDate" name="date" required autoFocus className="form-control"
                    placeholder="Due Date"
                    onChange={handleControlledInputChange}
                    defaultValue={task.date} />
            </div>
        </fieldset>

{/*Button to Save or Add New or Edited Task*/}
        <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault() // Prevent browser from submitting the form
                constructTaskObj()
            }}>
            {taskId ? <>Save Task</> : <>Add Task</>}
        </button>

{/*Button to Close or Cancel New or Edited Task*/}
        <button className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault()
                Cancel()
            }}>X
        </button>

    </form >       
    )
}














