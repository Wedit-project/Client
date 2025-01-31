import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";

const PreviewButton = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/preview-invitation");
  };

  return <Button onClick={handleNavigation}>청첩장 미리보기</Button>;
};

export default PreviewButton;

// CSS
const Button = styled.button`
  border: 0.2rem solid ${theme.colors.green.main};
  border-radius: 1.6rem;
  margin-top: 13rem;
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.bold.fontWeight};
  cursor: pointer;
  background-color: ${theme.colors.gray[0]};
  width: 19.8rem;
  height: 5.8rem;
  @media (min-width: 512px) and (max-width: 564px) {
    font-size: 2rem;
  }
  @media (min-width: 480px) and (max-width: 512px) {
    font-size: 1.7rem;
  }
  @media (min-width: 300px) and (max-width: 480px) {
    font-size: 2.2rem;
  }
`;
