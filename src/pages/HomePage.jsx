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
import { serverInstance } from "../apis/utils/apiIntance";

const HomePage = () => {
  const setAuth = useSetRecoilState(authState);

  useEffect(() => {
	const fetchCookieData = () => {
	  const cookies = document.cookie; // "key1=value1; key2=value2"
	  console.log("현재 저장된 쿠키:", cookies);
	  // 특정 쿠키 값 추출
	  const cookieValue = cookies
		.split("; ")
		.find((row) => row.startsWith("your_cookie_key="))
		?.split("=")[1];
	  console.log("추출된 쿠키 값:", cookieValue);
	};
  
	fetchCookieData();
  }, []);
  

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await serverInstance.get("/api/auth/renew", {
          withCredentials: true, // 쿠키 포함 요청
        });

		console.log("response : ", response);
        console.log("새로 받은 사용자 정보:", response.data);
        setAuth(response.data); // Recoil 상태 업데이트
      } catch (error) {
        console.error("로그인 상태 갱신 실패:", error.response?.data || error.message);
        setAuth(null);
      }
    };

    fetchUserInfo();
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
