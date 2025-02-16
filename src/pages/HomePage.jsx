import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../recoil/authState";
import styled from "styled-components";
import PreviewBox from "../components/mainpage/PreviewBox";
import MainBanner from "../components/mainpage/MainBanner";
import MainPageHeader from "../components/mainpage/MainPageHeader";
import MainPageSection from "../components/mainpage/MainPageSection";
import MainPageFooter from "../components/mainpage/MainPageFooter";
import theme from "../styles/theme";
import { fetchUserInfo } from "../apis/api/user";

const HomePage = () => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    fetchUserInfo(setAuth);
  }, [setAuth]);

  return (
    <HomePageContainer>
      <MainPageHeader />
      <MainBanner />
      <PreviewBox />
      <MainPageSection />
      <MainPageFooter />
    </HomePageContainer>
  );
};

export default HomePage;

// CSS
const HomePageContainer = styled.div`
  background-color: ${theme.colors.background.background1};
  min-height: 100dvh;
`;
