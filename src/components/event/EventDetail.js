import React, { useContext, useEffect, useState } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useParams, useHistory } from "react-router-dom"

export const EventDetail = () => {
    const { getEventById, deleteEvent } = useContext(EventContext)

    const [event, setEvent] = useState({})
    const { eventId } = useParams()
    const history = useHistory();

    useEffect(() => {
        getEventById(eventId)
            .then((response) => {
                setEvent(response)
            })
    }, [])

    return (
        <section className="event">
            <h3 className="event__name">{event.name}</h3>
            <div className="event__name">Name: {event.name}</div>
            <div className="event__date">Date: {event.date}</div>
            <div className="event__Location">Location: {event.location}</div>
            <button onClick={
                () => {
                    deleteEvent(event.id)
                        .then(() => {
                            history.push("/")
                        })
                }}>Delete Entry
            </button>
            <button onClick={() => {
                history.push(`/event/edit/${event.id}`)
            }}>Edit</button>
            <button onClick={() => history.push("/")}>
                Cancel
            </button>
        </section>

    )
}
