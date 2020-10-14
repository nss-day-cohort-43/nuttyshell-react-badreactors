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
            <Container fluid className="bg-light overflow-auto h-15 border border-success">

                <Button outline color="warning" className="float-right sticky-top" onClick={() => { history.push("/articles/create") }}>
                    Add Article
        </Button>
                <h2 className="text-success"> Events</h2>
            </Container>
            <Container className="bg-light overflow-auto h-50 border border-success rounded-bottom border-top-0">

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
            </Container>

        </>
    )
}