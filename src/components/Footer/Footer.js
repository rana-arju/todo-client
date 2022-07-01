import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
    <footer className="footer footer-center p-10 bg-primary text-primary-content">
    <div>
        <p className="font-bold">
        Rana Arju <br />Providing reliable todo app
        </p> 
        <p>Copyright © 2022 - All right reserved</p>
    </div> 
    <div>
        <div className="grid grid-flow-col gap-4">
        <a href='https://www.linkedin.com/in/ranaarju' className='text-2xl'><FaLinkedinIn /></a> 
        <a href='https://www.youtube.com/techDictionary' className='text-2xl'><FaYoutube /></a> 
        <a href='https://www.facebook.com/ranaarju1' className='text-2xl'><FaFacebookF /></a>
        </div>
    </div>
    </footer>
    );
};

export default Footer;