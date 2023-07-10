import { React, useRef } from 'react';
import {  Container, Button } from "reactstrap";


const Buttoncomp = () => {
  const swiperRef = useRef();
  return (
    <Container>
      <Button onClick={() => swiperRef.current.slidePrev()}>prev</Button>
      <Button onClick={() => swiperRef.current.slideNext()}>next</Button>
    </Container>
  );
};

export default Buttoncomp