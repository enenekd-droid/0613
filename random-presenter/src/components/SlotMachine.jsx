import React, { useState, useEffect } from 'react';
import './SlotMachine.css';

export default function SlotMachine({ isSpinning, extracted, extractCount, students }) {
  const [displayNames, setDisplayNames] = useState([]);

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
      {!isSpinning && extracted.length > 0 && (
        <div className="result-message shake">🎉 발표를 부탁해요! 🎉</div>
      )}
    </div>
  );
}
