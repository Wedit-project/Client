import { useEffect, useState } from "react";
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
import CookieConsentModal from "../components/mainpage/CookieConsentModal";

const HomePage = () => {
  const setAuth = useSetRecoilState(authState);
  const [showCookieModal, setShowCookieModal] = useState(false);

  useEffect(() => {
    fetchUserInfo(setAuth);

    const isCookieAllowed = localStorage.getItem("cookieAllowed");

    if (!isCookieAllowed) {
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isMacSafari =
        /Macintosh/i.test(navigator.userAgent) && /Safari/i.test(navigator.userAgent) && !/Chrome/i.test(navigator.userAgent);

      if ((isIOS || isMacSafari) && document.hasStorageAccess) {
        document.hasStorageAccess().then((hasAccess) => {
          console.log("hasStorageAccess:", hasAccess);
          if (!hasAccess) {
            setShowCookieModal(true);
          }
        });
      } else {
        console.log("iOS 기기가 아니거나 hasStorageAccess 미지원");
      }
    }
    
  }, [setAuth]);

  return (
    <HomePageContainer>
      <MainPageHeader />
      <MainBanner />
      <PreviewBox />
      <MainPageSection />
      <MainPageFooter />

      {showCookieModal && <CookieConsentModal onClose={() => setShowCookieModal(false)} />}
    </HomePageContainer>
  );
};

export default HomePage;

// CSS
const HomePageContainer = styled.div`
  background-color: ${theme.colors.background.background1};
  min-height: 100dvh;
`;
