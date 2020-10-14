import React, { useContext } from "react";
import { useHistory} from "react-router-dom"
import { ListGroupItem } from "reactstrap";
import { ChatContext} from "./ChatProvider"
import { Link } from "react-router-dom"
import "./Chat.css";
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap"
//create HTML for a single message


   
   

export const ChatCard = ({ message }) => (
  <section className="message">
      <Link className="text-danger" to={`/messages/detail/${message.id}`}>
          <h3 className="message__content">{message.message}</h3>
      </Link>
      <div className="message__user">{message.user.username}</div>
  </section>
)