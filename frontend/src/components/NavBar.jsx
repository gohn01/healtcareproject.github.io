import React from 'react'
import './navbar.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link } from "react-router-dom";



const NavBar = () => {
  return (
    <Navbar>
        <Container>
            <h2>
                QHealth
            </h2>
            <Nav className='px-5'>
                <a href="#">Home</a>
                <a href="#">Service</a>
                <a href="#">Find Doctors?</a>
                <a href="#">Help</a>
                <a href="#">Blog</a>
            </Nav>
            
            <button className='btn btn-primary'>Contact Us</button>
        </Container>

    </Navbar>
  )
}

export default NavBar;
