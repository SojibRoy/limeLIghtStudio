import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

function MenuBar() {
  const {user,logOut} = useContext(AuthContext)
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">Lime-Light</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/servicefield">Services</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/reviews">Reviews</Nav.Link>
          </Nav>
          <Nav>
          {
            user?.uid?
            <button onClick={logOut} className='btn btn-outline-dark'>Sign out</button>
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