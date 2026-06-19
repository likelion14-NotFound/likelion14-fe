import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import humanImage from "../../assets/images/human.svg";

const SectionContainer = styled.section`
  width: 100%;
  height: 1977px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
  background: #fdf9ff;
`;
const TextBox = styled.div`
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

export default function HackathonSection() {
  const navigate = useNavigate();

  return (
    <SectionContainer>
      <TextBox>
        <DotBox>
          <Dot>.</Dot>
          <Dot>.</Dot>
          <Dot>.</Dot>
        </DotBox>

        <Title>해커톤을 대비하며,</Title>
      </TextBox>
    </SectionContainer>
  );
}
