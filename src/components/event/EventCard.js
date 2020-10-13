import React from "react"

import { Link } from "react-router-dom"
import { Card, CardBody, CardTitle, CardText, CardHeader } from "reactstrap"

export const EventCard = ({ event }) => (
    <section className="event">
        <Card className="rounded bg-info clearfix">
            <CardHeader className="bg-dark">
                <Link to={`/event/detail/${event.id}`}>
                    {event.name}
                </Link>
            </CardHeader>
            <CardBody>
                <CardTitle>Name: {event.name}</CardTitle>
                <CardText>Date: {event.date}</CardText>
                <CardText>Location: {event.location}</CardText>
            </CardBody>
        </Card>
    </section >
)