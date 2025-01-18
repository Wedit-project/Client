import React from "react";
import styled from "styled-components";
import { LoginButton } from "./LoginButton";
import { CreateInvitationButton } from "./CreateInvitationButton";
import Logo from "../../assets/icons/Logo.svg?react"; // Logo 컴포넌트를 불러옵니다.

const Header = () => {
  return (
    <HeaderContainer>
      <StyledLogo />
      <StyledCreateInvitationButton />
      {/* <StyledLoginButton /> */}
    </HeaderContainer>
  );
};

export default Header;

// CSS
const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLogo = styled(Logo)`
  margin-left: 3.2rem;
  margin-top: 2.7rem;
  margin-bottom: 5rem;
  height: 4rem;
`;

const StyledLoginButton = styled(LoginButton)`
  margin-right: 5.3rem;
  margin-top: 4.6rem;
  margin-bottom: 0.2rem;
`;

const StyledCreateInvitationButton = styled(CreateInvitationButton)`
  margin-right: 5.5rem;
  margin-top: 4.6rem;
  margin-bottom: 1.4rem;
`;