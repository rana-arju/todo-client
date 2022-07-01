import React from 'react';
import { FaFacebookF, FaYoutube, FaLinkedinIn} from 'react-icons/fa';

const Footer = () => {
    return (
    <footer class="footer footer-center p-10 bg-primary text-primary-content">
    <div>
        <p class="font-bold">
        Rana Arju <br />Providing reliable todo app
        </p> 
        <p>Copyright © 2022 - All right reserved</p>
    </div> 
    <div>
        <div class="grid grid-flow-col gap-4">
        <a href='https://www.linkedin.com/in/ranaarju' className='text-2xl'><FaLinkedinIn /></a> 
        <a href='https://www.youtube.com/techDictionary' className='text-2xl'><FaYoutube /></a> 
        <a href='https://www.facebook.com/ranaarju1' className='text-2xl'><FaFacebookF /></a>
        </div>
    </div>
    </footer>
    );
};

export default Footer;