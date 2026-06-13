import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import MaterialIcon from './MaterialIcon';
import './SlotMachine.css';

export default function SlotMachine({ isSpinning, extracted, extractCount, students, onRemoveExtracted }) {
  const [displayNames, setDisplayNames] = useState([]);
  const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval;
    if (isSpinning) {
      if (students.length === 0) return;
      
      interval = setInterval(() => {
        const randomNames = Array(Number(extractCount)).fill(0).map(() => {
          return students[Math.floor(Math.random() * students.length)].name;
        });
        setDisplayNames(randomNames);
      }, 50);
    } else {
      if (extracted.length > 0) {
        setDisplayNames(extracted.map(s => s.name));
      } else {
        setDisplayNames([]);
      }
    }

    return () => clearInterval(interval);
  }, [isSpinning, extracted, extractCount, students]);

  if (students.length === 0) {
    return <div className="slot-machine empty">추출할 학생을 추가해주세요.</div>;
  }

  if (!isSpinning && extracted.length === 0) {
    return <div className="slot-machine ready">준비 완료! 뽑기 버튼을 눌러주세요 🎲</div>;
  }

  const showWinner = !isSpinning && extracted.length > 0;

  return (
    <div className="slot-machine">
      <div className={`slots-wrapper count-${displayNames.length > 3 ? 'many' : displayNames.length}`}>
        {displayNames.map((name, idx) => (
          <div 
            key={idx} 
            className={`slot ${isSpinning ? 'spinning' : 'stopped'}`}
          >
            <div className="slot-inner">
              <span className="slot-text">{name}</span>
            </div>
          </div>
        ))}
      </div>
      
      {showWinner && (
        <div className="winner-overlay">
          <Confetti 
            width={windowDimensions.width} 
            height={windowDimensions.height} 
            recycle={false} 
            numberOfPieces={500} 
            gravity={0.15}
          />
          <div className="winner-content pop-in">
            <h2 className="winner-title">🎉 당첨! 🎉</h2>
            <div className="winner-names">
              {extracted.map(student => (
                <div key={student.id} className="winner-name-item">
                  <span>{student.name}</span>
                  <button
                    type="button"
                    className="winner-remove-button"
                    onClick={() => onRemoveExtracted(student.id)}
                    aria-label={`${student.name} remove`}
                    title="Remove"
                  >
                    <MaterialIcon name="close" size={24} weight={600} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
