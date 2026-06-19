import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderContainer = styled.div`
  width: 100%;
  height: 96px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
`;

const Logo = styled.p`
  color: #4A25ED;
font-family: "Pretendard Variable";
font-size: 25px;
font-style: normal;
font-weight: 300;
line-height: normal;
`;

const ButtonGroup = styled.div`
  border-left: 1px solid ##4A25ED;
`;

export default function Header() {
    return (
      <HeaderContainer>
        <Logo>skunivlikelion</Logo>
        <ButtonGroup>
          <Button onClick={() => navigate("/")}>홈</Button>
          <Button onClick={() => navigate("/subscribe")}>구독하기</Button>
        </ButtonGroup>
      </HeaderContainer>  
    );
}