import React from 'react';
import { Col, Container, Row, Button } from "reactstrap";

export default function SewaMobil (){
    return (
        <Container className='main-container'>
            <Row className='sewa-container'>
                <Col className='inner-sewa'>
                    <h1>
                        Sewa Mobil di (Lokasimu) Sekarang
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </p>
                    <Button color="success">
                        Mulai Sewa Mobil
                    </Button>
                </Col>
            </Row>
        </Container>
    )
  }