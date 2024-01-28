import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const AddActivity = () => {
    
    const handleAddBtn = event => {
        event.preventDefault();
        const activityName = event.target.activity.value;
        const imgLinkUrl = event.target.imgLink.value;
        // Posting new activity to server
        axios.post('https://radiant-roots-server.vercel.app/add-activities', {
            activityTitle: activityName,
            img: imgLinkUrl
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));

        // Clearing input fields
        event.target.reset();
    }

    return (
        <div className='mx-auto row container form-page-bg'>
            <div className='d-flex justify-content-center align-items-center'>
                <Form onSubmit={handleAddBtn} className='col-12 col-md-6 p-3 shadow-lg bg-body-tertiary rounded'>
                    <h1 className='text-center my-4'>Add New Volunteer Activity</h1>
                    <Form.Group className="mb-3" controlId="formBasicText1">
                        <Form.Control type="text" name='activity' placeholder="Activity Name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicText2">
                        <Form.Control type="text" name='imgLink' placeholder="Image Link Url" required />
                    </Form.Group>
                    <div className='text-center'>
                        <Button className='w-50' variant="primary" type="submit">
                            Add
                        </Button>
                    </div>
                    <p className='text-danger my-2 fw-semibold'></p>
                    <p className='text-danger fw-semibold'></p>
                </Form>
            </div>
        </div>
    );
};

export default AddActivity;