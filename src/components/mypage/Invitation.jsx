import React from "react";
import styled from "styled-components";
import ActionButtons from "./ActionButtons";
import theme from "../../styles/theme";

const Invitation = ({ num }) => {
  return (
    <InvitationContainer>
      <Title>{`청첩장 ${num}`}</Title>
      <ActionButtons />
    </InvitationContainer>
  );
};

export default Invitation;

// CSS

const InvitationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 7.2rem;
  margin-left: 7.3rem;
  margin-bottom: 3.8rem;
`;

const Title = styled.div`
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.medium.fontWeight};
  line-height: 133.333%;
  letter-spacing: -0.0456rem;
`;
