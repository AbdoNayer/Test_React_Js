import React, {useState, useEffect, useRef} from "react";
import { Container, Row, Col } from 'bootstrap-4-react';
import slide1 from '../assats/images/0.png';
import slide2 from '../assats/images/1.png';
import slide3 from '../assats/images/2.png';
import { AiOutlineCheck } from "react-icons/ai";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {FaChevronDown} from "react-icons/fa";

export const SliderHome = (props) => {

    const [options, setOptions]             = useState(
        {
            loop                : false,
            margin              : 10,
            center              : true,
            autoplay            : false,
            autoplayTimeout     : 500,
            smartSpeed          : 500,
            dragEndSpeed        : 500,
            pagination          : false,
            nav                 : false,
            navText:[
                "<div class='navBtn prevSlide'></div>",
                "<div class='navBtn nextSlide'></div>"
            ],
            responsive          : {
                0       : {
                    items   : 1,
                },
                700     : {
                    items   : 2,
                },
                1000    : {
                    items   : 3,
                },
            },
        },
    );
    const [sliders, setSliders]             = useState([
        {
            url     : slide1,
            user    : slide1,
            point   : '5.0',
            name    : 'Diko M',
            info    : 'Photographer | Videographer Graphic Designer',
            view    : 'Quick View'
        },
        {
            url     : slide2,
            user    : slide2,
            point   : '5.0',
            name    : 'Mohamed ElQadi',
            info    : 'E-commerce Developer',
            view    : 'Quick View'
        },
        {
            url     : slide3,
            user    : slide3,
            point   : '5.0',
            name    : 'Cairo Walls',
            info    : 'Architect | Muralist',
            view    : 'Quick View'
        },
    ]);

    return (

        <div className='position-relative'>
            <div className='slider'>
                <p className='textPar'>2000+ Service Providers on board</p>
                <OwlCarousel className="owl-theme"{...options}>
                    {
                        sliders.map(slide =>
                            <div className="item itemNa">
                                <div className='imgItem'>
                                    <img className='imgSlider' src={slide.url}/>
                                </div>
                                <div className='position-relative'>
                                    <div className='flex flexRow flexCenter tabInfoUser'>
                                        <span className='check flex flexCenter'><AiOutlineCheck/></span>
                                        <div className='imgUser mr-3 ml-3'>
                                            <img className='imgSlider' src={slide.user}/>
                                        </div>
                                        <span className='point flex flexCenter'>{slide.point}</span>
                                    </div>
                                    <div className='infoItem pt-5 pb-3 pr-1 pl-1 text-center'>
                                        <h5 className='colorMain'>{slide.name}</h5>
                                        <p className='mt-1 mb-1 colorDefault'>{slide.info}</p>
                                        <div>
                                            <span className='colorMain'>{slide.view}</span>
                                            <span><FaChevronDown className='colorMain mr-2 ml-2'/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </OwlCarousel>
            </div>
        </div>

    )

};

export default SliderHome;