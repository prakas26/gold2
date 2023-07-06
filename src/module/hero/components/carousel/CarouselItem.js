import React from 'react';

export default function CarouselItem ({ item }){
  return (
    <section className='section-carousel'>
      <img className='carousel-img' src={item.icon}/>
      <p className='carousel-item-text'>{item.description}</p>
    </section>
  )
}

