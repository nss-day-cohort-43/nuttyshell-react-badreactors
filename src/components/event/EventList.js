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
            <Container className="bg-light overflow-auto h-15 border border-success rounded-top">
                <Button outline color="success" className="float-right" onClick={() => history.push("/event/create")}>
                    Add Event
            </Button>
                <h2 className="text-success"> Events</h2>
            </Container>
            <Container className="bg-light overflow-auto h-25 border border-success rounded-bottom border-top-0">
                {
                    events.map(event => {
                        return <EventCard key={event.id} event={event} />

                    })
                }
            </Container>
        </>
    )
}
