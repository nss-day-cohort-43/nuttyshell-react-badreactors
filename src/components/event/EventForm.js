import React, { useContext, useRef, useEffect } from "react"
import { EventContext } from "./EventProvider"
import "./Event.css"
import { useHistory } from 'react-router-dom'

export const EventForm = (props) => {
    const { addEvent, getEventEntries } = useContext(EventContext)

    const name = useRef(null)
    const location = useRef(null)
    const date = useRef(null)

    useEffect(() => {
        getEventEntries()
    }, [])

    const createNewEvent = () => {
        addEvent({
            name: name.current.value,
            location: location.current.value,
            date: date.current.value,
            userId: parseInt(localStorage.nutshell_user)
        })
            .then(() => history.push("/"))
    }
    const history = useHistory();

    return (
        <form className="eventForm">
            <h2 className="eventForm__title">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventName">Event Name:</label>
                    <input type="text" id="eventName" ref={name} required autoFocus className="form-control" placeholder="Event name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="evenLocation">Location:</label>
                    <input type="text" id="eventLocation" ref={location} required autoFocus className="form-control" placeholder="Event Location" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventDate">Event Date:</label>
                    <input type="date" id="eventDate" ref={date} required autoFocus className="form-control" placeholder="When?" />
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    createNewEvent()
                }}
                className="butn btn-primary">
                Save Event
            </button>
            <button onClick={() => history.push("/")}>
                Cancel
            </button>
        </form>
    )
}



