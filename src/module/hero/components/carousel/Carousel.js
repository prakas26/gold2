import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import TestImage from '../../../../assets/img/img_photo.svg'
import TestImage1 from '../../../../assets/img/Rate.png'
import TestImage2 from '../../../../assets/img/img_photo1.svg'
import TestImage3 from '../../../../assets/img/img_photo2.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {  Col, Container, Row } from "reactstrap";

const Carousel = () => {
    // const [activeIndex, setActiveIndex] = useState(0);

    return (
      <div 
        className='carousel-card'
      >
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Container className='card'>
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
          <Container className='card'>
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
          <Container className='card'>
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
    );
};

export default Carousel