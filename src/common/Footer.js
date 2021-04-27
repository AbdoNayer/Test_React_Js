import React, {useState} from "react";
import {Row, Col, Container} from 'bootstrap-4-react';
import logo from '../assats/images/logo.png';
import {
    FaBehance,
    FaFacebookF,
    FaGlobe,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
    FaVimeoV,
    FaYoutube
} from "react-icons/fa";


export const Footer = (props) => {



    return (

        <div className=''>
            <Container>
                <div className='flex flexSpace'>
                    <div className=''>
                        <img src={logo} alt=""/>
                    </div>
                    <div className='social mt-2 mb-2'>
                        <ul>
                            <li>
                                <a href="" target='_blank'>
                                    <FaFacebookF />
                                </a>
                            </li>
                            <li>
                                <a href="" target='_blank'>
                                    <FaTwitter />
                                </a>
                            </li>
                            <li>
                                <a href="" target='_blank'>
                                    <FaInstagram />
                                </a>
                            </li>
                            <li>
                                <a href="" target='_blank'>
                                    <FaLinkedinIn />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
            <hr />
            <Container>
                <div className='flex flexSpace w-100'>
                    <div className='linkFooter'>
                        <ul>
                            <li>
                                <a href="" className='text-uppercase'>SUPPORT</a>
                            </li>
                            <li>
                                <a href="" className='text-uppercase'>UNDERSTAND</a>
                            </li>
                            <li>
                                <a href="" className='text-uppercase'>TERMS & REGULATIONS</a>
                            </li>
                        </ul>
                    </div>
                    <p>Inploy 2020. All rights reserved</p>
                </div>
            </Container>
        </div>

    )

};

export default Footer;