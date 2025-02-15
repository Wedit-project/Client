import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

export const MainBannerSidebar = ({ carouselData, activeMenu, handleMenuClick }) => (
  <SidebarContainer>
    {Object.keys(carouselData).map((menu) => (
        <MenuItem
            key={menu}
            onClick={() => handleMenuClick(menu)}
            $active={activeMenu === menu}
            aria-selected={activeMenu === menu}
            role="tab"
        >
            {menu === "mobile" && "모바일 청첩장"}
            {menu === "theme" && "테마"}
            {menu === "custom" && "커스터 마이징"}
        </MenuItem>
    ))}
  </SidebarContainer>
);

export default MainBannerSidebar;

// CSS

const SidebarContainer = styled.div`
  width: 100%;
  max-width: 60.6rem;
  display: flex;
  flex: 0 0 auto;

  flex-direction: row;

  @media (max-width: 768px) {
    max-width: 120.6rem;
  }
`;

const MenuItem = styled.div`
  cursor: pointer;
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.green.main : theme.colors.gray[300]};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.gray[0] : theme.colors.gray[900]};

  border-radius: 2rem 2rem 0 0;

  display: flex;
  flex: 1 0 auto;

  justify-content: center;
  align-items: center;
  text-align: center;

  max-width: 20.2rem;
  height: 4.1rem;
  padding: 0 4.4rem 0 4.4rem;

  font-size: ${theme.fontSize.large};
  font-weight: ${theme.font.semibold.fontWeight};
  line-height: 160%;
  letter-spacing: -0.038rem;

  @media (max-width: 768px) {
    max-width: 30.2rem;
    height: 6.1rem;
    font-size: 3.2rem;
  }
`;