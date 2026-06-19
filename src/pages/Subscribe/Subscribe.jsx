import React, { useState } from "react";
import styled from "styled-components";

import TopSection from "../../components/common/topSection/TopSection.jsx";

import letterImg from "../../assets/images/letter.svg";
import humanImg from "../../assets/images/human.svg";

import "./Subscribe.css";

function Subscribe() {
  const sessionGroups = [
    ["1주차 세션", "2주차 세션", "3주차 세션"],
    ["4주차 세션", "5주차 세션", "6주차 세션"],
    ["7주차 세션", "8주차 세션", "9주차 세션"],
  ];

  const [currentSessionIndex, setCurrentSessionIndex] = useState(0);

  const handleNextSession = () => {
    setCurrentSessionIndex((prevIndex) =>
      prevIndex === sessionGroups.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <main className="subscribe-page">
      <SubscribeTopWrapper>
        <BackButton type="button" onClick={handleGoHome}>
          ‹
        </BackButton>

        <TopSection
          firstText="매주 만나는"
          pinkText="멋쟁이사자"
          normalText="뉴스레터."
          image={letterImg}
          alt="뉴스레터 봉투 이미지"
        />
      </SubscribeTopWrapper>

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
          <p>
            브랜치나 함수 명명 규칙, 협업 전략에 대해 고민하는 시간을 가져야
            합니다.
          </p>
          <p>마일스톤을 철저히 지키고 의견 공유를 하는 것도 중요한데요,</p>
          <p>
            특히, 퍼블리싱과 API 연동을 하는 팀이 착착할 수 있어서 부지런해야
            합니다.
          </p>
        </div>
      </section>

      <section className="subscribe-review-section">
        <DotDivider />

        <h3 className="section-title">이전 세션 자료들을 복습해요!</h3>

        <div className="mascot-card">
          <img src={humanImg} alt="멋쟁이사자 마스코트" />
        </div>

        <div className="session-card-list">
          {sessionGroups[currentSessionIndex].map((session) => (
            <div className="session-card" key={session}>
              {session}
            </div>
          ))}

          <button
            type="button"
            className="session-next-button"
            onClick={handleNextSession}
          >
            ›
          </button>
        </div>

        <button type="button" className="subscribe-join-button">
          가입하기
        </button>
      </section>
    </main>
  );
}

function DotDivider() {
  return (
    <DotDividerBox>
      <span />
      <span />
      <span />
    </DotDividerBox>
  );
}

const SubscribeTopWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const BackButton = styled.button`
  position: absolute;
  top: 120px;
  left: 70px;
  z-index: 10;

  border: none;
  background: transparent;
  color: #ffffff;

  font-size: 90px;
  font-weight: 200;
  line-height: 1;

  cursor: pointer;
  padding: 0;

  appearance: none;
  -webkit-appearance: none;

  &:hover {
    opacity: 0.8;
  }
`;

const DotDividerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
  margin: 14px 0 26px;

  span {
    width: 5px;
    height: 5px;
    background-color: #4b22f4;
    border-radius: 50%;
  }
`;

export default Subscribe;