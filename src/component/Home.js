import React, {useState} from "react";
import { Container, Row, Col } from 'bootstrap-4-react';
import ScrollAnimation from 'react-animate-on-scroll';

import Loader from '../common/Loading';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Form from '../common/FormRegister';
import Slider from '../common/SliderHome';
import Content from '../common/Content';
import Contact from '../common/Contact';

export const Home = (props) => {

    const [isLoaded, setIsLoaded]           = useState(true);

    function renderLoader(){
        if (isLoaded){
            return(
                <Loader/>
            );
        }
    }

    return (

        <div className='upPage position-relative'>

            { renderLoader() }

            <Header/>

            <div className='mb-5 pt-5 sectionSlide'>
                <Container>
                    <Row className='flexRowCenter'>
                        <Col md={6} xs={12}>
                            <Slider />
                        </Col>
                        <Col md={6} xs={12}>
                            <Form />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className='bgContent position-relative'>
                <Container>
                    <Content />
                </Container>
            </div>

            <div className='position-relative pt-5 pb-5'>
                <Container>
                    <Contact />
                </Container>
            </div>

            <div className='bgContent footer position-relative pt-4 pb-4'>
                <Footer />
            </div>

        </div>

    )

};

export default Home;