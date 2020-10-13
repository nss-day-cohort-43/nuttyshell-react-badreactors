import React, { useContext, useEffect, useState } from "react"
import { ChatContext } from "./ChatProvider"
import { ChatCard } from "./ChatCard"
import { ChatForm } from "./ChatForm"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom"

export const ChatList = (messageArray) => {
    const { messages, getMessages } = useContext(ChatContext)

    useEffect(() => {
        getMessages()
    }, [])

    const history = useHistory()

    return (
        <>
       
            
                <div className="messages">
                    {
                        messages.map(message => {
                            return <ChatCard key={message.id} message={message} />
                        })
                    }
                </div>
<h2>badREACTions ChatRoom</h2>
                <button onClick={() => { history.push(`/messages/create`) }}>
          Add Message
    </button>
      <div className="messages">
          {
              messages.map(message => {
                  messages.sort(
                   (currentMessage, nextMessage) =>   
                   nextMessage.userId 
                  )
                  return `
                  <div id="messageBody-${message.id}"<p>${message.user.username}: ${message.body}</p>
                      </div>
                      `
                    }
                )}  </div>
                  
              
                
        </>
    )
}


