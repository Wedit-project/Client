import React, { useState, useRef } from "react";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mainbanner1 from "../../assets/icons/mainbanner1.svg";
import mainbanner2 from "../../assets/icons/mainbanner2.svg";
import mainbanner3 from "../../assets/icons/mainbanner3.svg";
import MainBannerSlider from "../mainpage/MainBannerSlider";
import MainBannerSidebar from "../mainpage/MainBannerSidebar";

const MainBanner = () => {
  const [activeMenu, setActiveMenu] = useState("mobile");
  const sliderRef = useRef(null);

  const carouselData = {
    mobile: [
      { id: 1, svg: mainbanner1 },
      { id: 2, svg: mainbanner2 },
      { id: 3, svg: mainbanner3 },
    ],
    theme: [
      { id: 1, svg: mainbanner1 },
      { id: 2, svg: mainbanner2 },
      { id: 3, svg: mainbanner3 },
    ],
    custom: [
      { id: 1, svg: mainbanner1 },
      { id: 2, svg: mainbanner2 },
      { id: 3, svg: mainbanner3 },
    ],
  };

  const activeData = carouselData[activeMenu];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 2500,
    beforeChange: (_, next) => {
      const menuMap = ["mobile", "theme", "custom"];
      setActiveMenu(menuMap[next]);
    },
    afterChange: (current) => {
      document.querySelectorAll(".slick-slide").forEach((slide, index) => {
        if (index === current) {
          slide.removeAttribute("aria-hidden");
          slide.removeAttribute("tabindex");
        } else {
          slide.setAttribute("aria-hidden", "true");
          slide.setAttribute("inert", "");
        }
      });
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const handleMenuClick = (menu) => {
    const indexMap = {
      mobile: 0,
      theme: 1,
      custom: 2,
    };
    setActiveMenu(menu);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(indexMap[menu]);
    }
  };

  return (
    <MainBannerContainer>
        <MainBannerSidebar
          carouselData={carouselData}
          activeMenu={activeMenu}
          handleMenuClick={handleMenuClick}
        />
        <MainBannerSlider
          sliderSettings={sliderSettings}
          sliderRef={sliderRef}
          activeData={activeData}
        />
    </MainBannerContainer>
  );
};

export default MainBanner;

// CSS
const MainBannerContainer = styled.div`
`;
