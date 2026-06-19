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
    </SectionContainer>
  );
}
