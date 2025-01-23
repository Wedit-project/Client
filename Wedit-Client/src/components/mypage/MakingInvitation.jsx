import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const MakingInvitation = () => {
  return (
    <MakingInvitationWrapper>
      <Text>제작 중인 페이지</Text>
      <Divider />
      <NothingText>아직 제작 중인 청첩장이 없어요!</NothingText>
    </MakingInvitationWrapper>
  );
};

export default MakingInvitation;

const MakingInvitationWrapper = styled.div`
  background-color: ${theme.colors.green["20%"]};
`;

const Text = styled.div`
  margin: 0;
  text-align: left;
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.medium.fontWeight};
  margin-left: 10.5rem;
  line-height: 133.333%;
  letter-spacing: -0.0456rem;
`;

const Divider = styled.div`
  margin-left: 10.7rem;
  margin-right: 10.7rem;
  margin-top: 2.6rem;
  margin-bottom: 2.6rem;
  border: 0.2rem solid ${theme.colors.green.main};
  border-radius: 0.2rem;
`;

const NothingText = styled.div`
  margin: 0;
  text-align: center;
  color: ${theme.colors.gray[500]};
  font-size: ${theme.fontSize.xlarge};
  font-weight: ${theme.font.medium.fontWeight};
  margin-top: 8.7rem;
  padding-bottom: 10.6rem; 
  line-height: 133.333%;
  letter-spacing: -0.0456rem; 
`;