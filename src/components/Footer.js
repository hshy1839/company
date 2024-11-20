import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-body-container'>
                <div className='footer-body-container-context'>
                <div className='footer-body-logo'>JMsoft</div>
                </div>
                <div className='footer-body-container-context1'>
                    <div className='footer-body-company'>대표 홍정민</div>
                    <div className='footer-body-company'>사업자 등록 번호  118-73-00697</div>
                    <div className='footer-body-company'>이메일  hongjeongmin1839@gmail.com</div>
                    <div className='footer-body-company'>© 2024 NeoTron, Inc. All rights reserved.</div>
                </div>
                </div>
        </footer>
    );
}

export default Footer;
