import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
//Articles//
import { ArticleList } from "./article/ArticleList"
import { ArticleProvider } from "./article/ArticleProvider"
import { ArticleDetail } from "./article/ArticleDetail"
import { ArticleForm } from "./article/ArticleForm"
//Tasks//
import { TaskProvider } from "./task/TasksProvider";
import { TaskList } from "./task/TasksList";
import { TaskForm } from "./task/TasksForm";
import { TaskDetail} from "./task/TasksDetail";
//Events//
import { EventProvider } from "./event/EventProvider"
import { EventList } from "./event/EventList"
import { EventForm } from "./event/EventForm"

export const ApplicationViews = () => {
    return (
        <>
     {/* Render the location list when http://localhost:3000/ */}
            {/* <Route exact path="/">
                <Home />
            </Route> */}

            <ArticleProvider>
                <EventProvider>
                    <TaskProvider>
                        <Route exact path="/">
                            <Home />
                            <ArticleList />
                            <EventList />
                            <TaskList />
                        </Route>
                    </TaskProvider>
                </EventProvider>
            </ArticleProvider>

{/*Tasks*/}
            
    {/*Render Task Dropdown Details */}    
            <TaskProvider>
                <Route exact path="/tasks/detail/:taskId(\d+)">
                    <Home />
                    <TaskDetail />
                </Route>
            </TaskProvider>

    {/*Render Task Form */}    
          <TaskProvider>
                <Route exact path="/tasks/create">
                    <Home />
                    <TaskForm />
                </Route>
            </TaskProvider>  

    {/*Render the Edit Task */}    
            <TaskProvider>
                <Route exact path="/tasks/edit/:taskId(\d+)">
                    <Home />
                    <TaskForm />
                </Route>
            </TaskProvider>  

{/*Articles*/}

            <ArticleProvider>
                <Route exact path="/articles/detail/:articleId(\d+)">
                    <Home />
                    <ArticleDetail />
                </Route>
            </ArticleProvider>

            <ArticleProvider>
                <Route exact path="/articles/create">
                    <Home />
                    <ArticleForm />
                </Route>
            </ArticleProvider>

            <EventProvider>
                <Route exact path="/event/create">
                    <EventForm />
                </Route>
            </EventProvider>

            <ArticleProvider>
                <Route exact path="/articles/edit/:articleId(\d+)">
                    <Home />
                    <ArticleForm />
                </Route>
            </ArticleProvider>


        </>
    )
}
