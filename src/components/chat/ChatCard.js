import React, { useContext } from "react";
import { useHistory} from "react-router-dom"
import { ListGroupItem } from "reactstrap";
import { ChatContext} from "./ChatProvider"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

//create HTML for a single message

export const ChatCard = ({ message }) => {
    const { deleteMessage } = useContext(ChatContext)
    const history = useHistory()
  return (
    <ListGroupItem className="message-container">
        <h3 className="message_message">{message.message}</h3>
      <div className="message_user">{message.user.username}:</div>
      
      <div className="messageButtons">
          {message.userId === parseInt(localStorage.getItem("new_user")) ?
          <>
          <button onClick={() => { history.push(`/messages/edit/$message.id`) }}>
          Edit Message
    </button>

    <button onClick={() => { history.push(`/messages/delete/$message.id`) }}>
          Delete Message
    </button>
          </>
          : null}
      </div> 
    </ListGroupItem>
  );
};
