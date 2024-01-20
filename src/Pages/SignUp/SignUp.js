import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className='mx-auto row container form-page-bg'>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <Form className='col-12 col-md-6 p-3 shadow-lg bg-body-tertiary rounded'>
                    <h1 className='text-center my-4'>Please Register First</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Control type="password" placeholder="Confirm Password" required />
                    </Form.Group>
                    <Button className='appointment-btn' variant="primary" type="submit">
                        Register
                    </Button>
                    <p className='text-danger fw-semibold'></p>
                    <p className='text-danger fw-semibold'></p>
                    <p className='my-2 fw-semibold'>Already have an Account? <Link to='/login'>Login</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;