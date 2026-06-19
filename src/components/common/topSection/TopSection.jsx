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
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export default function TopSection({
  firstText,
  pinkText,
  normalText,
  image,
  alt,
}) {
  return (
    <>
      <SectionContainer>
        <TextBox>
          <FirstTextBox>{firstText}</FirstTextBox>
          <SecondTextBox>
            <PinkTextBox>{pinkText}</PinkTextBox>
            <NormalTextBox>{normalText}</NormalTextBox>
          </SecondTextBox>
        </TextBox>

        <ImageBox>
          <Image src={image} alt={alt} />
        </ImageBox>
      </SectionContainer>
    </>
  );
}
