import React, { useEffect, useState } from "react";

const Events = () => {
    const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () =>{
        try {
            const response = await fetch('/api/events');
            const data = await response.json();
            setEvents(data);
        } catch(error){
            console.error('Error fetching events: ',error);
        }
    };

    fetchEvents();
  }, []);


  return (
    <div class="performar_area black_bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section_title mb-80">
                        <h3 class="wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s"></h3>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg">
                    <div class="row">
                        <div className="events-container">
                        {events.map((event, index) => (
                            <div className="col-lg-6 col-md-6" id={event.event_name} key={index}>
                            <div className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div data-tilt className="thumb">
                                <a
                                    href="https://drive.google.com/file/d/1Di8jyV6QOMMsScDPSKroktzrPsPjDqus/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <img src={event.img_path} alt={event.event_name} />
                                </a>
                                </div>
                                <div className="performer_heading">
                                <h4>{event.event_name}</h4>
                                <span>
                                    {event.desc}
                                    <a
                                    href="https://forms.gle/DVBJk6t1zQarWdXs7"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="register_btn"
                                    >
                                    click here to register
                                    </a>
                                </span>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default Events;


