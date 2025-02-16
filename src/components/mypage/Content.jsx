import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import BigLogo from '../../assets/icons/BigLogo.svg?react';

const Content = () => {
	return (
		<ContentWrapper>
			<StyledBigLogo />
			<Text>나의 모바일 청첩장</Text>
		</ContentWrapper>
	);
};

export default Content;

// CSS
const ContentWrapper = styled.div`
	text-align: center;
`;

const Text = styled.p`
	margin: 0;
	text-align: left;
	font-size: 3.2rem;
	font-weight: ${theme.font.semibold.fontWeight};
	margin-left: 10.5rem;
	padding-bottom: 8.3rem;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		margin-top: 5rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 5rem;
	}
	@media (max-width: 480px) {
		margin-top: 5rem;
		font-size: 3.8rem;
	}
`;

const StyledBigLogo = styled(BigLogo)`
	margin-top: 7.7rem;
	margin-bottom: 3.5rem;
	width: 42.2rem;
	height: 14.4rem;

	@media (max-width: 480px) {
		width: 72.2rem;
		height: 44.4rem;
	}
`;
