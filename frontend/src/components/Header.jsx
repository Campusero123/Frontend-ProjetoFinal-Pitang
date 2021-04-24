import React from 'react';
import { FormControl, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({title, routes = [] }) => (
    <Navbar bg='success' variant='dark'>
        <Navbar.Brand href='#home'>{title}</Navbar.Brand>
            <Nav className='mr-auto'>
                {routes.map((route) => (
                    <Link className='nav-link' to={route.path}>{route.name}</Link>
                ))}
            </Nav>
    </Navbar>
)

export default Header;