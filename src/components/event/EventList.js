import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import { useHistory } from "react-router-dom"
import "./Event.css"

export const EventList = () => {
    const { events, getEventEntries } = useContext(EventContext)

    useEffect(() => {
        getEventEntries()
    }, [])

    const history = useHistory()
    return (
        <>
            <h2> Events</h2>
            <button onClick={() => history.push("/event/create")}>
                Add Event
            </button>
            <div className="events">
                {
                    events.map(event => {
                        return <EventCard key={event.id} event={event} />

                    })
                }
            </div>
        </>
    )
}
