import React, { useState, useEffect, } from 'react';
import { Link } from 'react-router-dom';
import '../css/Contact.css';

const Contact = () => {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (button) => {
        setActiveButton(button); // 클릭된 버튼의 이름을 상태로 저장
    };

    useEffect(() => {
        // 페이지가 로드될 때 스크롤을 맨 위로 이동
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='contact-container'>
            <div className='contact-section1'>
                <div className='contact-section1-headline-container'>
                    <h1 className='contact-section1-headline'>Contact</h1>
                    <div className='contact-section1-headline-link'>
                        <Link to={'/'}>Home</Link>
                        <div className='contact-section1-headline-link-bar'>▶</div>
                        <Link to={'/contact'}>Contact</Link>
                    </div>
                </div>
                <div className='contact-section1-context-container'>
                    <div className="contact-section1-image1" ></div>
                </div>
            </div>
            <div className='contact-section2'>
                <div className='contact-section2-title'>JMsoft</div>
                <div className='contact-section2-visit-container'>
                    <div className='contact-section2-visit-title'>방문 경로</div>
                    <div className="contact-section2-visit-btn-container">
                        {["인스타그램", "네이버", "구글", "유튜브", "지인 추천", "기타"].map((name) => (
                            <button
                                key={name}
                                className={`contact-section2-visit-btn ${activeButton === name ? "active" : ""}`}
                                onClick={() => handleButtonClick(name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
