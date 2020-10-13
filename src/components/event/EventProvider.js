import React, { useState, createContext } from "react"

export const EventContext = createContext()

export const EventProvider = (props) => {
    const [events, setEvents] = useState([])

    const getEventEntries = () => {
        return fetch("http://localhost:8088/events")
            .then(response => response.json())
            .then(setEvents)
    }

    const addEvent = eventObj => {
        return fetch("http://localhost:8088/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObj)
        })
            .then(getEventEntries)
    }

    const getEventById = (id) => {
        return fetch(`http://localhost:8088/events/${id}?_expand=user`)
            .then(res => res.json())
    }

    const deleteEvent = eventId => {
        return fetch(`http://localhost:8088/events/${eventId}`, {
            method: "DELETE"
        })
            .then(getEventEntries)
    }

    const updateEvent = event => {
        return fetch(`http://localhost:8088/events/${event.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(event)
        })
            .then(getEventEntries)
    }


    return (
        <EventContext.Provider value={{
            events, getEventEntries, addEvent, getEventById, deleteEvent, updateEvent
        }}>
            {props.children}
        </EventContext.Provider>
    )


}
