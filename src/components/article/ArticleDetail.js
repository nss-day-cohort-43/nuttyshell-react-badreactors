import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import { useParams, useHistory } from "react-router-dom"
import { Container, Card, Button, CardTitle, CardText } from 'reactstrap'


export const ArticleDetail = () => {
    const { deleteArticle, getArticleById } = useContext(ArticleContext)
    const [article, setArticle] = useState({})
    const { articleId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getArticleById(articleId)
            .then((response) => {
                setArticle(response)
            })
    }, [])

    const Cancel = () => {
        history.push("/")
    }

    return (
        <Container>

            <Card body inverse color="warning">
                <CardTitle>{article.title}</CardTitle>
                <CardTitle>Date: {article.date}</CardTitle>
                <CardTitle>Synopsis: {article.content}</CardTitle>
                <CardTitle>Posted by: {article.user?.username}</CardTitle>
                <CardTitle>Full Story: <a href={article.source}>Click Here</a></CardTitle>
            </Card>




            <div className="form__buttons">
                {article?.user?.id === parseInt(localStorage.getItem("nutshell_user")) ?
                    <>
                        <button onClick={
                            () => {
                                deleteArticle(article.id)
                                    .then(() => {
                                        history.push("/")
                                    })
                            }}>Delete Article
         </button>
                        <button onClick={() => {
                            history.push(`/articles/edit/${article.id}`)
                        }}>Edit</button>
                    </>
                    : null}

                <button className="btn btn-primary"
                    onClick={event => {
                        event.preventDefault()
                        Cancel()

                    }}>X</button>
            </div>

        </Container>
    )
}