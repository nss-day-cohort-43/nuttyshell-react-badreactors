import React from "react"
import "./Article.css"
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from "react-router-dom"





export const ArticleCard = ({ article }) => (
    <ListGroup>
        <ListGroupItem tag="button" action><Link to={`/articles/detail/${article.id}`}>
            <h3 className="article__title">{article.title}</h3>
            <div className="article__userId">Posted by: {article.user?.username} on {article.date}</div>
        </Link></ListGroupItem>
    </ListGroup>
)
