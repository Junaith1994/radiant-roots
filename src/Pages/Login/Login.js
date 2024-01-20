import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mx-auto row container form-page-bg '>
            <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
                <img className='w-50 w-md-25' src="https://i.ibb.co/HK9gk4g/Screenshot-30.png" alt="Brand-Logo" />
                <div className='col-12 col-md-6 p-5 shadow-lg bg-body-tertiary rounded'>
                    <Form>
                        <h1 className='text-center my-4'>Please Login</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter Your Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button className='appointment-btn' variant="primary" type="submit">
                            Login
                        </Button>
                        <p className='text-danger fw-semibold my-2'>Forgot password? <Link>Reset Password</Link></p>
                        <p className='text-danger fw-semibold'></p>
                    </Form>
                    {/* Divider */}
                    <div className='d-flex align-items-center my-2'>
                        <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                        <span className='mx-1 fw-semibold'>OR</span>
                        <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                    </div>
                    <div className='p-md-5'>
                        <h2 className='text-center mb-3'>Login With</h2>
                        <Button variant='light' className='w-100 d-flex justify-content-center shadow-lg bg-body-tertiary rounded-5'>
                            <img style={{ width: '25px' }} className='' src="https://i.ibb.co/0DcJQL5/google-logo.png" alt="Google-logo" />
                            <span className='ms-2 mx-md-5 fs-5 fw-semibold text-wrap'>Continue With Google</span>
                        </Button>
                        <p className='my-2 text-center fw-semibold'>Don't have an Account? <Link to='/sign-up'>Create Account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;