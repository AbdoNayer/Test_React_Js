import React, {useState, useEffect, useRef} from "react";
import { Container, Row, Col } from 'bootstrap-4-react';

export const FormRegister = (props) => {

    return (

        <div className='position-relative pr-3 pl-3'>
            <h4 className='titleTe'>Register Now</h4>
            <form action="" className='flex flexRow'>
                <div className='inputGroup flex50 p-2'>
                    <input type="text" placeholder='Full Name'/>
                </div>
                <div className='inputGroup flex50 p-2'>
                    <input type="text" placeholder='Job Title'/>
                </div>
                <div className='inputGroup flex50 p-2'>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className='inputGroup flex50 p-2'>
                    <input type="tel" placeholder='Number'/>
                </div>
                <div className='inputGroup flex50 p-2'>
                    <div className='selector position-relative'>
                        <select className="custom-select">
                            <option selected>Category</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
                    </div>
                </div>
                <div className='text-left flex100 p-2'>
                    <button className='btnButton btnDefault m-2'>Register Now</button>
                </div>
            </form>
        </div>

    )

};

export default FormRegister;