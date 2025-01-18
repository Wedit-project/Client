import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";

const EditButton = ({ className }) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/edit");
  };

  return (
    <Button className={className} onClick={handleEditClick}>
      청첩장 제작하기
    </Button>
  );
};

export default EditButton;

// CSS
const Button = styled.button`
    border: none;
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.font.medium.fontWeight};
    cursor: pointer;
    background-color: transparent;
`;
