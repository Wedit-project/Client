import React from "react";
import styled from "styled-components";
import PreviewInvitation from "../assets/icons/previewinvitation.svg?react";
import theme from "../styles/theme";

const PreviewInvitationPage = () => {
  return (
    <PageContainer>
        <StyledPreviewInvitation />
    </PageContainer>
  );
};

export default PreviewInvitationPage;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background.background1};
`;
const StyledPreviewInvitation = styled(PreviewInvitation)`
  max-width: 300vh;
  max-height: 500vh;
  object-fit: contain;

  @media (max-width: 1024px) {
    max-width: 100vw;
    max-height: 170vh;
    object-fit: contain;
  }
`;