import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import theme from "../../styles/theme";

export const MainBannerSlider = ({ sliderSettings, sliderRef, activeData }) => (
  <SliderWrapper>
    <StyledSlider {...sliderSettings} ref={sliderRef}>
      {activeData.map((item) => (
        <Slide key={item.id}>
          <img src={item.svg} alt={`banner-${item.id}`} />
        </Slide>
      ))}
    </StyledSlider>
  </SliderWrapper>
);

export default MainBannerSlider;

// CSS

const SliderWrapper = styled.div`
  width: 144rem;
  height: 40rem;
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    button {
      &::before {
        display: none;
      }
    }
    bottom: 1.85rem;
  }

  .slick-dots li button {
    margin: 0 1.5rem;
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: ${theme.colors.gray[300]};
  }

  .slick-dots li.slick-active button {
    background-color: ${theme.colors.example.example1};
  }
`;

const Slide = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;