import React from 'react'
import { Link } from 'react-router-dom'
import SmallCards from '../components/SmallCards'
import Events from '../components/Events'
import CardsContainer from '../components/CardsContainer'

function Home() {
  return (
    <div className='home-container'>
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
        <section className="events-container container section-gap">
            <h1 className='events-container-heading'>Events</h1>
            <div className="all-events-container">
                <Events eventType="Cultural Fest" eventName="Damru Fest" eventDate="29 - 30 November" color="green" />
                <Events eventType="Cultural Event" eventName="Lohri Festival" eventDate="13 January, 2025" color="orange" />
                <Events eventType="Tech Event" eventName="NST Hackathon" eventDate="15 - 17 January" color="red" />
                <Events eventType="Sports Event" eventName="Sports meet" eventDate="22 February, 2025" color="yellow" />
                <Events eventType="Cultural Event" eventName="Holi Celebration" eventDate="14 March, 2025" color="pink" />
            </div>
        </section>

        <section className="clubs-container section-gap">
            <h1 className='clubs-container-heading'>Clubs</h1>
            <div className="all-cards-container">
                <CardsContainer clubName="Dance Club" presidentName="Hardik Jaiswal" />
                <CardsContainer clubName="Dance Club" presidentName="Hardik Jaiswal" />
                <CardsContainer clubName="Dance Club" presidentName="Hardik Jaiswal" />
                <CardsContainer clubName="Dance Club" presidentName="Hardik Jaiswal" />
                <CardsContainer clubName="Dance Club" presidentName="Hardik Jaiswal" />
                <CardsContainer clubName="Dance Club" presidentName="Hardik Jaiswal" />
                <CardsContainer clubName="Dance Club" presidentName="Hardik Jaiswal" />
                <CardsContainer clubName="Dance Club" presidentName="Hardik Jaiswal" />
                <CardsContainer clubName="Dance Club" presidentName="Hardik Jaiswal" />
                <CardsContainer clubName="Dance Club" presidentName="Hardik Jaiswal" />
            </div>
        </section>
    </div>
  )
}

export default Home