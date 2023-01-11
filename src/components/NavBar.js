
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const NavBar = () =>{
   return(
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        Logo
        {/* <img src={} alt="Logo"></img> */}
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#person-info">About me</Nav.Link>
        <Nav.Link href="#werk">Werk</Nav.Link>
        <Nav.Link href="#CV">CV</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
   )
}