import React, { useState } from 'react';
import { Col, 
    Row,
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from "reactstrap";

export default function AccordionSection (){
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };

    return (
        <Row className='faq-container' xs="1" >
            <Col className='text-container'>
                <h5>
                    Frequently Asked Question
                </h5>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
            </Col>
            <Col className='accordion-container'>
                <Accordion open={open} toggle={toggle} className='accordion-container-inner'>
                    <AccordionItem className='accordion-outer'>
                        <AccordionHeader targetId="1" className='accordion-container-text'><p>Apa saja syarat yang dibutuhkan?</p></AccordionHeader>
                        <AccordionBody accordionId="1">
                            <strong>This is the first item&#39;s accordion body.</strong>
                            You can modify any of this with custom CSS or overriding our default
                            variables. It&#39;s also worth noting that just about any HTML can
                            go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </AccordionBody>
                        </AccordionItem>
                    <AccordionItem className='accordion-outer'>
                        <AccordionHeader targetId="2" className='accordion-container-text'><p>Berapa hari minimal sewa mobil lepas kunci?</p></AccordionHeader>
                        <AccordionBody accordionId="2">
                            <strong>This is the second item&#39;s accordion body.</strong>
                            You can modify any of this with custom CSS or overriding our default
                            variables. It&#39;s also worth noting that just about any HTML can
                            go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className='accordion-outer'>
                        <AccordionHeader targetId="3" className='accordion-container-text'><p>Berapa hari sebelumnya sabaiknya booking sewa mobil?</p></AccordionHeader>
                        <AccordionBody accordionId="3">
                            <strong>This is the third item&#39;s accordion body.</strong>
                            You can modify any of this with custom CSS or overriding our default
                            variables. It&#39;s also worth noting that just about any HTML can
                            go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className='accordion-outer'>
                        <AccordionHeader targetId="4" className='accordion-container-text'><p>Apakah Ada biaya antar-jemput?</p></AccordionHeader>
                        <AccordionBody accordionId="4">
                            <strong>This is the third item&#39;s accordion body.</strong>
                            You can modify any of this with custom CSS or overriding our default
                            variables. It&#39;s also worth noting that just about any HTML can
                            go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </AccordionBody>
                    </AccordionItem>
                    <AccordionItem className='accordion-outer'>
                        <AccordionHeader targetId="5" className='accordion-container-text'><p>Bagaimana jika terjadi kecelakaan</p></AccordionHeader>
                        <AccordionBody accordionId="5">
                            <strong>This is the third item&#39;s accordion body.</strong>
                            You can modify any of this with custom CSS or overriding our default
                            variables. It&#39;s also worth noting that just about any HTML can
                            go within the <code>.accordion-body</code>, though the transition
                            does limit overflow.
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
            </Col>
        </Row>
    )
}