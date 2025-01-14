import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SmallCards from '../components/SmallCards'
import Events from '../components/Events'
import CardsContainer from '../components/CardsContainer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {

  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className='home-container'>
        <section className="hero-container container section-gap">
            <div className="main-event-details-container">
                <div className="main-event-title-container">
                <div className="outer-active">
                    <div className="inner-active"></div>
                </div>
                <h1 className="main-event-title">NST Hackathon</h1>
                </div>
                <p className="main-event-description">
                    Happening now at Mini Audi, Rishihood University
                </p>
                <Link className="main-event-link" to={"/events/1"}>View Details</Link>
            </div>
            <div data-aos="fade-left" className="event-details-container">
                <SmallCards title="Events" type="events" url="/events" />
                <SmallCards title="Clubs" type="clubs"  url="/events" />
                <SmallCards title="Clans" type="clans"  url="/events" />
                <SmallCards title="More" type="more"  url="/events" />
            </div>
        </section>
        <section data-aos="fade-up" className="events-container container section-gap">
            <h1 className='events-container-heading'>Events</h1>
            <div className="all-events-container">
                <Events eventType="Cultural Fest" eventName="Damru Fest" eventDate="29 - 30 November" color="green" url="/events/1" />
                <Events eventType="Cultural Event" eventName="Lohri Festival" eventDate="13 January, 2025" color="orange" url="/events/2" />
                <Events eventType="Tech Event" eventName="NST Hackathon" eventDate="15 - 17 January" color="red" url="/events/3" />
                <Events eventType="Sports Event" eventName="Sports meet" eventDate="22 February, 2025" color="yellow" url="/events/4" />
                <Events eventType="Cultural Event" eventName="Holi Celebration" eventDate="14 March, 2025" color="pink" url="/events/5" />
            </div>
        </section>

        <section data-aos="fade-up" className="clubs-container section-gap">
            <h1 className='clubs-container-heading'>Clubs</h1>
            <div className="all-cards-container">
                <CardsContainer clubName="Dev Club" presidentName="President Name" imageUrl="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg" />
                <CardsContainer clubName="Arthakram Club" presidentName="Aabir Sarkar" imageUrl={"https://media.istockphoto.com/id/1445807259/photo/business-people-doing-calculations-analyze-the-work-at-the-meeting.jpg?s=612x612&w=0&k=20&c=I1iGLJ15sDfGI13KpPV_Vmpyu9fRYcfdY7187E2gRhc="} />
                <CardsContainer clubName="Dance Club" presidentName="President Name" imageUrl={"https://images.unsplash.com/photo-1547153760-18fc86324498?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwZGFuY2V8ZW58MHx8MHx8fDA%3D"} />
                <CardsContainer clubName="Music Club" presidentName="President Name" imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj2MnHnabPJEwDC9RPSGdA4I6baM4KQ9MB3w&s"} />
                <CardsContainer clubName="GDG Club" presidentName="Aaryan Yadav" imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcqGbFtMpQ4rEXvNMcx069IdUCAa2J3EXvtw&s"} />
                <CardsContainer clubName="Finanza Club" presidentName="Vijay Bharti" imageUrl={"https://cloudinary.hbs.edu/hbsit/image/upload/s--wx5D2ABw--/f_auto,c_fill,h_375,w_750,/v20200101/5393409F6FB391494111C5EC16653C89.jpg"} />
                <CardsContainer clubName="SAST Club" presidentName="Neelanshu Karn" imageUrl={"https://images.pexels.com/photos/2034892/pexels-photo-2034892.jpeg?cs=srgb&dl=pexels-lucaspezeta-2034892.jpg&fm=jpg"} />
                <CardsContainer clubName="Robotics Club" presidentName="President Name" imageUrl={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFphH_pV5DliUufkVSezvB24dn9DOYS6FnA&s"} />
            </div>
        </section>
    </div>
  )
}

export default Home