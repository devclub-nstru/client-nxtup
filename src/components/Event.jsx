import React from "react";
import DetailContainer from "./DetailContainer";
import formatDate from "../utils/formatDate";

function Event({ filter, events }) {
  const currentDate = Number(new Date());

  const filteredEvents = events.filter((event) => {
    // const eventDate = new Date(event.Date); 
    // event.Date milisecond

    if (filter === "upcoming") {
      return currentDate < event.Date; // Event is in the future
    } else if (filter === "past") {
      return currentDate > event.Date; // Event is in the past
    } else if (event.IsActive) {
      return event.IsActive; // Include active events
    }
    return false; // Fallback for unsupported filters
  });
  

  return (
    <section className="all-event-section">
      <p className="event-heading">
        {filter.charAt(0).toUpperCase() + filter.slice(1)} Events
      </p>
      <div className="all-event-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <DetailContainer
              key={event._id}
              id={event._id}
              EventDate={formatDate(event.Date)}
              time={event.Time}
              location={event.Location}
              details={event.Description}
              title={event.Title}
            />
          ))
        ) : (
          <p>No {filter} events available.</p>
        )}
      </div>
    </section>
  );
}

export default Event;