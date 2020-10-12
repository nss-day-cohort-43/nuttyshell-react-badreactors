import React, { useContext, useEffect } from "react"
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import "./Article.css"
import { useHistory } from "react-router-dom"


export const ArticleList = () => {
    const { articles, getArticles } = useContext(ArticleContext)
    const history = useHistory()

    useEffect(() => {
        getArticles()

    }, [])

    return (
        <>
            <h2>Interesting Articles</h2>
            <button onClick={() => { history.push("/articles/create") }}>
                Add Article
        </button>
            <div className="articles">
                {
                    articles.map(article => {
                        articles.sort(
                            (currentArticle, nextArticle) =>
                                Date.parse(nextArticle.date) - Date.parse(currentArticle.date)
                        )
                        return <ArticleCard key={article.id} article={article}
                        />

                    })
                }
            </div>
        </>
    )
}