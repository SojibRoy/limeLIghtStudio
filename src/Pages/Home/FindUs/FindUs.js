import React from 'react';
import { FaFacebook,FaTwitch,FaTwitter,FaWhatsapp, FaInstagram } from "react-icons/fa";


const FindUs = () => {
    return (
        <div className='my-4 text-center'>
            <h1 >Find Us</h1>
            <div className='fs-1 '>
                <FaFacebook className='mx-4'></FaFacebook>
                <FaTwitch className='mx-4'></FaTwitch>
                <FaTwitter className='mx-4'></FaTwitter>
                <FaWhatsapp className='mx-4'></FaWhatsapp>
                <FaInstagram className='mx-4'></FaInstagram>
            </div>
        </div>
    );
};


export default FindUs;