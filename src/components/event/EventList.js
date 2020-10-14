import React, { useContext, useEffect } from "react"
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import { useHistory } from "react-router-dom"
import { Button, Col, Container, Row } from "reactstrap"
import "./Event.css"

export const EventList = () => {
    const { events, getEventEntries } = useContext(EventContext)

    useEffect(() => {
        getEventEntries()
    }, [])

    const history = useHistory()
    return (
        <>
            <Container className="bg-dark overflow-auto h-25">
                <Button outline color="secondary" className="float-right sticky-top" onClick={() => history.push("/event/create")}>
                    Add Event
            </Button>
                <h2 className="text-light"> Events</h2>
                {
                    events.map(event => {
                        return <EventCard key={event.id} event={event} />

                    })
                }
            </Container>
        </>
    )
}
