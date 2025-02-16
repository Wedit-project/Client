import React, { useEffect, useState } from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';
import { getAnalysis } from '../../apis/api/analysis';

const VisitorsCount = ({ invitationId }) => {
	const [dailyVisitors, setDailyVisitors] = useState(null);
	const [totalVisitors, setTotalVisitors] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getAnalysis(invitationId);
				setDailyVisitors(result.dailyVisitors);
				setTotalVisitors(result.totalVisitors);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, [invitationId]);

	return (
		<VisitorsWrapper>
			<Text>방문자 수</Text>
			<Row>
				<Column>오늘 방문자</Column>
				<Column>{dailyVisitors} 명</Column>

				<Column>총 방문자</Column>
				<Column>{totalVisitors} 명</Column>
			</Row>
		</VisitorsWrapper>
	);
};

export default VisitorsCount;

const VisitorsWrapper = styled.div`
	width: 123rem;
	height: 22.4rem;
	border: 0.1rem solid ${theme.colors.gray[900]};
	margin-bottom: 1.7rem;
`;

const Text = styled.div`
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	margin-top: 2.1rem;
	margin-left: 2.5rem;
	margin-right: 2.5rem;
	border-bottom: 0.1rem solid ${theme.colors.gray[900]};
	padding-bottom: 1.7rem;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;

	@media (max-width: 480px) {
		font-size: 3.6rem;
	}
`;

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 4.7rem;
	margin-bottom: 5.4rem;
	margin-right: 20.6rem;
	margin-left: 20.7rem;
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
`;

const Column = styled.div`
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 133.333%;
	letter-spacing: -0.0456rem;

	@media (max-width: 480px) {
		font-size: 3.2rem;
	}
`;
