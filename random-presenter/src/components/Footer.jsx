import React, { useState } from 'react';
import './Footer.css';
import DocumentModal from './DocumentModal';
import { privacyPolicyContent, termsOfServiceContent } from '../data/documents';

const Footer = () => {
  const [modalType, setModalType] = useState(null); // 'privacy' | 'terms' | null

  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-links">
          <button onClick={() => setModalType('terms')} className="footer-link-btn">이용약관</button>
          <span className="footer-divider">|</span>
          <button onClick={() => setModalType('privacy')} className="footer-link-btn">개인정보처리방침</button>
        </div>
        <div className="footer-info">
          <p>개인정보 보호책임자: 김정호 교사 (서울원묵초등학교) | 문의: 02-3421-2100</p>
          <p>Copyright © 2026 Random Presenter. All rights reserved.</p>
        </div>
      </div>
      
      {modalType && (
        <DocumentModal 
          title={modalType === 'terms' ? '이용약관' : '개인정보처리방침'}
          content={modalType === 'terms' ? termsOfServiceContent : privacyPolicyContent}
          onClose={() => setModalType(null)}
        />
      )}
    </footer>
  );
};

export default Footer;
