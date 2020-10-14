import React, { useContext } from "react";
import { useHistory} from "react-router-dom"
import { ListGroupItem } from "reactstrap";
import { ChatContext} from "./ChatProvider"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap"

//create HTML for a single message


   
   

export const ChatCard = ({ message }) => (
  <section className="message">
    <Card className="rounded bg-light clearfix">
            <CardHeader className="bg-info">
      <Link className="text-light" to={`/messages/detail/${message.id}`}>
          <h3 className="message__content">{message.message}</h3>
      {/* <div className="message__userId">{message.user.username}</div> */}
      </Link>
      </CardHeader>
            <CardBody>
                <CardTitle>username:   {message.user.username}</CardTitle>
                {/* <CardText> {message.message}</CardText> */}
            </CardBody>
        </Card>

  </section>
)