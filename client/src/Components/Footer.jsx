import React from 'react';
import logo from '../Jain Jalebi Logo.png';
import { TiLocation } from 'react-icons/ti';
import { BsTelephoneFill } from 'react-icons/bs';
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className='footer flex p-2 smm:flex-wrap smm:flex-col smm:space-y-2'>
                <div className='footer-timings w-1/3 smm:w-full flex flex-col justify-center items-center space-y-4'>
                    <div className='image h-12 smm:h-8'>
                        <img src={logo} className='w-40 h-10 rounded-md' />
                    </div>
                    <div className='times flex space-x-4 smm:space-x-1 h-[20vh] smm:h-auto vsmm:text-sm'>
                        <ul className='weeks font-semibold space-y-2 p-0'>
                            <li>Weekdays :</li>
                            <li>Weekends :</li>
                        </ul>
                        <ul className='timing space-y-2 p-0'>
                            <li>07:00 A.M. - 07:00 P.M.</li>
                            <li>07:00 A.M. - 08:00 P.M.</li>
                        </ul>
                    </div>
                </div>
                <div className='contacts w-1/3 smm:w-full flex flex-col items-center space-y-4 mb-4'>
                    <h2 className='uppercase text-xl font-bold text-center h-12 smm:h-8'>Contacts</h2>
                    <div className='flex flex-col h-[20vh] smm:h-auto smm:text-sm space-y-2'>
                        <div className='location flex space-x-2 items-center'>
                            <TiLocation />
                            <h6 className='smm:text-sm'>Jain Jalebi Near Head Post Office, Sadar Bazar, Gurugram, Haryana 122001</h6>

                        </div>
                        <div className='location flex space-x-2 items-center'>
                            <TiLocation />
                            <h6 className='smm:text-sm'>Jain Jalebi Near Marumal School, Sadar Bazar, Roshan Pura, Gurugram, Haryana 122001</h6>

                        </div>
                        <div className='contact-number flex items-center space-x-2'>
                            <BsTelephoneFill />
                            <h6 className='smm:text-sm'>+91-9818788585, +91-9873361488</h6>
                        </div>
                    </div>
                </div>
                <div className='help-section w-1/3 smm:w-full flex flex-col items-center space-y-4 smm:text-sm'>
                    <h2 className='uppercase text-xl font-bold text-center h-12 smm:h-8'>Help</h2>
                    <ul className='flex flex-col items-center h-[20vh] smm:h-auto cursor-pointer space-y-2 p-0'>

                        <Link to='/faq'><li>FAQ</li></Link>

                        <li>My Profile</li>
                    </ul>
                </div>
            </div>
            <div className='copyrights bg-orange-500 flex justify-center items-center h-14 mt-2'>
                <h5 className='font-semiold text-white smm:text-sm'>&copy; 2032 All Rights Reserved By JAIN JALEBI</h5>
            </div>
        </>
    )
}

export default Footer