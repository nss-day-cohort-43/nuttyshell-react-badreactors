import React, { useContext, useEffect } from "react"
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import { useHistory } from "react-router-dom"
import { Container } from 'reactstrap'


export const ArticleList = () => {
    const { articles, getArticles } = useContext(ArticleContext)
    const history = useHistory()

    useEffect(() => {
        getArticles()

    }, [])

    return (
        <>
            <Container fluid="sm">
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
            </Container>
        </>
    )
}