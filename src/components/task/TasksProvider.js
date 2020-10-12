import React, { useState, createContext } from "react"

/*The context is imported and used by individual components that need data*/
export const TaskContext = createContext()

/*This component establishes what data can be used.*/
export const TaskProvider = (props) => {
    const [tasks, setTask] = useState([])

{/*Gets Tasks by Specified User Id */}
    const getTask = () => {
        return fetch("http://localhost:8088/tasks?_expand=user")
            .then(res => res.json())
            .then(setTask)
    }

    const getTaskById = (id) => {
        return fetch(`http://localhost:8088/tasks/${id}?_expand=user`)
            .then(res => res.json())
    }

    const addTask = task => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(getTask) //This refreshes the list with new tasks//
    }

{/*Deletes or removes Tasks by Specified Id */}
    const removeTask = taskId => {
        return fetch(`http://localhost:8088/tasks/${taskId}`, {
            method: "DELETE"
        })
            .then(getTask)
    }


    const updateTask = task => {
        return fetch(`http://localhost:8088/tasks/${task.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
            .then(getTask)
    }
    /*
        You return a context provider which has the
        `tasks` state, the `addTask` function,
        and the `getTask` function as keys. This
        allows any child elements to access them.
    */
    return (
        <TaskContext.Provider value={{
           tasks, getTask, getTaskById, addTask, removeTask, updateTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}











