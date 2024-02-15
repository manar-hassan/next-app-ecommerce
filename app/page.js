
import "./page.module.css";
import LeftSide from "./leftside/leftSide.jsx";
import { Box } from "@mui/material";
import FirstSection from "./home/firstSection";
import SecondSection from "./home/secondSection";
import ThirdSection from "./home/thirdSection";
import FourthSection from "./home/fourthSection";
import FifthSection from "./home/fifthSection";
import Test from "./home/test";
export default function Home() {


  return (
    <Box>
      <LeftSide />
    <FirstSection/>
    <SecondSection/>
    <ThirdSection/>
    <FourthSection/>
    {/* <FifthSection/> */}
    <Test/>
    </Box>
  );
}
