import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const SignUp = () => {
    // Necessary states
    const [errorMsg, setErrorMsg] = useState('');
    // firebase hook
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Form Submit
    const handleFormSubmit = event => {
        // Default submit prevention
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPass = event.target.confirmPass.value;

        // Creating user account with email and password
        password === confirmPass ? createUserWithEmailAndPassword(email, password)
            .then(user => {
                setErrorMsg('');
                toast("Account Created Successfully");
                console.log(user);
            })
            .catch(err => console.log(err)) : setErrorMsg("Passwords does not match");

        event.target.reset();
    }
    return (
        <div className='mx-auto row container form-page-bg'>
            <div className='d-flex justify-content-center align-items-center vh-100'>
                <Form onSubmit={handleFormSubmit} className='col-12 col-md-6 p-3 shadow-lg bg-body-tertiary rounded'>
                    <h1 className='text-center my-4'>Please Register First</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" name='email' placeholder="Enter Your Email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Control type="password" name='confirmPass' placeholder="Confirm Password" required />
                    </Form.Group>
                    <Button className='appointment-btn' variant="primary" type="submit">
                        Register
                    </Button>
                    <p className='text-danger my-2 fw-semibold'>{errorMsg}</p>
                    <p className='text-danger fw-semibold'></p>
                    <p className='my-2 fw-semibold'>Already have an Account? <Link to='/login'>Login</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default SignUp;