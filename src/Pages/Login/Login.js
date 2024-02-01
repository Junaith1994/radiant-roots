import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    // Necessary hooks
    const emailRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // Firebase hook of email-password sign-in
    const [
        signInWithEmailAndPassword,
        user1,
        loading1,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Password reset email firebase hook
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);

    // Google sign-in firebase hook
    const [signInWithGoogle, user2, loading2] = useSignInWithGoogle(auth);

    // Form submit
    const handleFormSubmit = event => {
        // Default submit prevention
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        // User Sign-in
        signInWithEmailAndPassword(email, password)
            .then(user => {
                if (user) {
                    toast("Login Successful !!");
                    // Sending data to generate jwt token
                    axios.post('https://radiant-roots-server.vercel.app/createNewUser', { email: email })
                        .then(async res => {
                            await res.data && localStorage.setItem('accessToken', res.data);
                            // Navigating user to the desired route
                            user?.user?.emailVerified === true ? navigate('/registered-activities')
                                : navigate(from, { replace: true });
                        })

                }
            })
            .catch(err => console.log(err))
        event.target.reset()
    }

    // Password reset email handle
    const passwordResetEmail = () => {
        const email = emailRef.current.value;
        if (email) {
            sendPasswordResetEmail(email)
                .then(result => {
                    if (result) {
                        toast("Password reset email sent");
                    }
                })
        }
        else {
            toast("Please Enter Email First !");
        }
    }

    // Google Sign-in handler
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(user => {
                // Navigating user to the desired route
                user?.user?.emailVerified === true ? navigate('/registered-activity')
                    : navigate(from, { replace: true });
                // // Navigating user to the desired route
                // user && navigate(from, { replace: true });
            })
    }

    return (
        <div className='mx-auto row container form-page-bg '>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <img className='w-50 w-md-50' src="https://i.ibb.co/GPmw7w0/Screenshot-30.png" alt="Brand logo" />
                <div className='col-12 col-md-6 p-5 shadow-lg bg-body-tertiary rounded'>
                    <Form onSubmit={handleFormSubmit}>
                        <h1 className='text-center my-4'>Please Login</h1>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" ref={emailRef} name='email' placeholder="Enter Your Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" name='password' placeholder="Password" required />
                        </Form.Group>
                        <Button className='appointment-btn' variant="primary" type="submit">
                            Login
                        </Button>
                        <p className='text-danger fw-semibold my-2'>{error?.message}</p>
                        <p className='text-danger fw-semibold my-2'>Forgot password? <Link onClick={passwordResetEmail}>Reset Password</Link></p>
                    </Form>
                    {/* Divider */}
                    <div className='d-flex align-items-center my-2'>
                        <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                        <span className='mx-1 fw-semibold'>OR</span>
                        <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                    </div>
                    <div className='p-md-5'>
                        <h2 className='text-center mb-3'>Login With</h2>
                        <Button onClick={handleGoogleSignIn} variant='light' className='w-100 d-flex justify-content-center shadow-lg bg-body-tertiary rounded-5'>
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