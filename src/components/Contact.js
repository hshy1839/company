import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes , faFile } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    const [activeButton, setActiveButton] = useState({
        visit: null,
        type: null,
        platform: [],
        page: null,
        design: null,
        preferContact: null,
    });
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const totalFiles = selectedFiles.concat(files);

        // 파일 수와 크기 제한 검사
        const maxFiles = 5;
        const maxFileSize = 10 * 1024 * 1024; // 10MB

        const isValid = totalFiles.every((file) => file.size <= maxFileSize);
        const fileCountValid = totalFiles.length <= maxFiles;

        if (isValid && fileCountValid) {
            setSelectedFiles(totalFiles);
        } else {
            alert('파일 크기는 10MB 이하, 파일 수는 5개 이하여야 합니다.');
        }

        // 파일 수가 5개 이상이면 버튼 비활성화
        if (totalFiles.length >= maxFiles) {
            setIsButtonDisabled(true);
        }
    };
    const handleFileRemove = (index) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index); // 선택된 파일에서 해당 파일을 제거
        setSelectedFiles(updatedFiles);

        // 파일 수가 5개 미만일 때 버튼을 다시 활성화
        if (updatedFiles.length < 5) {
            setIsButtonDisabled(false);
        }
    };

    const handleButtonClick = (group, button) => {
        if (group === "platform") {
            setActiveButton((prev) => {
                const currentSelections = prev.platform;

                // 버튼이 이미 선택된 경우 배열에서 제거
                if (currentSelections.includes(button)) {
                    return {
                        ...prev,
                        platform: currentSelections.filter((item) => item !== button),
                    };
                }

                // 버튼이 선택되지 않은 경우 배열에 추가
                return {
                    ...prev,
                    platform: [...currentSelections, button],
                };
            });
        } else {
            // visit과 platform은 단일 선택
            setActiveButton((prev) => ({
                ...prev,
                [group]: button,
            }));
        }
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
                    <div className="contact-section1-image1"></div>
                </div>
            </div>
            <div className='contact-section2'>
                <div className='contact-section2-title'>JMsoft</div>

                {/* 방문 경로 */}
                <div className='contact-section2-visit-container'>
                    <div className='contact-section2-visit-title'>방문 경로</div>
                    <div className="contact-section2-visit-btn-container">
                        {["인스타그램 광고", "네이버 검색", "구글 검색", "유튜브", "지인 추천", "기타"].map((name) => (
                            <button
                                key={name}
                                className={`contact-section2-visit-btn ${activeButton.visit === name ? "active" : ""}`}
                                onClick={() => handleButtonClick("visit", name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 개발 유형 */}
                <div className='contact-section2-project'>
                    <div className='contact-section2-visit-title'>개발 유형</div>
                    <div className="contact-section2-visit-btn-container">
                        {["신규개발", "유지보수"].map((name) => (
                            <button
                                key={name}
                                className={`contact-section2-visit-btn ${activeButton.type === name ? "active" : ""}`}
                                onClick={() => handleButtonClick("type", name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 개발 플랫폼 */}
                <div className='contact-section2-project'>
                    <div className='contact-section2-visit-title'>개발 플랫폼</div>
                    <div className='contact-section2-visit-title-context'>중복 선택 가능</div>
                    <div className="contact-section2-visit-btn-container">
                        {["네이티브 앱", "하이브리드 앱", "반응형 웹", "서버 개발", "AWS EC2 배포"].map((name) => (
                            <button
                                key={name}
                                className={`contact-section2-visit-btn ${activeButton.platform.includes(name) ? "active" : ""}`}

                                onClick={() => handleButtonClick("platform", name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                    <div className="contact-section2-visit-btn-container">
                        {["카페24 배포", "기타", "아직 모르겠어요"].map((name) => (
                            <button
                                key={name}
                                className={`contact-section2-visit-btn ${activeButton.platform.includes(name) ? "active" : ""}`}

                                onClick={() => handleButtonClick("platform", name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 개발 페이지 분량 */}
                <div className='contact-section2-visit-container'>
                    <div className='contact-section2-visit-title'>개발 페이지 분량</div>
                    <div className="contact-section2-visit-btn-container">
                        {["10 페이지 이하", "20 페이지 이하", "30 페이지 이하", "30 페이지 이상"].map((name) => (
                            <button
                                key={name}
                                className={`contact-section2-visit-btn ${activeButton.page === name ? "active" : ""}`}
                                onClick={() => handleButtonClick("page", name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                    <div className="contact-section2-visit-btn-container">
                        {[ "아직 모르겠어요"].map((name) => (
                            <button
                                key={name}
                                className={`contact-section2-visit-btn ${activeButton.page === name ? "active" : ""}`}
                                onClick={() => handleButtonClick("page", name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>
                {/* 디자인 */}
                <div className='contact-section2-visit-container'>
                    <div className='contact-section2-visit-title'>디자인</div>
                    <div className="contact-section2-visit-btn-container">
                        {["외부 템플릿", "고객 준비 디자인", "디자인 의뢰", "아직 모르겠어요"].map((name) => (
                            <button
                                key={name}
                                className={`contact-section2-visit-btn ${activeButton.design === name ? "active" : ""}`}
                                onClick={() => handleButtonClick("design", name)}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                </div>
                {/* 예산 */}
                <div className='contact-section2-visit-container'>
                    <div className='contact-section2-visit-title'>예산</div>
                    <div className='contact-section2-budget-container'>
                    <input
                        type="text"
                        className="contact-section2-budget-input"
                        placeholder="대략적인 예산을 입력해주세요"
                        spellcheck="false"
                    />
                    <span className='contact-section2-budget-text'>원</span>
                    </div>
                </div>
                <div className='contact-section2-visit-container'>
                    <div className="contact-section2-visit-title">고객 정보 및 프로젝트 내용</div>
                </div>
                <div className="contact-section2-userinfo-container">
                    <div className='contact-section2-userinfo-container-container'>
                        {/* 이름 */}
                        <div className="contact-section2-userinfo-group">
                            <label className="contact-section2-userinfo-title">이름</label>
                            <input
                                type="text"
                                className="contact-section2-userinfo-input"
                                placeholder="이름을 입력해주세요"
                                spellcheck="false"
                            />
                        </div>

                        {/* 이메일 */}
                        <div className="contact-section2-userinfo-group">
                            <label className="contact-section2-userinfo-title">이메일</label>
                            <input
                                type="email"
                                className="contact-section2-userinfo-input"
                                placeholder="이메일을 입력해주세요"
                                spellcheck="false"
                            />
                        </div>

                        {/* 연락처 */}
                        <div className="contact-section2-userinfo-group">
                            <label className="contact-section2-userinfo-title">연락처</label>
                            <input
                                type="text"  // 기본적으로 'text'로 설정
                                className="contact-section2-userinfo-input"
                                placeholder="연락처를 입력해주세요"
                                maxLength="15"  // 전화번호의 최대 길이 설정 (선택 사항)
                                onInput={(e) => {
                                    // 숫자 외의 문자가 입력되지 않도록 처리
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '');
                                }}
                            />
                        </div>
                        {/* 선호 연락 방법 */}
                        <div className="contact-section2-userinfo-group">
                            <label className="contact-section2-userinfo-title">선호 연락 방법</label>
                            <div className="contact-section2-prefer-contact-btn-container">
                        {["카카오톡", "전화", "이메일"].map((name) => (
                            <button
                                key={name}
                                className={`contact-section2-visit-btn ${activeButton.preferContact === name ? "active" : ""}`}
                                onClick={() => handleButtonClick("preferContact", name)}
                            >
                                {name}
                            </button>
                        ))}
                        
                    </div>
                    <div className="contact-section2-prefer-contact-btn-container">
                        {["문자"].map((name) => (
                            <button
                                key={name}
                                className={`contact-section2-visit-btn ${activeButton.preferContact === name ? "active" : ""}`}
                                onClick={() => handleButtonClick("preferContact", name)}
                            >
                                {name}
                            </button>
                        ))}
                        
                    </div>
                        </div>
                    </div>
                    <div className='contact-section2-userinfo-container-container1'>
                        {/*프로젝트 내용*/}
                        <div className="contact-section2-userinfo-group1">
                            <label className="contact-section2-userinfo-title1">프로젝트 내용</label>
                            <textarea
                                className="contact-section2-userinfo-input1"
                                placeholder="프로젝트 관련 설명과 내용을 입력해주세요"
                                spellcheck="false"
                            />
                        </div>
                        {/* 파일 업로드 */}
                        <div className="contact-section2-userinfo-group">
                            <label className="contact-section2-userinfo-title">파일 업로드</label>
                            <div className='contact-section2-userinfo-title-context'>최대 5개, 10MB 용량 까지 업로드 가능<br/>( jpg, jpeg, png, pdf, docx, hwp, pptx, excel, word 가능) </div>
                            <input
                                type="file"
                                id="file-upload-input"
                                className="contact-section2-file-upload-input"
                                accept=".jpg,.jpeg,.png,.pdf,.docx,.hwp,.pptx,.excel,.word"
                                multiple
                                onChange={handleFileChange}
                                disabled={isButtonDisabled}  // 5개 파일을 초과하면 버튼 비활성화
                                style={{ display: 'none' }}
                            />

                            <label
                                htmlFor="file-upload-input"
                                className={`file-upload-label ${isButtonDisabled ? 'disabled' : ''}`}
                            >   + 파일 업로드
                            </label>
                            <div className="file-list">
                                {selectedFiles.length > 0 && (
                                    <ul>
                                        {selectedFiles.map((file, index) => (
                                            <li key={index}>
                                                <FontAwesomeIcon icon={faFile} className='file-list-file-icon'/>{file.name}
                                                <button
                                                    onClick={() => handleFileRemove(index)}
                                                    style={{ color: 'red', marginLeft: '10px' }} // 삭제 버튼 스타일링
                                                >
                                                   <FontAwesomeIcon icon={faTimes} className='file-list-delete-icon' />
                                                </button>
                                            </li>  // 파일 이름 옆에 삭제 버튼 추가
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <button className='section2-submit-button'>
                    문의하기
                </button>
            </div>
        </div>
    );
};

export default Contact;
