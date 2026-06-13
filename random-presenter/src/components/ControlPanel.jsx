import React from 'react';
import { Play, Settings2 } from 'lucide-react';
import './ControlPanel.css';

export default function ControlPanel({ extractCount, setExtractCount, handleSpin, isSpinning, maxCount }) {
  const handleCountChange = (e) => {
    let val = parseInt(e.target.value, 10);
    if (isNaN(val) || val < 1) val = 1;
    if (val > maxCount && maxCount > 0) val = maxCount;
    setExtractCount(val);
  };

  return (
    <div className="control-panel">
      <div className="settings-group">
        <label className="settings-label">
          <Settings2 size={18} /> 뽑을 인원 수
        </label>
        <div className="count-control">
          <button 
            onClick={() => setExtractCount(Math.max(1, Number(extractCount) - 1))}
            disabled={isSpinning || extractCount <= 1}
            className="count-btn"
          >-</button>
          <input 
            type="number" 
            value={extractCount} 
            onChange={handleCountChange}
            disabled={isSpinning}
            className="count-input"
            min="1"
            max={maxCount || 1}
          />
          <button 
            onClick={() => setExtractCount(Math.min(maxCount, Number(extractCount) + 1))}
            disabled={isSpinning || extractCount >= maxCount}
            className="count-btn"
          >+</button>
        </div>
      </div>

      <button 
        className="btn btn-primary spin-btn" 
        onClick={handleSpin}
        disabled={isSpinning || maxCount === 0}
      >
        <Play size={24} fill="currentColor" />
        {isSpinning ? '추출 중...' : '발표자 뽑기'}
      </button>
    </div>
  );
}
