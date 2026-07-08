import "./NucasEvents.css";

import event1 from "../../assets/images/NucasEvents1.png";
import event2 from "../../assets/images/NucasEvents2.png";
import event3 from "../../assets/images/NucasEvents3.png";

const events = [
  {
    image: event1,
    day: "28",
    month: "MAR",
    title: "Name of the Events",
    location: "Kathmandu, Nepal",
    time: "12:00 am - 4:00 pm",
  },
  {
    image: event2,
    day: "8",
    month: "MAR",
    title: "Name of the Events",
    location: "Kathmandu, Nepal",
    time: "12:00am - 04:00pm",
  },
  {
    image: event3,
    day: "15",
    month: "MAR",
    title: "Name of the Events",
    location: "Kathmandu, Nepal",
    time: "12:00am - 04:00pm",
  },
];


const NucasEvents = () => {
  return (
    <section className="events-section">
      <div className="events-container">
        <h2 className="events-title">Nucas events</h2>

        <div className="events-grid">
          {events.map((event, index) => (
            <div className="event-card" key={index}>
              <img
                src={event.image}
                alt={event.title}
                className="event-image"
              />

              <div className="event-content">
                <div className="event-date">
                  <span className="day">{event.day}</span>
                  <span className="month">{event.month}</span>
                </div>

                <div className="event-details">
                  <h3>{event.title}</h3>

                  <p>
                    <strong>Location:</strong> {event.location}
                  </p>

                  <p>
                    <strong>Time:</strong> {event.time}
                  </p>
                </div>
              </div>

              <a href="/" className="event-btn">
                Attend this event
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NucasEvents;