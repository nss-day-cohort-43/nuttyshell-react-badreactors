import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"

//Tasks//
import { TaskProvider } from "./task/TaskProvider";
import { TaskList } from "./task/TaskList";
import { TaskForm } from "./task/TaskForm";
import { TaskDetail} from "./task/TaskDetail";

export const ApplicationViews = () => {
    return (
        <>
     {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>


{/*Tasks*/}
     {/*Render Task Form when http://localhost:3000/tasks*/}  
            <TaskProvider>
                <Route exact path="/tasks"
                    <TaskList />
                </Route>
            </TaskProvider>
        </>
    )
}
