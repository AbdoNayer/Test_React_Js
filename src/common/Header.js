import React, {useState, useEffect, useRef} from "react";
import { Container, Row, Col } from 'bootstrap-4-react';
import logo from '../assats/images/logo.png';

export const Header = (props) => {

    return (

        <div className='position-relative'>
            <div className='shadow mb-4'>
                <Container>
                    <div className='text-center p-4'>
                        <img src={logo} alt=""/>
                    </div>
                </Container>
            </div>
            <div className='pt-5 text-center'>
                <h1 className="three-dimensional">welcome to inploy</h1>
                <h6 className='mt-3 mb-3'>Register now and secure your spot on top of your category</h6>
                <div className='flex flexRow flexCenter'>
                    <a href="" className='btnButton btnDefault m-2'>Service Provider</a>
                    <a href="" className='btnButton btnWhite m-2'>Client</a>
                </div>
            </div>
        </div>

    )

};

export default Header;