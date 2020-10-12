import React from "react"
import "./Event.css"
import { Link } from "react-router-dom"

export const EventCard = ({ event }) => (
    <section className="event">
        <h3> {event.name} </h3>

        <div className="event__name">Name: {event.name}</div>
        <div className="event__date">Date: {event.date}</div>
        <div className="event__Location">Location: {event.location}</div>
    </section>
)