import React, {useState} from "react";
import { Row, Col, Form } from 'bootstrap-4-react';
import chat from '../assats/images/ch.png';
import { FaChevronLeft, FaChevronDown , FaFacebookF , FaGlobe, FaTwitter , FaInstagram , FaLinkedinIn , FaBehance , FaYoutube, FaVimeoV } from "react-icons/fa";
import {AiOutlineCheck} from "react-icons/ai";
import slide3 from '../assats/images/2.png';

export const Contact = (props) => {



    return (

        <div className='position-relative'>

            <div className='pt-4'>
                <Row>
                    <Col md={4} xs={12}>
                        <div className=''>
                            <h4 className='titleTe pr-0 pl-0'>
                                Contact
                                <br />
                                info@inploy.me
                            </h4>
                            <p>For further assistance with projects or pre registration </p>
                            <p className='font-weight-bold colorMain'>How would like us to contact you ? </p>
                            <div className='mb-4'>
                                <Form.CustomRadio id="customRadio1" name="customRadio">
                                    phone
                                </Form.CustomRadio>
                                <Form.CustomRadio id="customRadio2" name="customRadio">
                                    email
                                </Form.CustomRadio>
                            </div>
                            <form action="" className='flex flexRow'>
                                <div className='inputGroup flex80'>
                                    <input type="text" placeholder='email'/>
                                </div>
                                <div className='text-left flex100'>
                                    <button className='btnButton btnDefault mt-4 mb-4'>Send</button>
                                </div>
                            </form>
                        </div>
                    </Col>
                    <Col md={8} xs={12}>
                        <div className='bgContact'>
                            <div className='flex'>
                                <div className='flex50 mainBox'>
                                    <div className="item itemNa">
                                        <div className='imgItem'>
                                            <img className='imgSlider' src={slide3}/>
                                        </div>
                                        <div className='position-relative'>
                                            <div className='flex flexRow flexCenter tabInfoUser'>
                                                <span className='check flex flexCenter'><AiOutlineCheck/></span>
                                                <div className='imgUser mr-3 ml-3'>
                                                    <img className='imgSlider' src={slide3}/>
                                                </div>
                                                <span className='point flex flexCenter'>5.0</span>
                                            </div>
                                            <div className='infoItem pt-5 pb-3 pr-1 pl-1 text-center'>
                                                <h5 className='colorMain'>Diko M</h5>
                                                <p className='mt-1 mb-1 colorDefault'>E-commerce Developer</p>
                                                <div>
                                                    <span className='colorMain'>Quick View</span>
                                                    <span><FaChevronDown className='colorMain mr-2 ml-2'/></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex50 mainCon'>
                                    <div className='text-center mainContact'>
                                        <img src={chat} alt=""/>
                                        <a href="" className='EM'>
                                            121 - 122 - 122 | Sh3wZa@gmail.com
                                            <FaChevronLeft />
                                        </a>
                                        <div className='social mt-2 mb-2'>
                                            <ul>
                                                <li>
                                                    <a href="" target='_blank'>
                                                        <FaFacebookF />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="" target='_blank'>
                                                        <FaGlobe />
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
                                                <li>
                                                    <a href="" target='_blank'>
                                                        <FaBehance />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="" target='_blank'>
                                                        <FaYoutube />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="" target='_blank'>
                                                        <FaVimeoV />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>

    )

};

export default Contact;