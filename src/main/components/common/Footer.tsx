import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {

   return (
      <Container fluid>
         <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
               <Stack gap={3} className='Footer-stack'>
                  <div>
                     <hr />
                     <center>
                        <div className='Footer-text'>YAHNC: Yet Another Hacker News Client</div>
                     </center>
                  </div>
                  <div></div>
               </Stack>
            </Col>
            <Col xs={1}></Col>
         </Row>
      </Container>


   );
};

export default Footer;