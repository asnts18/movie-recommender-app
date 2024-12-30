import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import './Header.css'; // Import the custom CSS

const Header = () => {
    return (
        // Main navigation bar with dark background and variant, and custom padded-header class
        <Navbar bg="dark" variant="dark" expand="lg" className="padded-header">
            <Container fluid>
                {/* Navbar brand with icon and custom color */}
                <Navbar.Brand href="/" style={{ color: "#D4ADFC" }}>
                    <FontAwesomeIcon icon={faFilm} /> Magical Movie Picker
                </Navbar.Brand>
                {/* Toggle button for responsive navbar */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                {/* Collapsible part of the navbar */}
                <Navbar.Collapse id="navbarScroll">
                    {/* Navigation links with automatic margin adjustments */}
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {/* Navigation links using NavLink for routing */}
                        <NavLink className="nav-link" to="/"> Home </NavLink>
                        <NavLink className="nav-link" to="/watchList"> Watch List </NavLink>
                    </Nav>
                    {/* Buttons for login and registration */}
                    <Button variant="outline-light" className="me-2"> Login </Button>
                    <Button variant="outline-light"> Register </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
