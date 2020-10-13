import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { Container, Row, Col } from 'reactstrap';
//Articles//
import { ArticleList } from "./article/ArticleList"
import { ArticleProvider } from "./article/ArticleProvider"
import { ArticleDetail } from "./article/ArticleDetail"
import { ArticleForm } from "./article/ArticleForm"
//Tasks//
import { TaskProvider } from "./task/TasksProvider";
import { TaskList } from "./task/TasksList";
import { TaskForm } from "./task/TasksForm";
import { TaskDetail } from "./task/TasksDetail";
//Events//
import { EventProvider } from "./event/EventProvider"
import { EventList } from "./event/EventList"
import { EventForm } from "./event/EventForm"

export const ApplicationViews = () => {
    return (
        <>

            <ArticleProvider>
                <EventProvider>
                    <TaskProvider>
                        <Route exact path="/">
                            <Container>
                                <Row>
                                    <Col><TaskList /></Col>
                                    <Col><Home /></Col>
                                    <Col><ArticleList /></Col>
                                </Row>
                                <Row>
                                    <EventList />
                                </Row>
                            </Container>
                        </Route>
                    </TaskProvider>
                </EventProvider>
            </ArticleProvider>


            {/*Tasks*/}
            {/*Render Task List when http://localhost:3000/tasks */}


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
                <EventProvider>
                    <Route exact path="/">
                        <Home />
                        <ArticleList />
                        <EventList />
                    </Route>
                </EventProvider>
            </ArticleProvider>

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
