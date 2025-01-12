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
  width: 60.6rem;
  display: flex;
  flex-direction: row;
`;

const MenuItem = styled.div`
  cursor: pointer;
  background-color: ${({ $active }) => ($active ? "#ACB66D" : "#E4E4E4")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};
  border-radius: 2rem 2rem 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 20.2rem;
  height: 4.1rem;

  font-size: ${theme.fontSize.large};
  font-weight: ${theme.font.semibold.fontWeight};
`;