import React, { useState, createContext } from "react"

/*The context is imported and used by individual components that need data*/
export const TaskContext = createContext()

/*This component establishes what data can be used.*/
export const TaskProvider = (props) => {
    const [tasks, setTask] = useState([])

    const getTask = () => {
        return fetch("http://localhost:8088/tasks?_expand=location")
            .then(res => res.json())
            .then(setTask)
    }
//We won't need expand at all, correct? Or will it need to be expand by userId?

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

    //Deletes a specific task. 
    const removeTask = taskId => {
        return fetch(`http://localhost:8088/animals/${taskId}`, {
            method: "DELETE"
        })
            .then(getTask)
    }
    /*
        You return a context provider which has the
        `locations` state, the `addLocation` function,
        and the `getLocation` function as keys. This
        allows any child elements to access them.
    */
    return (
        <TaskContext.Provider value={{
           tasks, getTask, addTask, removeTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}











