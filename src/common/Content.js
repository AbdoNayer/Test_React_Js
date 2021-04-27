import React, {useState} from "react";
import { Row, Col } from 'bootstrap-4-react';
import item1 from '../assats/images/00.png';
import item2 from '../assats/images/11.png';
import item3 from '../assats/images/22.png';

import img1 from "../assats/images/a1.png";
import img2 from "../assats/images/a2.png";
import img3 from "../assats/images/a3.png";
import img4 from "../assats/images/a4.png";
import img5 from "../assats/images/a5.png";
import img6 from "../assats/images/a6.png";

export const Content = (props) => {

    const [itemImg, setItemImg]             = useState([
        {
            url     : img5,
        },
        {
            url     : img2,
        },
        {
            url     : img1,
        },
        {
            url     : img4,
        },
        {
            url     : img3,
        },
        {
            url     : img6,
        }
    ]);

    return (

        <div className='position-relative'>

            <div className='fixContent'>
                <Row className='flexRowCenter'>
                    <Col md={4} xs={12}>
                        <div className='boxCon flex flexRow flexCenter'>
                            <img src={item1} alt=""/>
                            <span>Free Commission</span>
                        </div>
                    </Col>
                    <Col md={4} xs={12}>
                        <div className='boxCon flex flexRow flexCenter'>
                            <img src={item2} alt=""/>
                            <span>Free Contact Exchange</span>
                        </div>
                    </Col>
                    <Col md={4} xs={12}>
                        <div className='boxCon flex flexRow flexCenter'>
                            <img src={item3} alt=""/>
                            <span>30+ Services</span>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='mt-4 mb-4 pt-4 sectionLogo'>
                <p className='font-weight-bold colorDefault text-center'>Success stories with 400+ Clients</p>
                <div className='flex flexRow flexCenter mt-4 mb-4'>
                    {
                        itemImg.map(image =>
                            <div className='logoImg'>
                                <img src={image.url}/>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>

    )

};

export default Content;