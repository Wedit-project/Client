import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const PreviewButton = () => {
  return <Button>청첩장 미리보기</Button>;
};

export default PreviewButton;

// CSS
const Button = styled.button`
  border: 0.2rem solid ${theme.colors.green.main};
  border-radius: 1.6rem;
  padding: 1.3rem 2.5rem;
  margin-right: 16.2rem;
  margin-top: 13rem;
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.bold.fontWeight};
  cursor: pointer;
  background-color: #fff;
`;
