import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { authState } from "../../recoil/authState";
import { LoginButton } from "./LoginButton";
import { CreateInvitationButton } from "./CreateInvitationButton";
import Logo from "../../assets/icons/Logo.svg?react";

const Header = () => {
  const state = useRecoilValue(authState);
  console.log(state)
  return (
    <HeaderContainer>
      <StyledLogo />
      {state ? <StyledCreateInvitationButton /> : <StyledLoginButton />}
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
  
  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const StyledLogo = styled(Logo)`
  margin-left: 3.2rem;
  margin-top: 2.7rem;
  margin-bottom: 5rem;
  height: 4rem;

  @media (max-width: 768px) {
    margin-left: 9.2rem;
    margin-top: 4.7rem;
    margin-bottom: 5rem;
    height: 7rem;
  }
`;

const StyledLoginButton = styled(LoginButton)`
  margin-right: 5.3rem;
  margin-top: 4.6rem;
  margin-bottom: 0.2rem;

  @media (max-width: 768px) {
    margin-right: 7.3rem;
  }
`;

const StyledCreateInvitationButton = styled(CreateInvitationButton)`
  margin-right: 5.5rem;
  margin-top: 4.6rem;
  margin-bottom: 1.4rem;
`;
