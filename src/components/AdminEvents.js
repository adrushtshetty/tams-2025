import React, { useEffect, useState } from "react";

const AdminEvents = () => {
    const [events, setEvents] = useState([]);
    const [showEditForm, setShowEditForm] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
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

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setShowEditForm(true);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('eventName', e.target.eventName.value);
    formData.append('desc', e.target.desc.value);
    formData.append('perteam', e.target.perteam.value);
    formData.append('eventImage', e.target.eventImage.files[0]);

    try {
        const response = await fetch('/api/edit-event/'+selectedEvent._id,{
            method: 'PUT',
            body: formData,
        });

        if(response.ok){
            setShowEditForm(false);
            const updatedResponse = await fetch('/api/events');
            const updatedData = await updatedResponse.json();
            setEvents(updatedData);
        }   
    }catch (error) {
        console.error("Edit failed: ", error);
    }
};

    const closeForm = () =>{
        setShowEditForm(false);
        setSelectedEvent(null);
    };

    const handleDelete = async () =>{
        if(window.confirm("Confirm the deletion of Event")){
           try{
            const response = await fetch('/api/delete-event/'+selectedEvent._id, {
                method: 'DELETE'
            });

            if(response.ok){
                setShowEditForm(false);
                setSelectedEvent(null);
                const updatedResponse = await fetch('/api/events');
                const updatedData = await updatedResponse.json();
                setEvents(updatedData);
            }
           } catch(error){
            console.error("Delete Failed: ", error);
           }
        }
    };
  

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
                            <div className="col-lg-6 col-md-6" id={event.event_name} key={index} onClick={() => handleEventClick(event)} style={{cursor: 'pointer'}}>
                            <div className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div data-tilt className="thumb">
                                    <img src={event.img_path} alt={event.event_name} />
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
                        {showEditForm && selectedEvent && (  
                            <div className="form_box" onClick={closeForm}>
                                    <form className="form_menu" onClick={(e) => e.stopPropagation()} onSubmit={handleEditSubmit}>
                                        <h2>Edit Event</h2>
                                        <label>
                                            Event Name:
                                        <input type="text" name="eventName" class="add_event_form_elements" defaultValue={selectedEvent.event_name} required/>
                                        </label>
                                        <label>
                                            Description:
                                        <textarea name="desc" class="add_event_form_elements" defaultValue={selectedEvent.desc} required/>
                                        </label>
                                        <label>
                                            No. of people per Team:
                                            <input type="number" name="perteam" class="add_event_form_elements" defaultValue={selectedEvent.per_team} required/>
                                        </label>
                                        <label>
                                            Image:
                                            <label for='image_btn' class="add_event_form_elements" id='form_image_btn'>
                                                Submit Image
                                            </label>
                                        <input type="file" name="eventImage" accept='image/png' id='image_btn' style={{display: 'none'}}/>
                                        </label>
                                        <br/>
                                        <button type="submit" class="submit_btn_event">
                                            Submit
                                        </button>
                                        <button type="button" onClick={closeForm} class="submit_btn_event">
                                            Cancel
                                        </button>
                                        <button type="button" onClick={handleDelete} class="delete_btn_event" style={{ backgroundColor: '#ff4444', alignItems: 'right'}}>
                                            Delete
                                        </button>
                                    </form>
                                </div>
                        )}
                        </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default AdminEvents;


