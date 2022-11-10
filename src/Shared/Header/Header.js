import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import logo from '../../../src/images/logo.png'
import { Link } from 'react-router-dom';

function MenuBar() {
  const {user,logOut} = useContext(AuthContext)
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/"><img className='w-50' src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/servicefield">Services</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            
          </Nav>
          <Nav>
          {
            user?.uid?
            
            <Nav.Link>
            <Link to='/myreviews' className='text-decoration-none me-3  text-muted'>My Reviews</Link>
            <button onClick={logOut} className='btn btn-outline-dark'>Sign out</button>
          </Nav.Link>
            
            :
            <>
            <Nav.Link  href="/login">
            Log in
          </Nav.Link>
            <Nav.Link  href="/register">
            Register
          </Nav.Link>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuBar;