import React from "react"
import "./Article.css"
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from "react-router-dom"





export const ArticleCard = ({ article }) => (
    <ListGroup>
        <ListGroupItem tag="button" action><Link to={`/articles/detail/${article.id}`}>
            <h3 className="text-warning">{article.title}</h3>
            <h5 className="text-success">Posted by: {article.user?.username} on {article.date}</h5>
        </Link></ListGroupItem>
    </ListGroup>
)
