import React from 'react';
import {
    Col,
    Row,
  } from 'reactstrap';
import Icon1 from '../../assets/img/icon_facebook.png'
import Icon2 from '../../assets/img/icon_instagram.png'
import Icon3 from '../../assets/img/icon_twitter.png'
import Icon4 from '../../assets/img/icon_mail.png'
import Icon5 from '../../assets/img/icon_twitch.png'

export default function Footer () {
  return (
    <Row className='footer-container' xs="1" xl={4}>
      <Col className='footer-address'>
        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </Col>
      <Col className='footer-link'>
          <p>
            Our services
          </p>
          <p>
            Why Us
          </p>
          <p>
            Testimonial
          </p>
          <p>
            FAQ
          </p>
      </Col>
      <Col>
            <Col><p>Connect with us</p></Col>
            <Row className='footer-icon-container'>
              <img src={Icon1} alt='ikon' className='footer-icon'/>
              <img src={Icon2} alt='ikon' className='footer-icon'/>
              <img src={Icon3} alt='ikon' className='footer-icon'/>
              <img src={Icon4} alt='ikon' className='footer-icon'/>
              <img src={Icon5} alt='ikon' className='footer-icon'/>
            </Row>
      </Col>
      <Col className='footer-copyright'>
            <p>Copyright Binar 2022</p>
            <div></div>
      </Col>
    </Row>
  )
}