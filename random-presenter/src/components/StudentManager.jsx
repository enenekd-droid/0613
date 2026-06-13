import React, { useState } from 'react';
import { UserPlus, Users, Trash2 } from 'lucide-react';
import './StudentManager.css';

export default function StudentManager({ students, setStudents }) {
  const [activeTab, setActiveTab] = useState('single');
  const [singleName, setSingleName] = useState('');
  const [batchNames, setBatchNames] = useState('');

  const handleAddSingle = (e) => {
    e.preventDefault();
    if (!singleName.trim()) return;
    
    // Check duplicate
    if (students.some(s => s.name === singleName.trim())) {
      alert("이미 존재하는 이름입니다.");
      return;
    }

    setStudents(prev => [...prev, { id: Date.now().toString(), name: singleName.trim() }]);
    setSingleName('');
  };

  const handleAddBatch = (e) => {
    e.preventDefault();
    if (!batchNames.trim()) return;

    const names = batchNames
      .split(/[\n,]+/)
      .map(n => n.trim())
      .filter(n => n.length > 0);

    const newStudents = [];
    let duplicateCount = 0;

    names.forEach((name, idx) => {
      if (!students.some(s => s.name === name) && !newStudents.some(s => s.name === name)) {
        newStudents.push({ id: Date.now().toString() + idx, name });
      } else {
        duplicateCount++;
      }
    });

    if (newStudents.length > 0) {
      setStudents(prev => [...prev, ...newStudents]);
    }
    
    if (duplicateCount > 0) {
      alert(`${duplicateCount}명의 중복된 이름은 제외되었습니다.`);
    }

    setBatchNames('');
  };

  const handleDelete = (id) => {
    setStudents(prev => prev.filter(s => s.id !== id));
  };

  const handleDeleteAll = () => {
    if (window.confirm("정말 모든 학생을 삭제하시겠습니까?")) {
      setStudents([]);
    }
  };

  return (
    <div className="student-manager">
      <h2>🧑‍🎓 학생 관리</h2>
      
      <div className="tabs">
        <button 
          className={`tab ${activeTab === 'single' ? 'active' : ''}`}
          onClick={() => setActiveTab('single')}
          type="button"
        >
          <UserPlus size={18} /> 개별 추가
        </button>
        <button 
          className={`tab ${activeTab === 'batch' ? 'active' : ''}`}
          onClick={() => setActiveTab('batch')}
          type="button"
        >
          <Users size={18} /> 일괄 추가
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'single' ? (
          <form onSubmit={handleAddSingle} className="add-form">
            <input 
              type="text" 
              className="input-field" 
              placeholder="이름을 입력하세요" 
              value={singleName}
              onChange={(e) => setSingleName(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">추가</button>
          </form>
        ) : (
          <form onSubmit={handleAddBatch} className="add-form batch-form">
            <textarea 
              className="input-field" 
              placeholder="이름을 쉼표(,)나 줄바꿈으로 구분해서 입력하세요"
              rows={4}
              value={batchNames}
              onChange={(e) => setBatchNames(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">일괄 추가</button>
          </form>
        )}
      </div>

      <div className="list-header">
        <h3>등록된 학생 ({students.length}명)</h3>
        {students.length > 0 && (
          <button onClick={handleDeleteAll} className="btn btn-danger btn-sm">전체 삭제</button>
        )}
      </div>

      <div className="student-list">
        {students.length === 0 ? (
          <div className="empty-state">등록된 학생이 없습니다.</div>
        ) : (
          students.map(student => (
            <div key={student.id} className="student-item">
              <span className="student-name">{student.name}</span>
              <button 
                onClick={() => handleDelete(student.id)} 
                className="btn-icon"
                title="삭제"
                type="button"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
