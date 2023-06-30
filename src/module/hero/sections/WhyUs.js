import React from 'react';
import { Col, Container, Row } from "reactstrap";
import IconComplete from '../../../assets/img/icon_complete.svg'
import IconPrice from '../../../assets/img/icon_price.png'
import IconHrs from '../../../assets/img/icon_24hrs.png'
import IconProffesional from '../../../assets/img/icon_professional.png'

export default function WhyUs() {
    return(
        <Container fluid>
            <Col className='container-why'>
                <Col className='why-text'>
                    <h1>Why Us?</h1>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </Col>
                <Row className='container-content'>
                    <Col className='why-content' xs="12" xl="3">
                        <img src={IconComplete} />
                        <h5>Mobil Lengkap</h5>
                        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </Col>
                    <Col className='why-content'xs="12" xl="3">
                        <img src={IconPrice} />
                        <h5>Harga Murah</h5>
                        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </Col>
                    <Col className='why-content'xs="12" xl="3">
                        <img src={IconHrs} />
                        <h5>Layanan 24 Jam</h5>
                        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </Col>
                    <Col className='why-content' xs="12" xl="3">
                        <img src={IconProffesional} />
                        <h5>Sopir Profesional</h5>
                        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </Col>
                </Row>
            </Col>
        </Container>
    )
}