import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";
import { fetchUserLogout } from "../../apis/api/user";
import { authState } from "../../recoil/authState";
import { useSetRecoilState } from "recoil";

const LogoutButton = () => {
  const navigate = useNavigate();
  const setAuth = useSetRecoilState(authState);

  const handleLogout = async() => {
    const response = await fetchUserLogout(setAuth);
    if(response) {
      navigate("/");
    }
  };

  return <StyledButton onClick={handleLogout}>로그아웃</StyledButton>;
};

export default LogoutButton;

// CSS
const StyledButton = styled.button`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.medium.fontWeight};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
