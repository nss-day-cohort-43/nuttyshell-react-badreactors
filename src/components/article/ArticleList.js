import React, { useContext, useEffect } from "react"
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import { useHistory } from "react-router-dom"
import { Container, Button } from 'reactstrap'


export const ArticleList = () => {
    const { articles, getArticles } = useContext(ArticleContext)
    const history = useHistory()

    useEffect(() => {
        getArticles()

    }, [])

    return (
        <>
            <Container className="bg-success overflow-auto h-25 rounded-mb-0" alt="100x100">

                <Button outline color="secondary" className="float-right sticky-top" onClick={() => { history.push("/articles/create") }}>
                    Add Article
        </Button>
                <h2>Interesting Articles</h2>
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