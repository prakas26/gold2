import React from 'react';
import { Col, Container, Row } from "reactstrap";
import GirlImage from '../../../assets/img/img_service.svg'
import IconGirl from '../../../assets/img/Group 53.png'

export default function GirlSection(){
    return (
        <Container fluid>
            <Row className='girl-container'>
                <Col xs="12" md="6" className='girl-col-image'>
                    <img src={GirlImage} className='image-girl' alt="girl_image"/>
                </Col>
                <Col xs="12" md="6" className='girl-col'>
                    <h1> Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <p>
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                    </p>
                    <p> <img src={IconGirl} alt='ikon' className='icon-girl'/>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                    <p> <img src={IconGirl} alt='ikon' className='icon-girl'/>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                    <p> <img src={IconGirl} alt='ikon' className='icon-girl'/>Sewa Mobil Jangka Panjang Bulanan</p>
                    <p> <img src={IconGirl} alt='ikon' className='icon-girl'/>Gratis Antar - Jemput Mobil di Bandara</p>
                    <p> <img src={IconGirl} alt='ikon' className='icon-girl'/>Layanan Airport Transfer / Drop In Out</p>
                </Col>
            </Row>
        </Container>
    )
}