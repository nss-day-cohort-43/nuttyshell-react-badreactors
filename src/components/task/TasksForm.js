
import React, { useContext, useRef, useEffect } from "react"
import { LocationContext } from "../locations/LocationProvider"
import { TaskContext } from "../tasks/TaskProvider"
// import { CustomerContext } from "../customers/CustomerProvider"
import "./Tasks.css"
import { useHistory } from 'react-router-dom';

import { saveTasks, useTasks, getTasks } from "./TasksProvider.js";

// const contentTarget = document.querySelector(".createNewTask");
// const eventHub = document.querySelector(".hubEvent");

const history = useHistory()

export const TaskForm = (props) => {
    const { addTask } = useContext(AnimalContext)
    
    const name = useRef(null)
    const finish = useRef(null)

    const constructNewTask = () => {
        const finishBy = finish.current.value

        if (finishBy === "") {
            window.alert("Please select a finish by date")
        } else {
            addTask({
                tasksName: name.current.value,
                finishBy
            })
            .then(() => history.pushState("/tasks"))
        }
    }

    return (
        <div class="taskModal">
        <div class="taskModalContent">
                        <form>
                        <div id="closeTask">+</div>
                            <h3>Add New Task</h3>
                                <input type="text" id="taskContent" placeholder="Enter Task Here...">
                                <input type="date" id="taskDate" placeholder="Expected Completion Date">
                                <button type="button" id="saveTask" value="saveTask">Save</button>
                                <button type="button" id="clearTask" value="clearTask">Clear</button>
                            </form>
                        </div> 
                        </div>
    )
}




export const TaskForm = () => {
    getTasks()
        .then(() => {
            render(useTasks());
        })
}














