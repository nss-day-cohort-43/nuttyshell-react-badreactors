import React, { useContext, useEffect, useState } from "react"
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"
import { useParams, useHistory } from "react-router-dom"


export const ArticleDetail = () => {
    const { deleteArticle, getArticleById } = useContext(ArticleContext)
    const [article, setArticle] = useState({})
    const { articleId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", articleId)
        getArticleById(articleId)
            .then((response) => {
                setArticle(response)
            })
    }, [])

    const Cancel = () => {
        history.push("/")
    }

    return (
        <section className="article">
            <h3 className="article__title">{article.title}</h3>
            <div className="article__date">Date: {article.date}</div>
            <div className="article__content">Synopsis: {article.content}</div>
            <div className="article__url">Full Story: <a href={article.source}>Click Here</a></div>
            <div className="article__userId">Posted by: {article.user?.username}</div>
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

            <button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    Cancel()

                }}>Cancel</button>

        </section>
    )
}