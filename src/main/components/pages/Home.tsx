import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NewsStack from '../common/NewsStack';
import NewsRequest from './requests/NewsRequest';

const Home = () => {

   const [newsData, setNewsData] = useState([{title: "", date: ""}]);

   useEffect(() => {
      getNews()
   }, [newsData]);

   const getNews = async () => {
      const newsRequest = new NewsRequest();
      const response = await newsRequest.getNews();

      if (response.status === 'ok') {
         setNewsData(response.data);
      }
   };

   return(
      <Container fluid>
         <Row>
            <Col xs={1}></Col>
            <Col xs={10}>
               <NewsStack
                  newsData={newsData}
               />
            </Col>
            <Col xs={1}></Col>
         </Row>
      </Container>
   );
}

export default Home;