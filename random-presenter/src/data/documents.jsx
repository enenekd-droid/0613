export const privacyPolicyContent = (
  <div className="document-content text-left space-y-4">
    <h3 className="font-bold mt-4">제1조 (개인정보의 처리 목적)</h3>
    <p>본 서비스는 다음의 목적을 위하여 개인정보를 처리합니다. 본 서비스는 <strong>사용자의 기기(브라우저의 localStorage)에만 데이터를 저장</strong>하며, 외부 서버로 전송하거나 수집하지 않습니다.</p>
    <ul className="list-disc pl-5">
      <li>학생 명단 관리: 발표자 뽑기 및 조 편성 기능 등 서비스 제공 목적</li>
    </ul>

    <h3 className="font-bold mt-4">제2조 (개인정보의 처리 및 보유기간)</h3>
    <p>본 서비스는 별도의 서버를 운영하지 않으며, 입력하신 모든 정보는 사용자의 브라우저 내부에만 저장됩니다. 사용자가 브라우저의 캐시 및 데이터를 삭제하거나, 서비스 내의 초기화 기능을 사용하면 즉시 파기됩니다.</p>

    <h3 className="font-bold mt-4">제3조 (처리하는 개인정보 항목)</h3>
    <p>본 서비스는 학습 지원을 위해 필요한 최소한의 개인정보만을 사용합니다.</p>
    <ul className="list-disc pl-5">
      <li>입력 항목: 이름(또는 닉네임) 등 명단 입력 정보</li>
    </ul>

    <h3 className="font-bold mt-4">제4조 (만 14세 미만 아동의 개인정보 처리에 관한 사항)</h3>
    <p>본 서비스는 별도로 정보를 수집하여 서버로 전송하지 않으므로, 회원가입 절차 및 이에 따른 법정대리인의 동의 절차를 요구하지 않습니다.</p>

    <h3 className="font-bold mt-4">제5조 (개인정보의 파기 절차 및 방법)</h3>
    <p>브라우저 초기화 또는 데이터 삭제 기능을 이용하면 기기에 저장된 데이터는 복구할 수 없는 방법으로 지체 없이 파기됩니다.</p>

    <h3 className="font-bold mt-4">제6조 (개인정보의 안전성 확보조치)</h3>
    <ul className="list-disc pl-5">
      <li>브라우저 로컬 저장소 활용: 서버 해킹 등에 의한 유출 위험이 없으며, 사용자 본인의 기기 관리를 통해 안전하게 보호됩니다.</li>
    </ul>

    <h3 className="font-bold mt-4">제7조 (정보주체와 법정대리인의 권리·의무 및 행사방법)</h3>
    <p>정보주체(학생) 및 법정대리인은 언제든지 자신의 기기에서 브라우저 데이터를 삭제함으로써 개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수 있습니다.</p>

    <h3 className="font-bold mt-4">제8조 (개인정보 보호책임자)</h3>
    <p>
      성명: 김정호 (개발자)<br/>
      소속: 서울원묵초등학교<br/>
      직위: 교사<br/>
      연락처: 02-3421-2100 (학교 교무실 내선 번호)
    </p>

    <h3 className="font-bold mt-4">제9조 (개인정보 처리방침 변경)</h3>
    <p>이 개인정보 처리방침은 2026년 6월 27일부터 적용됩니다.</p>
  </div>
);

export const termsOfServiceContent = (
  <div className="document-content text-left space-y-4">
    <h3 className="font-bold mt-4">제1조 (목적)</h3>
    <p>본 약관은 서울원묵초등학교 김정호 교사(이하 "개발자")가 제공하는 <strong>랜덤 발표자(Random Presenter)</strong> 웹서비스(이하 "서비스")의 이용과 관련하여 개발자와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>

    <h3 className="font-bold mt-4">제2조 (서비스의 제공 및 변경)</h3>
    <ol className="list-decimal pl-5">
      <li>본 서비스는 교육 목적 및 학급 운영을 지원하기 위해 무료로 제공됩니다.</li>
      <li>개발자는 서비스의 기능 개선이나 운영상 필요한 경우 서비스의 내용을 변경하거나 중단할 수 있습니다.</li>
    </ol>

    <h3 className="font-bold mt-4">제3조 (이용자의 의무)</h3>
    <ol className="list-decimal pl-5">
      <li>이용자는 본 서비스를 교육적이고 건전한 목적으로만 이용하여야 합니다.</li>
      <li>이용자는 타인의 개인정보나 명예를 훼손하는 내용을 명단에 입력하여서는 안 됩니다.</li>
    </ol>

    <h3 className="font-bold mt-4">제4조 (면책조항)</h3>
    <ol className="list-decimal pl-5">
      <li>본 서비스는 사용자 기기의 로컬 저장소(localStorage)를 사용하여 데이터를 저장합니다. 기기 변경, 브라우저 캐시 삭제 등에 따른 데이터 유실에 대해 개발자는 책임지지 않습니다.</li>
      <li>개발자는 무료로 제공되는 서비스의 특성상 서비스 이용과 관련하여 발생한 어떠한 손해에 대해서도 책임을 지지 않습니다.</li>
    </ol>

    <h3 className="font-bold mt-4">제5조 (저작권 및 지적재산권)</h3>
    <p>본 서비스와 관련된 코드, 디자인 등 모든 지적재산권은 개발자에게 있습니다. 무단 복제 및 상업적 이용을 금합니다.</p>

    <h3 className="font-bold mt-4">제6조 (약관의 변경)</h3>
    <p>개발자는 서비스 환경의 변화 등에 따라 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내에 공지함으로써 효력이 발생합니다.</p>

    <h3 className="font-bold mt-4">부칙</h3>
    <p>본 약관은 2026년 6월 27일부터 시행됩니다.</p>
  </div>
);
