import styled from "styled-components";
import TopSection from "../../components/common/topSection/TopSection";
import buttonUrl from "../../assets/images/button.svg";
import IntroduceSection from "../../components/introduceSection/IntroduceSection";

export default function Home() {
  return (
    <>
      <TopSection
        firstText="월요일에 만나는"
        pinkText="프론트엔드"
        normalText="한 스푼."
        image={buttonUrl}
        alt="상단 이미지"
      />
      <IntroduceSection />
    </>
  );
}
