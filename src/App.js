import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Loading from './components/Loading';

function App() {
  const [loading, setLoading] = useState(true); // 초기 로딩 상태를 true로 설정
  const location = useLocation(); // URL 추적

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false); // 로딩 완료
    };
  
    setLoading(true); // 로딩 시작
  
    if (document.readyState === 'complete') {
      handleLoad(); // 이미 로드된 경우 바로 종료
    } else {
      window.addEventListener('load', handleLoad);
    }
  
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [location]);
  

  return (
    <div className="App">
      {loading ? (
        <Loading /> // 로딩 중일 때 로딩 페이지 표시
      ) : (
        <Routes>
          <Route path="/" element={<><Header /><Main /><Footer /></>} />
          <Route path="/contact" element={<><Contact /><Footer /></>} />
        </Routes>
      )}
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
