import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 96px;
  background: #fff;
  position: relative;
`;

const Logo = styled.p`
  color: #4a25ed;
  font-family: "Pretendard Variable";
  font-size: 25px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;

  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const ButtonSection = styled.div`
  border-left: 1px solid #4a25ed;
  display: flex;
  width: 375px;
  height: 51px;
  align-items: center;
  justify-content: center;
  margin-right: 68px;

  position: absolute;
  right: 68px;
  top: 50%;
  transform: translateY(-50%);
`;

const ButtonGroup = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 62px;
`;

const Button = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  color: #4a25ed;

  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Logo>skunivlikelion</Logo>
      <ButtonSection>
        <ButtonGroup>
          <Button onClick={() => navigate("/")}>홈</Button>
          <Button onClick={() => navigate("/subscribe")}>구독하기</Button>
        </ButtonGroup>
      </ButtonSection>
    </HeaderContainer>
  );
}
