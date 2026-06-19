import styled from "styled-components";

const SectionContainer = styled.div`
  width: 100%;
  height: 1315px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  background: #4a25ed;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 31px;
  width: fit-content;
  justify-content: center;
  align-items: center;
`;

const FirstTextBox = styled.div`
  color: #fff;

  font-family: "Pretendard Variable";
  font-size: 90px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SecondTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const PinkTextBox = styled.div`
  color: #ff8bd4;

  font-family: "Pretendard Variable";
  font-size: 120px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const NormalTextBox = styled.div`
  color: #fff;

  font-family: "Pretendard Variable";
  font-size: 120px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ImageBox = styled.div`
  position: relative;
  width: 650px;
  height: 430px;
  margin-top: 50px;
  
`;

const Image1 = styled.img`
  width: 591px;
  height: 624px;
  object-fit: contain;
  transform: translateX(-40px);
`;

const Image2 = styled.img`
  position: absolute;
  width: 230px;
  height: 240px;
  top: 50px;
  right: -45px;
  object-fit: contain;
`;

export default function HomeTopSection({
  firstText,
  pinkText,
  normalText,
  image1,
  image2,
  alt1,
  alt2,
}) {
  return (
    <SectionContainer>
      <TextBox>
        <FirstTextBox>{firstText}</FirstTextBox>

        <SecondTextBox>
          <PinkTextBox>{pinkText}</PinkTextBox>
          <NormalTextBox>{normalText}</NormalTextBox>
        </SecondTextBox>
      </TextBox>

      <ImageBox>
        <Image1 src={image1} alt={alt1} />
        <Image2 src={image2} alt={alt2} />
      </ImageBox>
    </SectionContainer>
  );
}
