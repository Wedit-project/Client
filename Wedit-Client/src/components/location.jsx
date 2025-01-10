import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const Location = () => {
	return (
		<LocationWrapper>
			<LocationSpan>위치</LocationSpan>
			<LocationImage />
		</LocationWrapper>
	);
};

export default Location;

// CSS
const LocationWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LocationSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	color: var(--brown, #3c140d);
	font-size: 4.3878rem;
	font-style: normal;
	line-height: 66.667%;
	letter-spacing: -0.0834rem;
`;

const LocationImage = styled.img`
	background: url('src/assets/img/location.png');
	width: 112.073rem;
	height: 50.277rem;
	border-radius: 4.571rem;
	margin-top: 10rem;
`;
