import React from 'react'
import { Link } from 'react-router-dom'
import SmallCards from '../components/SmallCards'

function Home() {
  return (
    <>
        <section className="hero-container container section-gap">
            <div className="main-event-details-container">
                <h1 className="main-event-title">NST Hackathon</h1>
                <p className="main-event-description">
                    Happening now at Mini Audi, Rishihood University
                </p>
                <Link className="main-event-link" to={"/events/1"}>View Details</Link>
            </div>
            <div className="event-details-container">
                <SmallCards title="Events" type="events" />
                <SmallCards title="Clubs" type="clubs" />
                <SmallCards title="Clans" type="clans" />
                <SmallCards title="More" type="more" />
            </div>
        </section>
    </>
  )
}

export default Home