import React from "react";
import styled from "styled-components";
import MainInvitationIcon from "../../assets/icons/maininvitation.svg?react";
import PreviewButton from "./PreviewInvitationButton";
import theme from "../../styles/theme";

const IconButtonSection = () => {
  return (
    <SectionContainer>
      <IconTextWrapper>
        <IconWrapper>
          <StyledMainInvitationIcon />
        </IconWrapper>
        <Text>
          내 손 안에서 미리 만나는 특별한 청첩장, <br />
          지금 미리보기를 통해 확인해 보세요!
        </Text>
        <StyledPreviewButton />
      </IconTextWrapper>
    </SectionContainer>
  );
};

export default IconButtonSection;

// CSS
const SectionContainer = styled.div`
  margin-bottom: 3.7rem;

  @media (max-width: 768px) {
    margin-bottom: 23.7rem;
  }
`;

const IconTextWrapper = styled.div`
  display: flex;
  flex: 0 0 auto;
  min-height: 100%;

  align-items: center;
  justify-content: center;
  text-align: left;
`;

const IconWrapper = styled.div`
  margin-right: 3.3rem;
  
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Text = styled.div`
  font-weight: ${theme.font.semibold.fontWeight};
  font-size: 3.2rem;
  line-height: 2;
  letter-spacing: -0.064rem;
  text-align: left;
  width: 48.5rem;
  height: 10.4rem;


  @media (max-width: 768px) {
    font-size: 4rem;
    width: 65rem;
    height: 15rem;
  }

  @media (max-width: 353px) {
    font-size: 3.3rem;
    width: 65rem;
    height: 15rem;
  }
`;

const StyledMainInvitationIcon = styled(MainInvitationIcon)`
  width: 40.5rem;
  height: 32.8rem;

  @media (max-width: 768px) {
    width: 52rem;
    height: 44rem;
  }
`;

const StyledPreviewButton = styled(PreviewButton)`
  width: 19.8rem;
  height: 5.8rem;
`;