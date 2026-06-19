import React from "react";

import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import DotDivider from "../../components/DotDivider/DotDivider.jsx";
import MascotCard from "../../components/common/MascotCard/MascotCard.jsx";
import CTAButton from "../../components/CTAButton/CTAButton.jsx";

import letterImg from "../../assets/images/letter.svg";
import humanImg from "../../assets/images/human.svg";

import "./Subscribe.css";

function Subscribe() {
  return (
    <main className="subscribe-page">
      <HeroSection
        eyebrow="매주 만나는"
        highlight="멋쟁이사자"
        title="뉴스레터."
        image={letterImg}
        imageAlt="뉴스레터 봉투 이미지"
        showBack={true}
      />

      <section className="subscribe-question-section">
        <h2 className="question-number">Q2</h2>

        <DotDivider />

        <h3 className="section-title">협업, 어떻게 하나요?</h3>

        <div className="subscribe-keyword-cards">
          <div className="subscribe-keyword-card">Component</div>
          <div className="subscribe-keyword-card">Teamwork</div>
          <div className="subscribe-keyword-card">Milestone</div>
        </div>

        <div className="subscribe-description">
          <p>우선, 비슷한 디자인과 기능을 하는 최소 단위를 찾는 것이 중요해요!</p>
          <p>팀원끼리 컴포넌트를 분담하고 작업하는 걸 추천합니다.</p>
          <p>당연히, 팀워크 요소도 빠질 수 없겠죠?</p>
          <p>브랜치나 함수 명명 규칙, 협업 전략에 대해 고민하는 시간을 가져야 합니다.</p>
          <p>마일스톤을 철저히 지키고 의견 공유를 하는 것도 중요한데요,</p>
          <p>특히, 퍼블리싱과 API 연동을 하는 팀이 착착할 수 있어서 부지런해야 합니다.</p>
        </div>
      </section>

      <section className="subscribe-review-section">
        <DotDivider />

        <h3 className="section-title">이전 세션 자료들을 복습해요!</h3>

        <MascotCard image={humanImg} alt="멋쟁이사자 마스코트" />

        <div className="session-card-list">
          <div className="session-card">1주차 세션</div>
          <div className="session-card">2주차 세션</div>
          <div className="session-card">3주차 세션</div>

          <button type="button" className="session-next-button">
            ›
          </button>
        </div>

        <CTAButton>가입하기</CTAButton>
      </section>
    </main>
  );
}

export default Subscribe;