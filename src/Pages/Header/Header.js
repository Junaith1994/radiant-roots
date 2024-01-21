import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
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
                        <Button as={NavLink} className='me-2' variant='dark' to='/login'>Login</Button>
                        <Button as={NavLink} className='me-2' variant='primary' to='/volunteer-register'>Register</Button>
                        <Button variant='dark'>Admin</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;