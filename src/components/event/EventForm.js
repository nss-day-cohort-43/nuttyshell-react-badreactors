import React, { useContext, useState, useEffect } from "react"
import { EventContext } from "../event/EventProvider"
import "./Event.css"
import { useHistory, useParams } from 'react-router-dom';
import { Button } from "reactstrap"

export const EventForm = () => {
    const { addEvent, getEventById, updateEvent } = useContext(EventContext)


    //for edit, hold on to state of article in this view
    const [event, setEvent] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const { eventId } = useParams();
    const history = useHistory();

    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (e) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newEvent = { ...event }
        //article is an object with properties. 
        //set the property to the new value
        newEvent[e.target.name] = e.target.value
        //update state
        setEvent(newEvent)
    }

    // If articleId is in the URL, getArticleById
    useEffect(() => {
        if (eventId) {
            getEventById(eventId)
                .then(event => {
                    setEvent(event)
                    setIsLoading(false)
                })
        } else {
            setIsLoading(false)
        }

    }, [])

    const construcEventObject = () => {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (eventId) {
            //PUT - update
            updateEvent({
                name: event.name,
                date: event.date,
                location: event.location,
                id: event.id,
                userId: parseInt(localStorage.nutshell_user)

            })
                .then(() => history.push(`/event/detail/${event.id}`))
        } else {
            //POST - add
            addEvent({
                name: event.name,
                date: event.date,
                location: event.location,
                id: event.id,
                userId: parseInt(localStorage.nutshell_user)
            })
                .then(() => history.push("/"))
        }
    }
    // Function for cancel button
    const Cancel = () => {
        history.push("/")
    }


    return (
        <form className="EventForm">
            <Button outline color="secondary" close aria-label="Cancel"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault()
                    Cancel()
                }}></Button>

            <h2 className="eventForm__title">{eventId ? <>Edit Event</> : <>New Event</>}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="EventTitle">Event Name: </label>
                    <input type="text" id="EventName" name="name" required autoFocus className="form-control"
                        placeholder="Name"
                        onChange={handleControlledInputChange}
                        defaultValue={event.name} />
                </div>
            </fieldset >
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventDate">Event Date:</label>
                    <input type="date" id="eventDate" name="date" required autoFocus className="form-control"
                        placeholder="Date"
                        onChange={handleControlledInputChange}
                        defaultValue={event.date} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="eventLocation">Location: </label>
                    <input type="text" id="eventLocation" name="location" required autoFocus className="form-control"
                        placeholder="Location"
                        onChange={handleControlledInputChange}
                        defaultValue={event.location} />
                </div>
            </fieldset >


            <Button outline color="secondary"
                disabled={isLoading}
                onClick={e => {
                    e.preventDefault() // Prevent browser from submitting the form
                    construcEventObject()
                }}>
                {eventId ? <>Save Event</> : <>Add Event</>}</Button>


        </form >
    )
}