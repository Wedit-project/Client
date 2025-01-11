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
	margin-top: 10.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LocationSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	color: var(--brown, #3c140d);
	font-size: 4.4rem;
	font-style: normal;
	line-height: 66.482%;
	letter-spacing: -0.0836rem;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	&::before,
	&::after {
		content: '';
		display: block;
		width: 49rem;
		height: 0.2rem;
		background-color: var(--brown, #3c140d);
	}

	&::before {
		margin-right: 7.1rem;
	}

	&::after {
		margin-left: 7.1rem;
	}
`;

const LocationImage = styled.img`
	margin-top: 3.9rem;
	background: url('src/assets/img/location.png');
	width: 112.1rem;
	height: 50.2rem;
	border-radius: 2rem;
`;
