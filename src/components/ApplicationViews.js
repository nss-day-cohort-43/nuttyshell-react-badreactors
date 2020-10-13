import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { Container, Row, Col } from 'reactstrap';
//Articles//
import { ArticleList } from "./article/ArticleList"
import { ArticleProvider } from "./article/ArticleProvider"
import { ArticleDetail } from "./article/ArticleDetail"
import { ArticleForm } from "./article/ArticleForm"
import { ChatProvider } from "./chat/ChatProvider"
import { ChatDetail } from "./chat/ChatDetail"
import { ChatList } from "./chat/ChatList"
import { ChatForm } from "./chat/ChatForm"

//Tasks//
import { TaskProvider } from "./task/TasksProvider";
import { TaskList } from "./task/TasksList";
import { TaskForm } from "./task/TasksForm";
import { TaskDetail } from "./task/TasksDetail";
//Events//
import { EventProvider } from "./event/EventProvider"
import { EventList } from "./event/EventList"
import { EventForm } from "./event/EventForm"
import { EventDetail } from "./event/EventDetail"
import { Container, Row, Col } from "reactstrap"

export const ApplicationViews = () => {
    return (
        <>

            <ArticleProvider>
                <EventProvider>
                    <ChatProvider>
                    <Route exact path="/">
                        <Home />
                        <ArticleList />
                        <EventList />
                        <ChatForm />
                        <ChatList />
                        {/* <ChatDetail /> */}
                    </Route>
                    </ChatProvider>
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

            {/* <ChatProvider>
                <Route exact path="/messages">
                    <Home />
                    <ChatList />
                </Route>
            </ChatProvider> */}

            <ChatProvider>
                <Route exact path="/messages/detail/:messageId(\d+)">
                    <ChatDetail />
                </Route>
            </ChatProvider>

            {/* <ChatProvider>
                <Route exact path="/messages/create">
                <Home />
                    <ChatForm />
                </Route>
            </ChatProvider> */}

            <ChatProvider>
                <Route exact path="/messages/edit/:messageId(\d+)">
                <Home />
                    <ChatForm />
                </Route>
            </ChatProvider>

        </>
    )
}
