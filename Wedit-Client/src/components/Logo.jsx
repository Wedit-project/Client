import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/img/logo.svg?react';
import Wedit from '../assets/img/Wedit.svg?react';

const LogoComponent = () => {
	return (
		<LogoSpan>
			<LogoIcon />
			<WeditIcon />
		</LogoSpan>
	);
};

const LogoSpan = styled.span`
	display: flex;
	align-items: center;
	margin-top: 2.7rem;
	margin-left: 3.2rem;
`;

const LogoIcon = styled(Logo)`
	width: 4.2rem;
	height: 4.2rem;
	margin-right: 0.9rem;
`;

const WeditIcon = styled(Wedit)`
	width: 8.7rem;
	font-size: 3.2rem;
`;

export default LogoComponent;
