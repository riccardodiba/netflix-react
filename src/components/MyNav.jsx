import { Navbar, Nav, Container } from 'react-bootstrap'
import { BellFill, Search } from 'react-bootstrap-icons';

function MyNav() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#home" className='text-danger'>Netflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className='text-white fw-bold'>Home</Nav.Link>
            <Nav.Link href="#Tv Shows"className='text-secondary fw-bold'>Tv Shows </Nav.Link>
          <Nav.Link href="#Movies"className='text-secondary fw-bold'>Movies </Nav.Link>
          <Nav.Link href="#Recendly Added"className='text-secondary fw-bold'>Recendly Added </Nav.Link>
          <Nav.Link href="#My List"className='text-secondary fw-bold'>My List </Nav.Link>
         <div
              id="icone-right"
              className=" col d-flex align-items-center justify-content-end me-5"
            >
              <Search className="text-white me-2 "/>
    
              <BellFill className="text-white ms-2"/>
              </div>
       
          
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;