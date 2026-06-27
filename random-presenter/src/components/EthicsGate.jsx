import React from 'react';
import './EthicsGate.css';

const guides = [
  {
    id: 1,
    title: '가이드 1 활용 목적',
    subtitle: '생성형 AI를 쓰기 전, \'왜\' 쓰는지 말할 수 있어야 해요.',
    desc: '생성형 AI를 사용하기 전에 \'지금 내가 왜 쓰려고 하지?\'라고 스스로 물어보세요. 생성형 AI는 내 생각을 대신해주는 게 아니라, 내 생각을 도와주는 도구임을 기억하세요.',
    color: '#ff9800'
  },
  {
    id: 2,
    title: '가이드 2 주도적 학습',
    subtitle: '생성형 AI에게 물어보기 전, 내 생각을 먼저 말해요.',
    desc: '막막할 때 바로 생성형 AI에게 묻고 싶은 마음이 들 수 있지만, 먼저 스스로 시도해 보아야 나의 성장에 도움이 돼요.',
    color: '#ff9800'
  },
  {
    id: 3,
    title: '가이드 3 비판적 검증',
    subtitle: '생성형 AI가 틀릴 수 있다는 점을 알아요.',
    desc: '생성형 AI는 틀린 정보를 마치 사실인 것처럼 제시하기도 하므로, 알려준 내용은 항상 \'정말 맞을까?\' 하고 한 번 더 확인하는 습관을 가져요.',
    color: '#ff9800'
  },
  {
    id: 4,
    title: '가이드 4 사고의 확장',
    subtitle: '생성형 AI와 함께 상상하며 내 생각을 더 크게 키워요.',
    desc: '생성형 AI를 내 생각의 범위를 넓혀주는 도구로 사용해보세요. 생성형 AI의 결과물을 그대로 사용하지 않고, 나의 경험과 생각을 더하여 나만의 색깔을 담은 최종 결과물을 만들어요.',
    color: '#4caf50'
  },
  {
    id: 5,
    title: '가이드 5 안전과 관계',
    subtitle: '나의 정보와 비밀을 말하지 않아요.',
    desc: '내가 입력한 정보는 어디에서 어떻게 사용될지 모르기 때문에 이름, 주소, 학교, 전화번호 같은 개인정보는 생성형 AI에게 알려주면 안돼요.',
    color: '#2196f3'
  },
  {
    id: 6,
    title: '가이드 6 투명성·윤리',
    subtitle: '생성형 AI의 도움을 받았다면 숨기지 않고 정직하게 이야기해요.',
    desc: '어느 부분이 생성형 AI의 것이고 어느 부분이 나의 것인지 명확히 밝히는 것은 나 자신을 속이지 않는 정직한 태도예요.',
    color: '#ffc107'
  }
];

function EthicsGate({ onAgree }) {
  return (
    <div className="ethics-gate-overlay">
      <div className="ethics-gate-modal">
        <header className="ethics-gate-header">
          <h2>생성형 AI 윤리 핵심 가이드</h2>
          <p>안전하고 올바른 AI 활용을 위해 아래 가이드를 꼭 읽어주세요.</p>
        </header>

        <div className="ethics-gate-content">
          <ul className="guide-list">
            {guides.map(guide => (
              <li key={guide.id} className="guide-item" style={{ borderLeftColor: guide.color }}>
                <div className="guide-title" style={{ color: guide.color }}>{guide.title}</div>
                <div className="guide-subtitle">{guide.subtitle}</div>
                <div className="guide-desc">{guide.desc}</div>
              </li>
            ))}
          </ul>
        </div>

        <footer className="ethics-gate-footer">
          <button className="agree-button" onClick={onAgree}>
            나는 윤리 핵심가이드를 빠짐없이 읽고 이를 실천하겠습니다.
          </button>
        </footer>
      </div>
    </div>
  );
}

export default EthicsGate;
