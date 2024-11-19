import React, { useState, useEffect,  } from 'react';
import '../css/Main.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLightbulb, faPaintBrush, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';


const Main = () => {

    const [width, setWidth] = useState(100);   

    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 지속 시간 설정 (선택 사항)
            once: false, // 애니메이션이 한 번만 실행되도록 설정 (선택 사항)
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

            // 스크롤에 따라 width 변경
            let newWidth = 100 - (scrollPosition / maxScroll) * 240;
            newWidth = Math.max(0, newWidth);
            setWidth(newWidth);

        };

        // 스크롤 이벤트 등록
        window.addEventListener('scroll', handleScroll);

        return () => {
            // 이벤트 제거
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    useEffect(() => {
        const targetNumber = 50000;
        const duration = 2000; // 애니메이션 시간 (밀리초)
        const frameRate = 60; // 초당 프레임 수
        const totalFrames = Math.round((duration / 1000) * frameRate);
        const counter = document.getElementById('count-up-number');

        let currentNumber = 0;
        const increment = targetNumber / totalFrames;

        // 목표 색상 (134, 196, 165)
        const targetColor = { r: 134, g: 196, b: 165 };
        const startColor = { r: 255, g: 255, b: 255 }; // 초기 색상 (흰색)

        const updateCounter = () => {
            currentNumber += increment;

            if (counter) {
                // 숫자 표시
                counter.textContent = Math.floor(currentNumber).toLocaleString();

                // 색상 변화 계산
                const progress = Math.min(currentNumber / targetNumber, 1); // 0에서 1 사이 값
                const currentColor = {
                    r: Math.floor(startColor.r + (targetColor.r - startColor.r) * progress),
                    g: Math.floor(startColor.g + (targetColor.g - startColor.g) * progress),
                    b: Math.floor(startColor.b + (targetColor.b - startColor.b) * progress),
                };

                // 색상 적용
                counter.style.color = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
            }

            if (currentNumber < targetNumber) {
                requestAnimationFrame(updateCounter);
            } else {
                if (counter) {
                    counter.textContent = targetNumber.toLocaleString();
                    counter.style.color = `rgb(${targetColor.r}, ${targetColor.g}, ${targetColor.b})`; // 최종 색상 고정
                }
            }
        };

        requestAnimationFrame(updateCounter);
    }, []);

    return (
        <div className="main-container">
            <div className="main-section1">
                <video
                    className="background-video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/images/codevideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="main-section1-title">
                    합리적인 가격으로<br />고퀄리티 웹, 앱 개발<br />
                </div>
                <div className='main-section1-title-content'>
                    <span id="count-up-number"> 0</span> 원부터 만나는 개발,<br /> 아이디어를 실현하세요 !
                </div>
                <div className='main-section1-submit-btn'>
                    프로젝트 문의
                </div>
            </div>
            <div className='main-section2'>
                <div className='main-section2-title' data-aos="fade-up">
                    고객
                </div>
                <div className='main-section2-title-content' data-aos="fade-up" data-aos-delay="100">
                    이런 고객님과 함께해요
                </div>
                <div className='main-section2-content' data-aos="fade-up" data-aos-delay="100">
                    <div className='main-section2-content1' >
                        아이디어로 서비스를 <br />만들고 싶지만,<br />부담되는 개인
                        <img src="../../images/person_icon.png" alt="check" className="section2-icon" />
                    </div>
                    <div className='main-section2-content2'>
                        간단한 서비스로 <br />빠르게 시장 반응을 <br />얻고 싶은 초기 창업자
                        <img src="../../images/startup_icon.png" alt="check" className="section2-icon" />
                    </div>
                    <div className='main-section2-content3'>
                        웹 사이트 및 앱의<br />유지보수 및 기능추가를<br /> 원하는 기존 창업자
                        <img src="../../images/company_icon.png" alt="check" className="section2-icon" />
                    </div>
                </div>
            </div>
            <div className='main-section3'>
                <div className='main-section3-content-left' data-aos="fade-up" data-aos-delay="100">
                    <div className='main-section3-title' data-aos="fade-up">
                        의뢰
                    </div>
                    <div className='main-section3-content' data-aos="fade-up" data-aos-delay="200">
                        <div className='main-section3-content1'>
                            중대형 프로젝트만 ? NO <br />
                            초간단 개인프로젝트 ? YES

                        </div>
                        <div class="iphone" >
                            <div class="iphone-btn1"></div>
                            <div class="iphone-btn2"></div>
                            <div class="iphone-btn3"></div>
                            <div class="iphone-btn4"></div>
                            <div class="iphone-card-int">
                            </div>
                            <div class="iphone-top">
                                <div class="iphone-camera">
                                    <div class="iphone-int"></div>
                                </div>
                                <div class="iphone-speaker"></div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='main-section3-content-right' data-aos="fade-up" data-aos-delay="200">
                    <div class="iphone2" data-aos="fade-up" data-aos-delay="200">
                        <div class="iphone-btn1"></div>
                        <div class="iphone-btn2"></div>
                        <div class="iphone-btn3"></div>
                        <div class="iphone-btn4"></div>
                        <div class="iphone-card-int2">
                        </div>
                        <div class="iphone-top">
                            <div class="iphone-camera">
                                <div class="iphone-int"></div>
                            </div>
                            <div class="iphone-speaker"></div>
                        </div>
                    </div>
                    <div className='main-section3-content2' data-aos="fade-up" data-aos-delay="100">
                        단순한 서비스부터 복잡한 서비스까지, <br />고객의 요구에 맞는 맞춤형 개발을 약속드립니다.
                        <div className='main-section3-btn' data-aos="fade-up" data-aos-delay="100">
                            포트폴리오 보기
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-section4">
                <div
                    className="main-section4-cover"
                    style={{ width: `${width}%` }} // 스크롤에 따라 변경되는 너비
                >
                </div>
                <div className="main-section4-title" data-aos="fade-up">찾기 힘들었던<br/> 맞춤형 개발사</div>
            </div>
            <div className='main-section5'>
                <div className='main-section5-title' >잠깐의 의뢰가 아닌,<br/>서비스와 함께 성장하는 마음으로</div>
                <img src="../../images/123.png" alt="img" className='main-section5-title-img' data-aos="fade-up" data-aos-delay="100"/>
                <div className='main-section5-content1-container' data-aos="fade-up"  >
                <div className='main-section5-content1'>기획부터 배포까지<br/></div>
                <div className='main-section5-content1-1'>JM과 한번에</div>
                <div className='main-section5-content1-2'>아이디어만 있어도 괜찮아요.<br/> A부터 Z까지 맘편히 맡겨주세요</div>
                </div>
            </div>
            <div className="main-section6">
      <div className="main-section6-content-container">
        <div className="main-section6-process">
          <div className="main-section6-process-step"  data-aos="fade-up" data-aos-delay="100">
            <FontAwesomeIcon icon={faLightbulb} className="main-section6-process-icon" />
            <div className="main-section6-process-title">기획</div>
          </div>
          <div className="main-section6-process-step"  data-aos="fade-up" data-aos-delay="200">
            <FontAwesomeIcon icon={faPaintBrush} className="main-section6-process-icon" />
            <div className="main-section6-process-title">디자인</div>
          </div>
          <div className="main-section6-process-step"  data-aos="fade-up" data-aos-delay="300">
            <FontAwesomeIcon icon={faCode} className="main-section6-process-icon" />
            <div className="main-section6-process-title">개발</div>
          </div>
          <div className="main-section6-process-step"  data-aos="fade-up" data-aos-delay="400">
            <FontAwesomeIcon icon={faRocket} className="main-section6-process-icon" />
            <div className="main-section6-process-title">배포</div>
          </div>
        </div>
        <div className='main-section6-ending-container'>
        <div className='main-section6-ending-title'>최저 <span id="count-up-number"> 0</span>원부터 시작하는 개발</div>
        <div className='main-section6-ending-content'>지금 문의하세요</div>
        <div className='main-section1-submit-btn'>프로젝트 문의</div>
        </div>
      </div>
    </div>
        </div>
    );
}

export default Main;