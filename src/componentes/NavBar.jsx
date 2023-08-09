import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";


export const NavBar = () => (
    <Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">Tiempo Elegante</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Clasicos</Nav.Link>
        <Nav.Link href="#features">Deportivos</Nav.Link>
        <Nav.Link href="#pricing">Moderno y Minimalista</Nav.Link>
      </Nav>
    </Container>
    <CartWidget/>
  </Navbar>
    
);

