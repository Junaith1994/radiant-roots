import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Register = () => {
    return (
        <div className='mx-auto row container'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img className='w-50 w-md-50' src="https://i.ibb.co/GPmw7w0/Screenshot-30.png" alt="Brand logo" />
                <Form className='col-12 col-md-6 p-3 shadow-lg bg-body-tertiary rounded'>
                    <h1 className='text-center my-4'>Register As A Volunteer</h1>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="Date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicTextArea">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            style={{ height: '100px' }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicActivity">
                        <Form.Label>Activity</Form.Label>
                        <Form.Control type="text" required/>
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