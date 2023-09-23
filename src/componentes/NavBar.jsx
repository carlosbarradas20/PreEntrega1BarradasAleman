import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
import  { Link } from "react-router-dom"


export const NavBar = () => {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="light">
        <Container>
          <Navbar.Brand as={Link} to="/">Tiempo Elegante</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/category/clasicos">Clasicos</Nav.Link>
            <Nav.Link as={Link} to="/category/deportivos ">Deportivos</Nav.Link>
            <Nav.Link as={Link} to="/category/Moderno y Minimalista">Moderno y Minimalista</Nav.Link>
          </Nav>
        </Container>
        <CartWidget />
      </Navbar>
    </>
  );
}
