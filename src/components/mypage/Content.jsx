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
`;

const StyledBigLogo = styled(BigLogo)`
	margin-top: 7.7rem;
	margin-bottom: 3.5rem;
	width: 42.2rem;
	height: 14.4rem;
`;
