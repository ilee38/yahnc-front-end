import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {

   return(
      <Row>
        <Col xs={1}></Col>
        <Col xs={10}>
          <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container fluid>
              <Navbar.Brand href="#home">Hacker News Client</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">new</Nav.Link>
                  <Nav.Link href="#home">favorites</Nav.Link>
                  <Nav.Link href="#home">comments</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col xs={1}></Col>
      </Row>
    );
}

export default NavigationBar;