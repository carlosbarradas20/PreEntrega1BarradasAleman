//import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";


export const NavBar = () => (
    <Navbar bg="light" data-bs-theme="light">
    
      <Navbar.Brand href="/">Tiempo Elegante</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/category/clasicos">Clasicos</Nav.Link>
        <Nav.Link href="/category/deportivos ">Deportivos</Nav.Link>
        <Nav.Link href="/category/Moderno y Minimalista">Moderno y Minimalista</Nav.Link>
      </Nav>
    
    <CartWidget/>
  </Navbar>
    
);

