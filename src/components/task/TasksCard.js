import React from "react"
import "./Tasks.css"
import { Link } from "react-router-dom"
/*Purpose: To render a single task as an HTML representation of the data.*/


export const TaskCard = ({taskObj}) => (
    <section class="taskListContainer">
        <Link to={`/tasks/detail/${taskObj.id}`}>
                <h3 className="taskName">{taskObj.tasksName}</h3>
        </Link>
    </section>
)
       

{/* <p>
<div class="taskListContainer">Date: ${taskObj.finishby}</div>
<div class="taskListContainer">Task: ${taskObj.tasksname}</div>
<button id="editTask--${taskObj.id}">Edit</button>
<input type="hidden" name="taskId" id="taskId">
<button id="deleteTask--${taskObj.id}">Delete</button>
</p> */}
