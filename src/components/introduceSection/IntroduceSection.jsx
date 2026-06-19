import styled from "styled-components";

const SectionContainer = styled.section`
  width: 100%;
  height: 1608px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 88px;
  padding-top: 122px;
`;

const QuestionBox = styled.div`
  color: #4a25ed;

  font-family: "Pretendard Variable";
  font-size: 75px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionText = styled.p`
  padding-bottom: 5px;
  margin: 0;
`;
const DotBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

const Dot = styled.div`
  margin: 0;
  line-height: 0.4;
  font-weight: 600;
`;

const Title = styled.p`
  margin: 0;

  padding-top: 51px;
`;

const IntroduceBox = styled.div`
  display: inline-flex;
  flex-direction: column;

  height: 349px;
  width: 1051px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: #fdf9ff;
`;

const Introduce = styled.div`
  color: #b6b6b6;

  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default function IntroduceSection() {
  return (
    <SectionContainer>
      <QuestionBox>
        <QuestionText>Q1</QuestionText>

        <DotBox>
          <Dot>.</Dot>
          <Dot>.</Dot>
          <Dot>.</Dot>
        </DotBox>

        <Title>프론트엔드에 대하여</Title>
      </QuestionBox>
      <IntroduceBox>
        <Introduce>
          문제를 단순히 해결하는 데 그치지 않고, 더 나은 방향을 고민하는 개발자
          김서현
        </Introduce>
        <Introduce>느려도 멈추지 않는 개발자 김민솔 입니다.</Introduce>
      </IntroduceBox>
    </SectionContainer>
  );
}
