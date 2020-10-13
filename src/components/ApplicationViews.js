import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ArticleList } from "./article/ArticleList"
import { ArticleProvider } from "./article/ArticleProvider"
import { ArticleDetail } from "./article/ArticleDetail"
import { ArticleForm } from "./article/ArticleForm"
import { EventProvider } from "./event/EventProvider"
import { EventList } from "./event/EventList"
import { EventForm } from "./event/EventForm"
import { EventDetail } from "./event/EventDetail"
export const ApplicationViews = () => {
    return (
        <>

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

            <EventProvider>
                <Route exact path="/event/detail/:eventId(\d+)">
                    <EventDetail />
                </Route>
            </EventProvider>

            <EventProvider>
                <Route exact path="/event/edit/:eventId(\d+)">
                    <EventForm />
                </Route>
            </EventProvider>


        </>
    )
}
