import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import humanImage from "../../assets/images/human.svg";

const SectionContainer = styled.section`
  width: 100%;
  height: 2200px;
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

const ImageBox = styled.div`
  width: 1000px;
  height: 347px;
  padding: 27px 372px 0 322px;
  margin-top: 100px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 306px;
  height: 344px;
  object-fit: contain;
`;

const ListBox = styled.div`
  width: 1099px;
  height: 647px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 45px;
  margin-top: 72px;
`;

const ListItem = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  align-items: center;
  padding-left: 36px;
  box-sizing: border-box;
  background: #fff;

  color: #000;

  font-family: "Pretendard Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.5px;

  &:hover {
    background: #cdc1ff;
    color: #fff;
  }
`;

const SubscribeButton = styled.button`
  width: 364px;
  height: 111px;
  margin-top: 181px;
  border-radius: 100px;
  border: 2px solid #4a25ed;
  background: #fff;

  color: #4a25ed;
  font-family: "Pretendard Variable";
  font-size: 35px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  cursor: pointer;

  &:hover {
    background: #4a25ed;
    color: #fff;
  }
`;

const textList = [
  "팀원과 인사를 나누어 보아요, 백엔드와 PO 트랙과도 꼭 친해지기!",
  "기획에 대한 아이디어를 마음껏 공유해 보아요, 건강한 논쟁은 언제나 환영!",
  "개발 분담을 본격적으로 시작해 보아요, 개발 세팅도 꼼꼼하게!",
  "패플러닝 이후에는 API 연결을 해 보아요, 애매하면 무조건 팀원에게 물어보기!",
];

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

      <ImageBox>
        <Image src={humanImage} alt="사람 이미지" />
      </ImageBox>

      <ListBox>
        {textList.map((item, index) => (
          <ListItem key={index}>
            {index + 1}. {item}
          </ListItem>
        ))}
      </ListBox>

      <SubscribeButton onClick={() => navigate("/subscribe")}>
        구독하기
      </SubscribeButton>
    </SectionContainer>
  );
}
