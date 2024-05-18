import React from 'react';
import './Cotisation.css';
import Tableau from './Tableau';
import Pagi1 from './Pagi1';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap'; 
const Cotisation = () => {
  return (
    <Container>
      <Pagi1/>
      <Row style={{ marginLeft: '20px', marginRight: '30px', marginTop:'10px' }}>
        <Col>
          <Card style={{ width: '235px',position:'relative',right:'5px',height:'110px' }}>
            <Card.Body style={{ padding: '15px' }}>
            <Card.Text style={{ fontSize: '15px' }}>juin <br></br><strong style={{ fontSize: '22px' }}>225 000 FCFA</strong></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '235px' ,position:'relative',right:'25px',height:'110px' }}>
            <Card.Body>
            <Card.Text style={{ fontSize: '15px' }}>Mai <br></br><strong style={{ fontSize: '22px' }}>100 000 FCFA</strong></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card style={{ width: '235px' ,position:'relative',right:'46px',height:'110px'}}>
            <Card.Body>
            <Card.Text style={{ fontSize: '15px' }}>Total Caise <br></br><strong style={{ fontSize: '19px' }}>3.500.000 FCFA</strong></Card.Text>
              <ProgressBar now={77} variant="success" className="mt-3" style={{ height: '5px',position:'relative',bottom:'13px' }} />
            <p className='text-secondary d-flex justify-content-end'style={{position:'relative',fontSize: '10px'}}>77% du seuil</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    <br></br>
      <Tableau />

    </Container>
  );
}

export default Cotisation;
