import React, { useState, createContext } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ArticleContext = createContext()

/*
 This component establishes what data can be used.
 */
export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])

    const getArticles = () => {
        return fetch("http://localhost:8088/articles?_expand=user")
            .then(res => res.json())
            .then(setArticles)
    }

    const addArticle = article => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
            .then(getArticles)
    }
    const getArticleById = (id) => {
        return fetch(`http://localhost:8088/articles/${id}?_expand=user`)
            .then(res => res.json())
    }

    const deleteArticle = articleId => {
        return fetch(`http://localhost:8088/articles/${articleId}`, {
            method: "DELETE"
        })
            .then(getArticles)
    }

    const updateArticle = article => {
        return fetch(`http://localhost:8088/articles/${article.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(article)
        })
            .then(getArticles)
    }

    /*
        You return a context provider which has the
        `articles` state, the `addArticle` function,
        and the `getArticle` function as keys. This
        allows any child elements to access them.
    */
    return (
        <ArticleContext.Provider value={{
            articles, addArticle, getArticles, getArticleById, deleteArticle, updateArticle
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}