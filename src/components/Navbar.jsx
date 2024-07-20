import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../assets/styles/common.css'
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar className='navbar-outer' >
          <Link to="/" className='axois-logo'>Axois</Link>
          <Nav className='navbar-list'>
            <Link to="/home" className='navbar-items'>Home</Link>
            <Link to="/dashboard" className='navbar-items'>Dashboard</Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;