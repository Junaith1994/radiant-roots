import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Login = () => {
    // Necessary hooks
    // const [errorMsg, setErrorMsg] = useState('');
    const location = useLocation(); 

    // Firebase hook
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Form submit
    const handleFormSubmit = event => {
        // Default submit prevention
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // User Sign-in
        signInWithEmailAndPassword(email, password)
            .then(user => {
                toast("Login Successful !!");
                console.log(user);
            })
            .catch(err => console.log(err))
        event.target.reset()
    }

    return (
        <div className='mx-auto row container form-page-bg '>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img className='w-50 w-md-50' src="https://i.ibb.co/GPmw7w0/Screenshot-30.png" alt="Brand logo" />
                <div className='col-12 col-md-6 p-5 shadow-lg bg-body-tertiary rounded'>
                    <Form onSubmit={handleFormSubmit}>
                        <h1 className='text-center my-4'>Please Login</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Button className='appointment-btn' variant="primary" type="submit">
                            Login
                        </Button>
                        <p className='text-danger fw-semibold my-2'>{error?.message}</p>
                        <p className='text-danger fw-semibold my-2'>Forgot password? <Link>Reset Password</Link></p>
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