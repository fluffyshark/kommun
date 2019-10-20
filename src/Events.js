import React from 'react';
import './css/events.css';

class Events extends React.Component {
  render() {

    let eventContent = null;
    if (this.props.eventContent) {
      eventContent = this.props.eventContent.map(function(eventContent){
        return (
          <div className="events_an_event" key={eventContent.id}>
            <img className="event_event_image" src={require(`./img/${eventContent.image}.png`)} alt="none" />
            <div className="event_event_textcontainer"></div>
            <p className="event_event_title">{eventContent.title}</p>
            <p className="event_event_description">{eventContent.description}</p>
          </div>
        );
        })
      }

    return(
      <div className="events_container">
        <div className="events_top_section">
          <p className="events_title">Evenemang i Svalöv</p>
          <p className="events_subtext">Här är de kommande eventen i kommunen.</p>
        </div>
        <div className="events_bottom_section">
          <div className="events_bottom_section_container">



              {eventContent}



          </div>
        </div>
      </div>
    );
  }
}

export default Events;
