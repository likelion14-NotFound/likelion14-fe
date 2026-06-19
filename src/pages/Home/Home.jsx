import buttonUrl from "../../assets/images/button.svg";
import gearUrl from "../../assets/images/gear.svg";
import IntroduceSection from "../../components/introduceSection/IntroduceSection";
import HackathonSection from "../../components/hackathonSection/HackathonSection";
import HomeTopSection from "../../components/homeTopSection/HomeTopSection";

export default function Home() {
  return (
    <>
      <HomeTopSection
        firstText="월요일에 만나는"
        pinkText="프론트엔드"
        normalText="한 스푼."
        image1={buttonUrl}
        image2={gearUrl}
        alt1="프론트엔드 메인 이미지"
        alt2="톱니바퀴 이미지"
      />
      <IntroduceSection />
      <HackathonSection />
    </>
  );
}
