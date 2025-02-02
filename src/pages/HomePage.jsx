import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { authState } from "../store/authState";
import styled from "styled-components";
import PreviewBox from "../components/mainpage/PreviewBox";
import MainBanner from "../components/mainpage/MainBanner";
import MainPageHeader from "../components/mainpage/MainPageHeader";
import MainPageSection from "../components/mainpage/MainPageSection";
import MainPageFooter from "../components/mainpage/MainPageFooter";
import theme from "../styles/theme";

const HomePage = () => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      console.log("로컬 스토리지에서 토큰 가져옴:", token);
      setAuth(token);
      return;
    }

    const fetchToken = async () => {
      try {
        const response = await fetch(window.location.href, {
          method: "GET",
          credentials: "include",
        });

        const newToken = response.headers.get("Authorization");
        if (newToken) {
          console.log("응답 헤더에서 토큰 가져옴:", newToken);
          localStorage.setItem("accessToken", newToken);
          setAuth(newToken);
        } else {
          console.log("토큰 없음");
          setAuth(null);
        }
      } catch (error) {
        console.error("토큰 가져오기 실패:", error);
        setAuth(null);
      }
    };

    fetchToken();
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
`;
