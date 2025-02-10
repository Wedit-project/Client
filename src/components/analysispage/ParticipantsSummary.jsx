import React, { useEffect, useState } from 'react';
import theme from '../../styles/theme';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { getAnalysis } from '../../apis/api/analysis';

const ParticipantsSummary = ({ invitationId }) => {
	const [attendees, setAttendees] = useState(null);
	const [maxValue, setMaxValue] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getAnalysis(invitationId);
				setAttendees(result.attendees);
				setMaxValue(result.attendees.totalCount);
			} catch (error) {
				console.error('Error fetching attendees:', error);
			}
		};

		fetchData();
	}, [invitationId]);

	const data = [
		{ name: '전체', value: attendees?.totalCount, fill: theme.colors.green.main },
		{ name: '신랑측', value: attendees?.groomCount, fill: theme.colors.green.main },
		{ name: '신부측', value: attendees?.brideCount, fill: theme.colors.green.main },
	];

	return (
		<SummaryWrapper>
			<SummaryTitle>참석자 요약</SummaryTitle>
			<SummaryContent>
				{data.map((item) => (
					<ChartContainer key={item.name}>
						<Label>{item.name}</Label>
						<ResponsiveContainer width="70%" height={60}>
							<BarChart layout="vertical" data={[item]}>
								<XAxis type="number" domain={[0, maxValue]} hide />
								<YAxis type="category" dataKey="name" hide />
								<Tooltip />
								<Bar dataKey="value" fill={item.fill} barSize={34} radius={42.23} />
							</BarChart>
						</ResponsiveContainer>
						<Label>{item.value}</Label>
					</ChartContainer>
				))}
			</SummaryContent>
		</SummaryWrapper>
	);
};

export default ParticipantsSummary;

const SummaryWrapper = styled.div`
	width: 123rem;
	height: 42rem;
	border: 0.1rem solid ${theme.colors.gray[900]};
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
	margin-top: 4.9rem;
	margin-bottom: 4.9rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
`;

const ChartContainer = styled.div`
	margin-left: 11rem;
	display: flex;
	align-items: center;
	width: 100%;
	justify-content: flex-start;
`;

const Label = styled.div`
	margin-left: 3rem;
	width: 10rem;
	text-align: left;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: ${theme.fontSize.xlarge};
`;
