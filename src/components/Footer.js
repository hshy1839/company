import React from 'react';
import '../css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='footer-top'>
                <div className='footer-top-menu'>
                    <Link to="" className="footer-menu-item">About</Link>
                    <span className='footer-menu-item-bar'>|</span>
                    <Link to="" className="footer-menu-item">Contact</Link>
                    <span className='footer-menu-item-bar'>|</span>
                    <Link to="" className="footer-menu-item">News</Link>
                </div>
                <div className="card">
                    <a className="social-link1" href='https://www.instagram.com/seokhyung98/' target='_blank'>
                        <svg viewBox="0 0 16 16" className="bi bi-instagram" fill="currentColor" height="12" width="12" xmlns="http://www.w3.org/2000/svg" color="white">
                            <path fill="white" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
                        </svg>
                    </a>
                    <a className="social-link2" href="mailto:hongjeongmin1839@google.com" target="_blank">
                        <svg viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor" height="12" width="12" xmlns="http://www.w3.org/2000/svg" color="white">
                            <path fill="white" d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm14-1H2a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm1 2.383l-5.803 3.482L15 12.615V5.383zM1 5.383v7.232l5.803-3.75L1 5.383zm6.207 4.106L1.212 13H14.79l-6.997-3.511z"></path>
                        </svg>
                    </a>
                    <a className="social-link3" href='https://github.com/hshy1839' target="_blank">
                        <svg viewBox="0 0 16 16" className="bi bi-github" fill="currentColor" height="12" width="12" xmlns="http://www.w3.org/2000/svg" color="white">
                            <path fill="white" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.292 6.532 5.47 7.593.4.074.55-.174.55-.388 0-.19-.007-.693-.01-1.36-2.226.483-2.695-1.073-2.695-1.073-.364-.925-.89-1.172-.89-1.172-.726-.497.055-.487.055-.487.803.056 1.226.824 1.226.824.714 1.222 1.872.87 2.33.665.072-.517.28-.872.507-1.073-1.776-.202-3.644-.888-3.644-3.95 0-.872.31-1.586.823-2.145-.082-.202-.357-1.018.078-2.12 0 0 .672-.215 2.2.82.638-.177 1.322-.265 2.002-.268.68.003 1.364.09 2.002.268 1.527-1.035 2.198-.82 2.198-.82.436 1.102.162 1.918.08 2.12.513.559.822 1.273.822 2.145 0 3.068-1.87 3.746-3.652 3.943.287.25.543.738.543 1.488 0 1.074-.01 1.94-.01 2.203 0 .216.15.466.554.387C13.708 14.53 16 11.54 16 8c0-4.42-3.58-8-8-8z"></path>
                        
                        </svg>
                    </a>
                </div>
            </div>
            <div className='footer-body-container'>
                <div className='footer-body-left'>
                <div className='footer-body-logo'>JM</div>
                <div className='footer-body-copyright'>© 2024 JM, Inc. All rights reserved.</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
