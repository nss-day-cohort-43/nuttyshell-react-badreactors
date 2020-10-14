import React, { useContext, useEffect, useState } from "react"
import { ChatContext } from "./ChatProvider"
import { ChatCard } from "./ChatCard"
import { ChatForm } from "./ChatForm"
import { Jumbotron, Spinner, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useHistory } from "react-router-dom"
import "./Chat.css";




export const ChatList = () => {
    const { messages, getMessages } = useContext(ChatContext)

    useEffect(() => {
        getMessages()
    }, [])

    const history = useHistory()

    return (
        
        <div className="messageBox">
            <h2>badREACTions!</h2>
            
            {
                messages.map(message => {
                    return <ChatCard key={message.id} user={message.user.name} message={message} />
                })
            }  
            {/* <button onClick={() => {history.push("/messages/create")}}>
                Add Message
            </button>  */}

            {/* <button onClick={() => {history.push("/messages/edit/:messageId(\d+)")}}>
                Edit Message
            </button>          */}
        </div>
        
    )
}


