import React from 'react';
import './DocumentModal.css';

const DocumentModal = ({ title, content, onClose }) => {
  return (
    <div className="document-modal-overlay" onClick={onClose}>
      <div className="document-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="document-modal-header">
          <h2>{title}</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="document-modal-body">
          {content}
        </div>
        <div className="document-modal-footer">
          <button className="confirm-btn" onClick={onClose}>확인</button>
        </div>
      </div>
    </div>
  );
};

export default DocumentModal;
