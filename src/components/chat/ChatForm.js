import React, { useContext, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useParams } from "react-router-dom";
import { ChatContext } from "./ChatProvider";

export const ChatForm = (props) => {
  const { addMessage, getMessageById, editMessage } = useContext(
    ChatContext
  );

  const [message, setMessage] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { messageId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newMessage = { ...message };
    newMessage[event.target.name] = event.target.value;
    setMessage(newMessage);
  };

  useEffect(() => {
    if (messageId) {
      getMessageById(messageId).then((message) => {
        setMessage(message);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  const constructNewMessage = () => {
    setIsLoading(true);
    if (messageId) {
        editMessage({
            id: parseInt(message.id),
            message: message.message,
            
            userId: parseInt(localStorage.getItem('user'))
        })
            .then(() => history.push(`/messages/message/${message.id}`))
    } else {
        addMessage({
            message: message.message,
            
            userId: parseInt(localStorage.getItem('user'))
        })
            .then(() => history.push("messages"))
    }
}

return (
    <form className="messageForm">
        <h2 className="messageForm__title">New Message</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="messageMessage"> </label>
                <input type="text" id="messageMessage" name="message" required autoFocus className="form-control"
                    placeholder="Type @ for private messages here:"
                    onChange={handleControlledInputChange}
                    defaultValue={message.name} />
            </div>
        </fieldset>
        
        <button type="submit"
            className="btn btn-primary"
            disabled={isLoading}
            onClick={event => {
                event.preventDefault() // Prevent browser from submitting the form
                constructNewMessage()
            }}>
            {messageId ? <>Save Message</> : <>Add Message</> }
            </button>
    </form>
)
}

