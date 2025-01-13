import React from 'react'

function Events({eventType, eventName, eventDate, color}) {
  return (
    <>
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
    </>
  )
}

export default Events