import React from 'react';
import styled from 'styled-components';
import VisitorsCount from './VisitorsCount';
import ParticipantsSummary from './ParticipantsSummary';
import theme from '../../styles/theme';

const Section = ({ invitationId }) => {
	return (
		<SectionWrapper>
			<Title>분석보기</Title>

			<CountWrapper>
				<VisitorsCount invitationId={invitationId} />
			</CountWrapper>

			<SummaryWrapper>
				<ParticipantsSummary invitationId={invitationId} />
			</SummaryWrapper>
		</SectionWrapper>
	);
};

export default Section;
const SectionWrapper = styled.section`
	background-color: ${theme.colors.green['20%']};
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const Title = styled.div`
	font-size: 3.2rem;
	font-weight: ${theme.font.semibold.fontWeight};
	padding-top: 3.2rem;
	margin-left: 7.9rem;
	margin-bottom: 3.3rem;
	line-height: 100%;
	letter-spacing: -0.0608rem;

	@media (max-width: 480px) {
		margin-top: 5rem;
		font-size: 3.8rem;
	}
`;

const CountWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: 768px) and (max-width: 1024px) {
		margin-top: 10rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 10rem;
	}
	@media (max-width: 480px) {
		margin-top: 10rem;
	}
`;

const SummaryWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-bottom: 3.5rem;
	@media (min-width: 768px) and (max-width: 1024px) {
		margin-top: 10rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 10rem;
	}
	@media (max-width: 480px) {
		margin-top: 10rem;
	}
`;
