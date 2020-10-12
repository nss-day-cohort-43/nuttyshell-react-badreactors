import React from "react"
import "./Tasks.css"
import { Link } from "react-router-dom"
/*Purpose: To render a single task as an HTML representation of the data.*/

export const TaskCard = ({ task }) => (
    <section className="taskListContainer">
            <h3 className="taskName">{task.taskName}</h3>
        <div className="task_due">Due Date: {task.due}</div>
    </section>
)
       
