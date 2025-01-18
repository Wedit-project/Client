import React from "react";
import styled from "styled-components";
import PreviewInvitation from "../assets/icons/previewinvitation.svg?react";
import theme from "../styles/theme";

const PreviewInvitationPage = () => {
  return (
    <PageContainer>
        <PreviewInvitation />
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
