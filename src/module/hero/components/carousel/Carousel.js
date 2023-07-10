import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import TestImage from '../../../../assets/img/img_photo.svg'
import TestImage1 from '../../../../assets/img/Rate.png'
import TestImage2 from '../../../../assets/img/img_photo1.svg'
import TestImage3 from '../../../../assets/img/img_photo2.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {  Col, Container, Row, Button } from "reactstrap";

const Carousel = () => {
  const swiperRef = useRef();
    return (
    <div>
      <div 
        className='carousel-card'
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          speed= {500}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => {swiperRef.current=swiper;}}
        >
          <SwiperSlide>
            <Container className='card-test'>
              <Row className='carousels-card-item' xs='1' xl="2"> 
                <Col className='carousel-img'>
                  <img src={TestImage} alt='gambar profil'/>
                </Col>
                <Col className='carousel-text'>
                  <Row className='img-rate'>
                    <img src={TestImage1} alt='rate'/>
                  </Row>
                  <h5>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </h5>
                  <p>
                  John Dee 32, Bromo
                  </p>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
          <Container className='card-test'>
              <Row className='carousels-card-item'xs='1' > 
                <Col className='carousel-img'>
                  <img src={TestImage2} alt='gambar profil'/>
                </Col>
                <Col className='carousel-text'>
                  <Row className='img-rate'>
                    <img src={TestImage1} alt='rate'/>
                  </Row>
                  <h5>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </h5>
                  <p>
                  John Dee 32, Bromo
                  </p>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
          <SwiperSlide>
          <Container className='card-test'>
              <Row className='carousels-card-item'xs='1' > 
                <Col className='carousel-img'>
                  <img src={TestImage3} alt='gambar profil'/>
                </Col>
                <Col className='carousel-text'>
                  <Row className='img-rate'>
                    <img src={TestImage1} alt='rate'/>
                  </Row>
                  <h5>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </h5>
                  <p>
                  John Dee 32, Bromo
                  </p>
                </Col>
              </Row>
            </Container>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='button-outer' >
        <Button onClick={() => swiperRef.current.slidePrev()} className='button-test' outline color="success"><p>{'<'}</p></Button>
        <Button onClick={() => swiperRef.current.slideNext()} className='button-test' outline color="success"><p>{'>'}</p></Button>
      </div>
    </div> 
    );
};

export default Carousel