import React from "react"
import "./Article.css"
import { ListGroup, ListGroupItem } from 'reactstrap'
import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap"






export const ArticleCard = ({ article }) => (
//     <ListGroup>
//         <ListGroupItem tag="button" action><Link to={`/articles/detail/${article.id}`}>
//             <h3 className="article__title">{article.title}</h3>
//             <div className="article__userId">Posted by: {article.user?.username} on {article.date}</div>
//         </Link></ListGroupItem>
//     </ListGroup>
// )
    <section className="article">
        <Card className="rounded bg-light clearfix">
            <CardHeader className="bg-info">

    <Link lassName="text-light" to = {`/articles/detail/${article.id}`}>
       <h3 className="article__title">{article.title}</h3>
       </Link>
       </CardHeader>
            <CardBody>
                <CardTitle>Name: {article.title}</CardTitle>
                <CardText>posted by: {article.detail}</CardText>
            </CardBody>
        </Card>

   </section>
)