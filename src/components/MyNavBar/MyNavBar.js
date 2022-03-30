import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const MyNavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React Router</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {/* <Nav.Link>Home</Nav.Link>
                        <Nav.Link href="/members">Members</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/contact">Contact Us</Nav.Link> */}
                        <CustomLink  className='nav-link' to="/">Home</CustomLink>
                        <CustomLink  className='nav-link' to="/members">Members</CustomLink>
                        <CustomLink  className='nav-link' to="/blogs">Blogs</CustomLink>
                        <CustomLink  className='nav-link' to="/about">About</CustomLink>
                        <CustomLink  className='nav-link' to="/contact">Contact Us</CustomLink>
                        
                        {/* <Link className='nav-link' to="/members">Members</Link>
                        <Link className='nav-link' to="/blogs">Blogs</Link>
                        <Link className='nav-link' to="/about">About</Link>
                        <Link className='nav-link' to="/contact">Contact Us</Link> */}
                       
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MyNavBar;