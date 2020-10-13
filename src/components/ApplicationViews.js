import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { ArticleList } from "./article/ArticleList"
import { ArticleProvider } from "./article/ArticleProvider"
import { ArticleDetail } from "./article/ArticleDetail"
import { ArticleForm } from "./article/ArticleForm"
import { ChatProvider } from "./chat/ChatProvider"
import { ChatList } from "./chat/ChatList"
import { ChatForm } from "./chat/ChatForm"

export const ApplicationViews = () => {
    return (
        <>

            <ArticleProvider>
                <Route exact path="/">
                    <Home />
                    <ArticleList />
                </Route>
            </ArticleProvider>

            <ArticleProvider>
                <Route exact path="/articles/detail/:articleId(\d+)">
                    <ArticleDetail />
                </Route>
            </ArticleProvider>

            <ArticleProvider>
                <Route exact path="/articles/create">
                    <ArticleForm />
                </Route>
            </ArticleProvider>

            <ArticleProvider>
                <Route exact path="/articles/edit/:articleId(\d+)">
                    <ArticleForm />
                </Route>
            </ArticleProvider>

            <ChatProvider>
                <Route exact path="/">
                    <Home />
                    <ChatList />
                </Route>
            </ChatProvider>

            <ChatProvider>
                <Route exact path="/messages/create">
                {/* <Home /> */}
                    <ChatForm />
                </Route>
            </ChatProvider>

            <ChatProvider>
                <Route exact path="/messages/edit/:messageId(\d+)">
                {/* <Home /> */}
                    <ChatForm />
                </Route>
            </ChatProvider>
        </>
    )
}
