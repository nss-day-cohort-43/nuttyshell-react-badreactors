//responsible for showing all the details of the animal//
import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TasksProvider"
import "./Tasks.css"
import { useParams, useHistory } from "react-router-dom"

export const TaskDetail = () => {
    const { removeTask, getTaskById } = useContext(TaskContext)
	const [task, setTask] = useState({})
	const {taskId} = useParams();
	const history = useHistory();

    useEffect(() => {
        getTaskById(taskId)
        .then((response) => {
			setTask(response)
		})
}, [])

	const Cancel = () => {
		history.push("/")
	}

    return (
        <section className="task">
            <h3 className="task__name">{task?.taskName}</h3>
            <div className="task__date">Due:{task?.due}</div>
	
	{/*Remove Task Button*/}		
			<button onClick={
				() => {
					removeTask(task.id)
						.then(() => {
							history.push("/")
						})
				}}>Remove Task
			</button> 

	{/*Edit Task Button*/}
		<button onClick={
			() => {
                history.push(`/tasks/edit/${task.id}`)
            }}>Edit
		</button>

	{/*Cancel or Close Edit Task Button*/}
		<button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    Cancel()
                }}>X
		</button>

        </section>
    )
}