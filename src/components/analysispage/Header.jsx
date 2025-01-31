import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import Logo from "../../assets/icons/Logo.svg?react";

const HomePageHeader = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/my");
  };

  return (
    <NavWrapper>
      <StyledLogo />
      <NavContainer>
        <NavButton onClick={handleNavigate}>마이페이지</NavButton>
      </NavContainer>
    </NavWrapper>
  );
};

export default HomePageHeader;

// CSS
const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavContainer = styled.div`
    display: flex;
    margin-top: 4.8rem;
    margin-right: 5.9rem;
    margin-bottom: 4.6rem;
`;

const NavButton = styled.button`
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.font.medium.fontWeight};
    border: none;
    background-color: transparent;
`;

const StyledLogo = styled(Logo)`
    margin-left: 3.2rem;
    margin-top: 2.7rem;
    margin-bottom: 5.7rem;
    height: 4rem;
`;
