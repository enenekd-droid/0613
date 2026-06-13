import { useState, useEffect } from 'react';
import StudentManager from './components/StudentManager';
import SlotMachine from './components/SlotMachine';
import ControlPanel from './components/ControlPanel';
import SecretSettings from './components/SecretSettings';
import './App.css';

function App() {
  // 상태 초기화 시 localStorage 확인
  const [students, setStudents] = useState(() => {
    const saved = localStorage.getItem('randomPresenter_students');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [extractCount, setExtractCount] = useState(1);
  const [extracted, setExtracted] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  
  // 비밀 설정
  const [secretList, setSecretList] = useState(() => {
    const saved = localStorage.getItem('randomPresenter_secrets');
    return saved ? JSON.parse(saved) : [];
  });
  const [showSecretModal, setShowSecretModal] = useState(false);

  // localStorage 동기화
  useEffect(() => {
    localStorage.setItem('randomPresenter_students', JSON.stringify(students));
  }, [students]);

  useEffect(() => {
    localStorage.setItem('randomPresenter_secrets', JSON.stringify(secretList));
  }, [secretList]);

  // 단축키 (Ctrl + Shift + S) 감지하여 비밀 모달 열기
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.shiftKey && (e.key === 's' || e.key === 'S')) {
        e.preventDefault();
        setShowSecretModal(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSpin = () => {
    if (students.length === 0) {
      alert("학생을 먼저 추가해주세요!");
      return;
    }
    if (extractCount > students.length) {
      alert("추출 인원이 전체 학생 수보다 많습니다.");
      return;
    }

    setIsSpinning(true);
    setExtracted([]);

    // 스핀 효과를 위한 지연
    setTimeout(() => {
      let finalExtracted = [];
      let tempStudents = [...students];
      let tempSecrets = [...secretList];

      for (let i = 0; i < extractCount; i++) {
        // 비밀 리스트에 항목이 있고, 해당 이름이 실제 학생 목록에 존재하는지 확인
        const secretIndex = tempSecrets.findIndex(s => tempStudents.some(ts => ts.name === s));
        
        if (secretIndex !== -1) {
          // 비밀 리스트 적용
          const secretName = tempSecrets[secretIndex];
          const studentObj = tempStudents.find(ts => ts.name === secretName);
          finalExtracted.push(studentObj);
          tempStudents = tempStudents.filter(ts => ts.name !== secretName);
          tempSecrets.splice(secretIndex, 1);
        } else {
          // 일반 랜덤 추출
          const randomIndex = Math.floor(Math.random() * tempStudents.length);
          finalExtracted.push(tempStudents[randomIndex]);
          tempStudents.splice(randomIndex, 1);
        }
      }

      setSecretList(tempSecrets);
      setExtracted(finalExtracted);
      setIsSpinning(false);
    }, 2000); // 2초간 슬롯 회전
  };

  const handleRemoveExtracted = (studentId) => {
    const removedStudent = extracted.find(student => student.id === studentId);

    setExtracted(prev => prev.filter(student => student.id !== studentId));
    setStudents(prev => prev.filter(student => student.id !== studentId));

    if (removedStudent) {
      setSecretList(prev => prev.filter(name => name !== removedStudent.name));
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>🎲 랜덤 발표자 추출기</h1>
        <p className="subtitle">긴장감 넘치는 수업 시간!</p>
      </header>

      <main className="main-content">
        <section className="left-panel">
          <StudentManager students={students} setStudents={setStudents} />
        </section>

        <section className="right-panel">
          <div className="slot-container">
            <SlotMachine 
              isSpinning={isSpinning} 
              extracted={extracted} 
              extractCount={extractCount}
              students={students}
              onRemoveExtracted={handleRemoveExtracted}
            />
          </div>
          
          <div className="control-container">
            <ControlPanel 
              extractCount={extractCount} 
              setExtractCount={setExtractCount}
              handleSpin={handleSpin}
              isSpinning={isSpinning}
              maxCount={students.length}
            />
          </div>
        </section>
      </main>

      {showSecretModal && (
        <SecretSettings 
          onClose={() => setShowSecretModal(false)}
          secretList={secretList}
          setSecretList={setSecretList}
          students={students}
        />
      )}
    </div>
  );
}

export default App;
