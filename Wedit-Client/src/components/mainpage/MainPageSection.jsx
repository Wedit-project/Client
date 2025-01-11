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
          <MainInvitationIcon />
        </IconWrapper>
        <Text>
            내 손 안에서 미리 만나는 특별한 청첩장, <br />
            지금 미리보기를 통해 확인해 보세요!
        </Text>
        <PreviewButton />
      </IconTextWrapper>
    </SectionContainer>
  );
};

export default IconButtonSection;

// CSS
const SectionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 3.7rem;
`;

const IconTextWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: left;
    margin-left: 13.9rem;
`;

const IconWrapper = styled.div`
    margin-right: 3.3rem;
`;

const Text = styled.div`
    font-weight: ${theme.font.semibold.fontWeight};
    font-size: 3.2rem;
    line-height: 2;
`;