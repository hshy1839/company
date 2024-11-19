import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Awards.css';

const Awards = () => {
    return (
        <div className='awards-container'> 
            <div className='awards-section1'>
                <div className='awards-section1-headline-container'>
                    <h1 className='awards-section1-headline'>Awards</h1>
                    <div className='awards-section1-headline-link'>
                        <Link to={'/'}>Home</Link>
                        <div className='awards-section1-headline-link-bar'>▶</div>
                        <Link to={'/devstory'}>About</Link>
                        <div className='awards-section1-headline-link-bar'>▶</div>
                        <Link to={'/awards'}>Awards</Link>
                    </div>
                </div>
                <div className='awards-section1-context-container'>
                    <div className="awards-section1-image1" ></div>
                    <div className='awards-section1-context'>저는 SW 분야에서 다양한 상을 수상하며 꾸준한 성장을 이뤄왔습니다.
                    아래의 성과들은 저의 능력과 노력을 인정받은 결과이며, 앞으로도 지속적인 발전을 위해 끊임없이 노력할 것입니다.<br />
                    저의 성과는 단순한 결과물에 그치지 않고, 앞으로 더 많은 도전과 성취를 이뤄나가기 위한 밑거름이 될 것입니다.</div>
                </div>
                <div className='awards-list-container'>
                <div className='awards-list-container-container'>
                        <div className='awards-year'>2023</div>
                        <div className='awards-list-bar'></div>
                        <div className='awards-context-container'>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2023.08</div>
                            <div className='awards-context'>마음 AI 해커톤 대상</div>
                        </div>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2023.11</div>
                            <div className='awards-context'>SW 경진대회 대상</div>
                        </div>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2023.11</div>
                            <div className='awards-context'>한국정보통신보안윤리학회 <br/> 공모전 장려상 </div>
                        </div>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2023.12</div>
                            <div className='awards-context'>ICT 경진대회(학술제) 최우수상</div>
                        </div>
                        </div>
                    </div>
                    <div className='awards-list-container-container'>
                        <div className='awards-year'>2024</div>
                        <div className='awards-list-bar'></div>
                        <div className='awards-context-container'>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2024.05</div>
                            <div className='awards-context'>SW 경진대회 대상</div>
                        </div>
                        <div className='awards-context-container-container'>
                            <div className='awards-month'>2024.06</div>
                            <div className='awards-context'>캡스톤 경진대회 장려상</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;
