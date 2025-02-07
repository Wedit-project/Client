import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import theme from "../../styles/theme";
import LinkModal from "./LinkModal";

const ActionButtons = ({ invitationId }) => {

    const [isModalOpen, setModalOpen] = useState(false);
    const url = "https://wedit.site/1";

    const navigate = useNavigate();
  
    const handleNavigation = (path) => {
      navigate(path);
    };
  
    return (
        <ButtonContainer>
            <Button onClick={() => setModalOpen(true)}>배포 링크</Button>
                {isModalOpen && <LinkModal url={url} onClose={() => setModalOpen(false)} />}
            <Button onClick={() => handleNavigation(`/edit/${invitationId}`)}>수정하기</Button>
            <Button onClick={() => handleNavigation("/analysis")}>분석보기</Button>
        </ButtonContainer>
    );
  };

export default ActionButtons;

// CSS

const ButtonContainer = styled.div`
    display: flex;
    gap: 0.5rem;
`;

const Button = styled.button`
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.font.medium.fontWeight};
    color: ${theme.colors.gray[900]};
    line-height: 166.667%;
    letter-spacing: -0.0456rem;
    border: none;
    cursor: pointer;
    background-color: transparent;
`;
