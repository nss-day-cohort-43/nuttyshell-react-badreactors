import React, { useContext, useEffect, useState } from "react"
import { TaskContext } from "./TasksProvider"
import "./Tasks.css"
import { useParams, useHistory } from "react-router-dom"
import { Button, Container, Card, CardTitle } from 'reactstrap';
export const TaskDetail = () => {
	const { removeTask, getTaskById } = useContext(TaskContext)
	const [task, setTask] = useState({})
	const { taskId } = useParams();
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
		<Container>
			<Card body inverse color="primary">
				<CardTitle>{task?.taskName}</CardTitle>
				<CardTitle>Due: {task?.due}</CardTitle>
			</Card>
			<div className="form__buttons">
				{task?.user?.id === parseInt(localStorage.getItem("nutshell_user")) ?
					<>
						{/*Remove Task Button*/}
						<Button onClick={
							() => {
								removeTask(task.id)
									.then(() => {
										history.push("/")
									})
							}}>Remove Task
                </Button>
						{/*Edit Task Button*/}
						<Button onClick={
							() => {
								history.push(`/tasks/edit/${task.id}`)
							}}>Edit
            </Button>
					</>
					: null}
				{/*Cancel or Close Edit Task Button*/}
				<Button className="btn btn-primary"
					onClick={event => {
						event.preventDefault()
						Cancel()
					}}>X
            </Button>
			</div>
		</Container>
	)
}