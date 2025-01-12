import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const InvitationButton = () => {
  return (
    <InvitationButtonWrapper>
      <CreateButton>청첩장 제작하기</CreateButton>
    </InvitationButtonWrapper>
  );
};

export default InvitationButton;

const InvitationButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #EEF0E2;
  padding-bottom: 6rem;
`;

const CreateButton = styled.button`
  background-color: #ACB66D;
  color: #fff;
  padding: 1.3rem 2.5rem;
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.bold.fontWeight};
  border: none;
  border-radius: 1.6rem;
  cursor: pointer;
`;
