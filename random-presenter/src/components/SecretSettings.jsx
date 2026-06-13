import React, { useState } from 'react';
import { X, Lock, Plus, Trash2 } from 'lucide-react';
import './SecretSettings.css';

export default function SecretSettings({ onClose, secretList, setSecretList, students }) {
  const [selectedName, setSelectedName] = useState('');

  const handleAdd = () => {
    if (!selectedName) return;
    setSecretList(prev => [...prev, selectedName]);
    setSelectedName('');
  };

  const handleRemove = (index) => {
    setSecretList(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="modal-overlay">
      <div className="secret-modal glass">
        <div className="modal-header">
          <h2 className="modal-title"><Lock size={20} /> 비밀 설정 (교사용)</h2>
          <button className="close-btn" onClick={onClose}><X size={24} /></button>
        </div>
        
        <div className="modal-content">
          <p className="secret-desc">
            여기에 등록된 순서대로 다음 추출 시 무조건 해당 학생이 뽑힙니다.<br/>
            (추출 인원이 여러 명일 경우 위에서부터 차례대로 포함됩니다.)
          </p>

          <div className="secret-add-row">
            <select 
              className="input-field secret-select"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
            >
              <option value="">학생 선택...</option>
              {students.map(s => (
                <option key={s.id} value={s.name}>{s.name}</option>
              ))}
            </select>
            <button className="btn btn-primary" onClick={handleAdd}>
              <Plus size={18} /> 추가
            </button>
          </div>

          <div className="secret-list">
            {secretList.length === 0 ? (
              <div className="empty-state">등록된 비밀 순서가 없습니다.</div>
            ) : (
              secretList.map((name, idx) => (
                <div key={idx} className="secret-item">
                  <span className="secret-order">{idx + 1}</span>
                  <span className="secret-name">{name}</span>
                  <button className="btn-icon" onClick={() => handleRemove(idx)}>
                    <Trash2 size={16} />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
