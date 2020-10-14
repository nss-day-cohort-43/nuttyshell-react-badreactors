import React, { useState } from "react"
import "./Tasks.css"
import { Link } from "react-router-dom"

/*Purpose: To render a single task as an HTML representation of the data.*/

export const TaskCard = ({ task }) => {
    const [isChecked, setIsChecked] = useState(true);

    return ( 
    <section className="taskListContainer">
        <Link to={`/tasks/detail/${task.id}`}>
            <h3 className="taskName">{task.taskName}</h3>
        </Link>
    <div className="task_due">Due Date: {task.due}</div>

    <div className="completed">
            <input 
                type="checkbox" 
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
            />
        </div>
    </section>
    )
}
       
