import React, { useContext, useEffect, useState } from "react"
import { ChatContext } from "./ChatProvider"
import "./Chat.css"
import { useParams, useHistory } from "react-router-dom"


export const ChatDetail = () => {
    const { deleteMessage, getMessageById } = useContext(ChatContext)
    const [message, setMessage] = useState({})
    const [user, setUser] = useState({})
    const { messageId } = useParams();
    const history = useHistory();

    useEffect(() => {
        
        getMessageById(messageId)
            .then((response) => {
                setMessage(response)
                setUser(response.user)
            })
    }, [])

    // const Cancel = () => {
    //     history.push("/")
    // }
    return (
        <section className="message">
            <h3 className="message__user">{message.user}</h3>
            <div className="message__content">{message.message}</div>
            

            
            <button onClick={
                () => {
                    deleteMessage(message.id)
                        .then(() => {
                            history.push("/")
                        })
                }}>Delete Message
         </button>
            <button onClick={() => {
                history.push(`/messages/edit/${message.id}`
                )
                
                    
                
            }}>Edddit</button>

            {/* <button className="btn btn-primary"
                onClick={event => {
                    event.preventDefault()
                    Cancel()

                }}>Cancel</button> */}

        </section>
    )
}