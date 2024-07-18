import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/common.css'

function ColorSchemesExample() {
  return (
    <>
      <Navbar className='navbar-outer' >
          <Navbar.Brand href="/" className='axois-logo'>Axois</Navbar.Brand>
          <Nav className='navbar-list'>
            <Nav.Link href="/home" className='navbar-items'>Home</Nav.Link>
            <Nav.Link href="/dashboard" className='navbar-items'>Dashboard</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;