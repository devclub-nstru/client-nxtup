import React from 'react'
import { Link } from 'react-router-dom'

function Events({eventType, eventName, eventDate, color, url}) {
  return (
    <>
    <Link to={url}>
    <section className={`event-container ${color}`}>
        <div className="tag-container">
            <div className="tag-circle"></div>
            <p className="tag-title">{eventType}</p>
        </div>
        <div className="event-details-container">
            <p className="event-name">{eventName}</p>
            <p className="event-date">{eventDate}</p>
        </div>
    </section>
    </Link>
    </>
  )
}

export default Events