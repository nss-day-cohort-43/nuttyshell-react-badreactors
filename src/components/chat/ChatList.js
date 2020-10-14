import React, { useContext, useEffect, useState } from "react"
import { ChatContext } from "./ChatProvider"
import { ChatCard } from "./ChatCard"
import { ChatForm } from "./ChatForm"
import { Button, Col, Container, Row } from "reactstrap"
import { useHistory } from "react-router-dom"
import "./Chat.css";

export const ChatList = () => {
    const { messages, getMessages } = useContext(ChatContext)

    useEffect(() => {
        getMessages()
    }, [])

    const history = useHistory()
    return (
        <>
            <Container className="bg-light overflow-auto h-15 border border-danger rounded-top">
                {/* <Button outline color="success" className="float-right" onClick={() => history.push("")}> */}
                    
            {/* </Button> */}
                <h2 className="text-danger"> Messages</h2>
            </Container>
            <Container className="bg-light overflow-auto h-25 border border-danger rounded-bottom border-top-0">
                {
                    messages.map(message => {
                        return <ChatCard key={message.id} user={message.user.name} message={message} />
 
                    })
                }
            </Container>
        </>
    )







    // return (
    //     <div className="message">
    //         <h2>badREACTions!</h2>
    //         {
    //             messages.map(message => {
    //                 return <ChatCard key={message.id} user={message.user.name} message={message} />
    //             })
    //         }  
            
    //     </div>
        
    // )
}


