import React from "react";
import styled from "styled-components";
import VisitorsCount from "./VisitorsCount";
import ParticipantsSummary from "./ParticipantsSummary";
import theme from "../../styles/theme";

const Section = () => {
  return (
    <SectionWrapper>

      <Title>분석보기</Title>

      <CountWrapper>
        <VisitorsCount />
      </CountWrapper>

      <SummaryWrapper>
        <ParticipantsSummary />
      </SummaryWrapper>

    </SectionWrapper>
  );
};

export default Section;

const SectionWrapper = styled.section`
  background-color: ${theme.colors.green["20%"]};
`;

const Title = styled.div`
  font-size: 3.2rem;
  font-weight: ${theme.font.semibold.fontWeight};
  padding-top: 3.2rem;
  margin-left: 7.9rem;
  margin-bottom: 3.3rem;
  line-height: 100%;
  letter-spacing: -0.0608rem;
`;

const CountWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 3.5rem;
`;