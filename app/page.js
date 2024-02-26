import "./page.module.css";
import LeftSide from "./leftside/leftSide.jsx";
import { Box } from "@mui/material";
import FirstSection from "./home/firstSection";
import SecondSection from "./home/secondSection";
import ThirdSection from "./home/thirdSection";
import FourthSection from "./home/fourthSection";
import FifthSection from "./home/fifthSection";
import SixthSection from "./home/sixthSection";
import SeventhSection from "./home/seventhSection";
import EighthSection from "./home/eighthSection";
import NinethSection from "./home/ninethSection";
import TenthSection from "./home/tenthSection";
export default function Home() {
  return (
    <Box>
      <LeftSide />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
      <NinethSection />
      <TenthSection />
    </Box>
  );
}
