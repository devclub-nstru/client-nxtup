import React from "react";
import DetailContainer from "./DetailContainer";

function Event({ filter, events }) {
  const filteredEvents = events.filter((event) => event.type === filter);

  return (
    <section className="all-event-section">
      <p className="event-heading">
        {filter.charAt(0).toUpperCase() + filter.slice(1)} Events
      </p>
      <div className="all-event-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <DetailContainer
              key={event.id}
              id={event.id}
              date={event.date}
              time={event.time}
              location={event.location}
              details={event.details}
              title={event.heading}
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