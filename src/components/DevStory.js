import React from 'react';
import { Link } from 'react-router-dom';
import '../css/DevStory.css';

const DevStory = () => {
    return (
        <div className='devstory-container'>
            <div className='devstory-section1'>
                <div className='devstory-section1-headline-container'>
                    <h1 className='devstory-section1-headline'>개발자 스토리</h1>
                    <div className='devstory-section1-headline-link'>
                        <Link to={'/'}>Home</Link>
                        <div className='devstory-section1-headline-link-bar'>▶</div>
                        <Link to={'/devstory'}>About</Link>
                        <div className='devstory-section1-headline-link-bar'>▶</div>
                        <Link to={'/devstory'}>개발자 스토리</Link>
                    </div>
                </div>
                <div className='devstory-section1-context-container'>
                    <div className="devstory-section1-image1" ></div>
                    <div className='devstory-section1-context'>차별화된 크리에이티브를 가진 여러 고객들과 즐거움과 편의성이 함께하는 웹 서비스, 앱 서비스를
                        전 세계에 퍼블리싱합니다.<br />
                        저는 지속적인 도전과 새로운 기술로 서비스의 편의성을 혁신하고, 더 많은 사용자들에게 사랑받을 수 있도록 플랫폼과 서비스를 확장합니다.<br />
                        저는 열정과 의지를 지닌 동료들과 함께 성장하며, 글로벌 시장에서 인정받는 서비스를 목표에 두고 있습니다.</div>
                </div>
            </div>
            <div className='devstory-section2'>
                <div className='devstory-section2-headline'>Vision</div>
                <div className='devstory-section2-context-container'>
                    <div className='devstory-section2-context-container-container'>
                        <div className='devstory-section2-context-title'>WHY</div>
                        <div className='devstory-section2-context-context'>웹 및 앱 서비스는 현대인에게 뗄 수 없는 요소입니다.</div>
                    </div>
                    <div className='devstory-section2-context-container-container'>
                        <div className='devstory-section2-context-title'>HOW</div>
                        <div className='devstory-section2-context-context'>독창성, 끊임없는 도전정신, 기술력을 바탕으로</div>
                    </div>
                    <div className='devstory-section2-context-container-container'>
                        <div className='devstory-section2-context-title'>WHAT</div>
                        <div className='devstory-section2-context-context'>독보적인 창작의 결과물을 만들고 확장하고 재창조함으로써
                            편의성이 우선적인 사용자 경험 중심의 서비스를 개발해 나아갈 것입니다.</div>
                    </div>
                </div>
            </div>
            <div className='devstory-section3'>
                <div className='devstory-section3-headline'>Values</div>
                <div className='devstory-section3-context-container'>
                    <div className='devstory-section3-context-box'>
                        <div className='devstory-section3-context-box-top'>WILL : Thirst For Creativity</div>
                        <div className='devstory-section3-context-box-title'>BE ORIGINAL,<br />
                            STAY CREATIVE</div>
                        <div className='devstory-section3-context-box-context'>독보적인<br />정체성의 지속적인 추구</div>
                        <div className='devstory-section3-context-hover-btn'>click</div>
                    </div>
                    <div className='devstory-section3-context-box'>
                        <div className='devstory-section3-context-box-top'>WAY : Growth Through Challenges</div>
                        <div className='devstory-section3-context-box-title'>BE BOLD,<br />
                        LEARN AND WIN</div>
                        <div className='devstory-section3-context-box-context'>문제해결을 위한<br />과감한 시도</div>
                        <div className='devstory-section3-context-hover-btn'>click</div>
                    </div>
                    <div className='devstory-section3-context-box'>
                        <div className='devstory-section3-context-box-top'>SPIRIT : Aligned On One Vision</div>
                        <div className='devstory-section3-context-box-title'>ONE TEAM,<br />
                        ONE DREAM</div>
                        <div className='devstory-section3-context-box-context'>공동의 목표를 향한<br />팀워크</div>
                        <div className='devstory-section3-context-hover-btn'>click</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DevStory;
