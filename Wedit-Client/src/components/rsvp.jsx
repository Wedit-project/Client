import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const RSVP = () => {
	return (
		<RSVPWrapper>
			<RSVPSpan>참석의사 전달하기</RSVPSpan>

			<RSVPText>신랑 신부에게 참석 의사를 미리 전달할 수 있어요</RSVPText>

			<RSVPButton>참석의사 전달하기</RSVPButton>
		</RSVPWrapper>
	);
};

export default RSVP;

// CSS
const RSVPWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const RSVPSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	color: var(--brown, #3c140d);
	font-size: 4.3878rem;
	font-style: normal;
	line-height: 66.667%;
	letter-spacing: -0.0834rem;
`;

const RSVPText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	color: var(--brown, #3c140d);
	text-align: center;
	font-size: 2.1939rem;
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0417rem;
	margin-top: 5rem;
`;

const RSVPButton = styled.button`
	font-weight: ${theme.font.bold.fontWeight};
	text-align: center;
	font-size: 2.1939rem;
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0417rem;
	border-radius: 1.4626rem;
	border: 0.0914rem solid var(--gray_3, #d9d9d9);
	background: var(--white, #fff);
	width: 42.5986rem;
	height: 5.302rem;
	padding: 1.1884rem 11.7923rem;
	margin-top: 15rem;
`;
