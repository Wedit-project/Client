import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";

export const LoginButton = ({ className }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Button className={className} onClick={handleLoginClick}>
      로그인
    </Button>
  );
};

// CSS
const Button = styled.button`
  border: 0.1rem solid;
  border-radius: 3rem;
  padding: 0.6rem 1.9rem;
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.semibold.fontWeight};
  cursor: pointer;
  background-color: transparent;
  line-height: 133.333%;
  letter-spacing: -0.0456rem;

  @media (max-width: 768px) {
    font-size: 5rem;
    border-radius: 5rem;
    padding: 1rem 3rem;
  }
`;
