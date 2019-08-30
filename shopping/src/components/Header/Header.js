import React from 'react'
import { Navbar , Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../../../src/logo.svg';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="dark">
                    <Navbar.Brand href="#home"><img src={logo} className="App-logo" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        <Nav>
                        <Nav.Link>
                            <Link to="/">Trang Chu</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/CartScreen">Cart
                            </Link>
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
    )
}