import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
    // firebase hooks
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending, error2] = useSendEmailVerification(auth);
    const { title } = useParams(); // raect-router-dom hook

    // Email verification handler
    const emailVerification = async () => {
        const success = await sendEmailVerification();
        success && toast("A verification Email has been send. Please check your inbox, verification is required");
    } 

    // Handle Registration Form Submission
    const handleRegistrationForm = event => {
        event.preventDefault();
        const fullName = event.target.fullName.value;
        const email = event.target.email.value;
        const date = event.target.date.value;
        const description = event.target.description.value;
        const activity = event.target.activity.value;

        // posting new volunteer info to server
        axios.post('https://radiant-roots-server.vercel.app/volunteer-registration', {
            volunteerName: fullName,
            email: email,
            date: date || new Date(),
            description: description,
            activity: activity
        })
        .then(res => {
            console.log(res);
            if (res.data.acknowledged) {
                user?.emailVerified === false && emailVerification();
                toast(`Registration completed for ${activity}`)
            }
        })
        .then(error => console.log(error));
        
        // Clearing input fields
        event.target.reset();
    }

    return (
        <div className='mx-auto row container'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img className='w-50 w-md-50' src="https://i.ibb.co/GPmw7w0/Screenshot-30.png" alt="Brand logo" />
                <Form onSubmit={handleRegistrationForm} className='col-12 col-md-6 p-3 shadow-lg bg-body-tertiary rounded'>
                    <h1 className='text-center my-4'>Register As A Volunteer</h1>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='fullName' defaultValue={user?.displayName} required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name='email' value={user?.email} readOnly disabled required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control name='date' type="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTextArea">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name='description'
                            style={{ height: '100px' }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicActivity">
                        <Form.Label>Activity</Form.Label>
                        <Form.Control type="text" name='activity' defaultValue={title.includes('@') === true ? '' : title} required />
                    </Form.Group>
                    <div>
                        <Button className='w-100 fw-semibold' variant="primary" type="submit">
                            Registration
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;