import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const ParticipantsSummary = () => {
  return (
    <SummaryWrapper>
        <SummaryTitle>참석자 요약</SummaryTitle>
        <SummaryContent>참석자 요약이 존재하지 않습니다.</SummaryContent>
    </SummaryWrapper>
  );
};

export default ParticipantsSummary;

const SummaryWrapper = styled.div`
    width: 123rem;
    height: 42rem;
    border: 1px solid ${theme.colors.gray[900]};
`;

const SummaryTitle = styled.div`
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.font.medium.fontWeight};
    margin-top: 2.1rem;
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    border-bottom: 0.1rem solid ${theme.colors.gray[900]};
    padding-bottom: 1.7rem;
    line-height: 133.333%;
    letter-spacing: -0.0456rem;
`;

const SummaryContent = styled.div`
    font-size: ${theme.fontSize.xlarge};
    font-weight: ${theme.font.medium.fontWeight};
    margin-top: 15.8rem;
    margin-left: 46.2rem;
    margin-right: 46.1rem;
    margin-bottom: 15.8rem;
    line-height: 133.333%;
    letter-spacing: -0.0456rem;
`;