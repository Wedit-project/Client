import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";

export const CreateInvitationButton = ({ className }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/my");
  };

  return (
    <Button className={className} onClick={handleEditClick}>
      청첩장 제작하기
    </Button>
  );
};

// CSS
const Button = styled.button`
  border: none;
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.medium.fontWeight};
  cursor: pointer;
  background-color: transparent;
  line-height: 133.333%
  letter-spacing: -0.0456rem;
`;
