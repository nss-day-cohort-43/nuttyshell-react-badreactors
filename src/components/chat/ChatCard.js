import React, { useContext } from "react";
import { useHistory} from "react-router-dom"
import { ListGroupItem } from "reactstrap";
import { ChatContext} from "./ChatProvider"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

//create HTML for a single message


   
   

export const ChatCard = ({ message }) => (
  <section className="message">
      <Link to={`/messages/detail/${message.id}`}>
          <h3 className="message__content">{message.message}</h3>
      <div className="message__userId">{message.user.username}</div>
      </Link>
  </section>
)