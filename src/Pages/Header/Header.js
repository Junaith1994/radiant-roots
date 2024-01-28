import React from 'react';
import './Header.css';
import { Button, Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Header = () => {
    // Auth state Firebase hook
    const [user, loading1, error1] = useAuthState(auth);
    console.log(user);
    // User sign-out
    const [signOut, loading2, error2] = useSignOut(auth);

    return (
        <Navbar expand="lg" className="navbar-bg navbar-dark" sticky='top'>
            <Container>
                <Navbar.Brand className='border-0 text-center text-md-start' as={NavLink} to='/'><img width={'20%'} className='rounded-pill' src="https://i.ibb.co/GPmw7w0/Screenshot-30.png" alt="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                        <Nav.Link as={NavLink} to='/donation'>Donation</Nav.Link>
                        <Nav.Link as={NavLink} to='/events'>Events</Nav.Link>
                        <Nav.Link as={NavLink} to='/blog'>Blog</Nav.Link>
                        {
                            user || loading1
                                ?
                                <>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            {user?.displayName || user?.email}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu className='navbar-bg'>
                                            <Dropdown.Item as={NavLink} to={`/volunteer-register/${user?.email}`}>Register</Dropdown.Item>
                                            <Dropdown.Item as={NavLink} to='/add-volunteer-activities'>Add Activities</Dropdown.Item>
                                            <Dropdown.Item as={NavLink} to='/registered-activity'>Manage Activities</Dropdown.Item>
                                            <Dropdown.Item as={Button} className='bg-danger fw-semibold' onClick={() => signOut()}>Sign-Out</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </>
                                :
                                <>
                                    <Button as={NavLink} className='me-2 fw-semibold' variant='dark' to='/login'>Login</Button>
                                    <Button className='fw-semibold me-2' variant='dark'>Admin</Button>
                                </>
                        }
                        {/* {user && <Nav.Link className='fw-semibold' as={NavLink} to='/'>{user?.displayName || user?.email}</Nav.Link>} */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;