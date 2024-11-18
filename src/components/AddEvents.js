import React, {useEffect, useState} from 'react';

const AddEvents = () => {
    const [showForm, setShowForm] = useState(false);
    const [file, setFile] = useState(null);

    const handleFileChange = (e)=>{
        setFile(e.target.files[0]);
    };
    const handleSubmit = async(e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('eventImage', file);
        formdata.append('eventName', e.target.eventName.value);
        formdata.append('description', e.target.description.value);
        formdata.append('perteam', e.target.perteam.value);
        console.log(file);
        try {
            console.log(formdata);
            const response = await fetch('/api/upload-event', {
                method: 'POST',
                body: formdata,
            });

            if (response.ok){
                closeForm();
            }   
        } catch(error){
            console.error("Upload failed:", error);
        }
    };

    const addingEvent = () =>{
        setShowForm(true);
    }
    const closeForm = () => {
        setShowForm(false);
    }

    return(
        <div className='performar_area black_bg'>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg">
                        <div class='events-container'>
                            <div id="add_event_box" class="col-lg-6 col-md-6" onClick={addingEvent}>
                                <div id="add_event_content">
                                    <h1>ADD EVENT</h1>
                                    <h1>+</h1>
                                </div>
                            </div>
                {showForm && (  <div className="form_box" onClick={closeForm}>
                                    <form className="form_menu" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
                                        <h2>Add Event</h2>
                                        <label>
                                            Event Name:
                                        <input type="text" name="eventName" class="add_event_form_elements" required/>
                                        </label>
                                        <label>
                                            Description:
                                        <textarea name="description" class="add_event_form_elements" required/>
                                        </label>
                                        <label>
                                            No. of people per Team:
                                            <input type="number" name="perteam" class="add_event_form_elements" required/>
                                        </label>
                                        <label>
                                            Image:
                                            <label for='image_btn' class="add_event_form_elements" id='form_image_btn'>
                                                {file ? 'Image Selected' : 'Submit Image'}
                                                {file && <span style={{marginLeft: '10px', fontSize: '14px'}}>
                                                    ({file.name})
                                                    </span>}
                                            </label>
                                        <input type="file" accept='image/png' id='image_btn' onChange={handleFileChange} style={{display: 'none'}} required/>
                                        </label>
                                        <br/>
                                        <button type="submit" class="submit_btn_event">
                                            Submit
                                        </button>
                                        <button type="button" onClick={closeForm} class="submit_btn_event">
                                            Cancel
                                        </button>
                                    </form>
                                </div>
                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEvents;