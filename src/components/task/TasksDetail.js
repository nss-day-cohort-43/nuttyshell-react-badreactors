//responsible for showing all the details of the animal//
import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TaskProvider"
import "./Tasks.css"
import { useParams, useHistory } from "react-router-dom"

export const TaskDetail = () => {
    const { getTaskById, removeTask } = useContext(TaskContext)
	
	const [task, setTask] = useState({})
	// const [location, setLocation] = useState({})
	// const [customer, setCustomer] = useState({})
	
	const {taskId} = useParams();
	const history = useHistory();

    useEffect(() => {

        getTaskById(taskId)
        .then((response) => {
			setTask(response)
			// setLocation(response.location)
			// setCustomer(response.customer)
		})
			}, [])

    return (
        <section className="task">
            <h3 className="task__name">{task.taskName}</h3>
            <div className="task__dadte">{task.finishBy}</div>
			<button onClick={
				() => {
					removeTask(task.id)
						.then(() => {
							history.push("/task")
						})
				}}>Remove Task
			</button>      
        </section>
    )
}