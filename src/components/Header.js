import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRef, useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';

function Header(props){
    const navbarRef = useRef(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const updateOffset = () => {
        if (navbarRef.current) {
            setOffset(navbarRef.current.offsetHeight);
        }
        };
        updateOffset();
        window.addEventListener("resize", updateOffset);
        return () => window.removeEventListener("resize", updateOffset);
    }, []);

    return (
        <>
        <header>
        <Navbar ref={navbarRef} expand="lg" fixed="top" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand as={NavLink} to="/" end>First React App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/home" className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>Home</Nav.Link>
                <Nav.Link as={NavLink} to="/other" className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/3.1" className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>Action</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/3.2" className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
                    Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/3.3" className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={NavLink} to="/3.4" className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
                    Separated link
                </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </header>
        <div className='page-content' style={{ paddingTop: offset }}>
            {props.children}
        </div>
        </>
    );
}

export default Header;
