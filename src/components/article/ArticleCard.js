import React from "react"
import "./Article.css"
import { Link } from "react-router-dom"





export const ArticleCard = ({ article }) => (
    <section className="article">
        <Link to={`/articles/detail/${article.id}`}>
            <h3 className="article__title">{article.title}</h3>
        </Link>
        <div className="article__userId">Posted by: {article.user?.username} on {article.date}</div>
    </section>
)