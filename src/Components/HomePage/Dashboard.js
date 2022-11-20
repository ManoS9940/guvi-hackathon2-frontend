import React from 'react';
import './Dashboard.css';

import {
    Navbar,
    Container,
    Nav
} from 'react-bootstrap';



function Dashboard() {
    return (
        <>
            <div className='box'>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand >Book My Show</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#movies">Movies</Nav.Link>
                            <Nav.Link href="#theatres">Theatres</Nav.Link>
                            <Nav.Link href="#offers">Offers</Nav.Link>
                            <Nav.Link href="#aboutus">About Us</Nav.Link>
                            <Nav.Link href="#contact us">Contact Us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                              
            </div>
        </>
    )
}

export default Dashboard;