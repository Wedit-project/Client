import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const KakaoLoginButton = () => {
  return (
    <Button>
      <Text>로그인</Text>
    </Button>
  );
};

export default KakaoLoginButton;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60rem;
  height: 9rem;
  background-color: ${theme.colors.example.kakao};
  border: none;
  border-radius: 1.2rem;
  cursor: pointer;
  margin-bottom: 27.7rem;
`;

const Text = styled.span`
  font-size: 3rem;
  font-weight: ${theme.font.bold.fontWeight};
  color: #3e3e3e;
`;