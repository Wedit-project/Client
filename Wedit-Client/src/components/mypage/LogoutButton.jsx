import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../styles/theme";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 로그아웃 관련 로직 추가 가능
    navigate("/");
  };

  return <StyledButton onClick={handleLogout}>로그아웃</StyledButton>;
};

export default LogoutButton;

// 스타일 정의
const StyledButton = styled.button`
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.font.medium.fontWeight};
    border: none;
    background-color: transparent;
`;
