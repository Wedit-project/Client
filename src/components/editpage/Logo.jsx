import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/img/logo.svg?react';
import Wedit from '../../assets/img/Wedit.svg?react';

const LogoComponent = () => {
	return (
		<LogoBox>
			<LogoIcon />
			<WeditIcon />
		</LogoBox>
	);
};

const LogoBox = styled.div`
	display: flex;
	align-items: center;
	margin-top: 2.7rem;
	margin-left: 3.2rem;
`;

const LogoIcon = styled(Logo)`
	width: 4.2rem;
	height: 4.2rem;
	margin-right: 0.9rem;

	@media (min-width: 480px) and (max-width: 768px) {
		width: 6.5rem;
		height: 6.2rem;
	}
	@media (max-width: 480px) {
		width: 8rem;
		height: 7.7rem;
	}
`;

const WeditIcon = styled(Wedit)`
	width: 8.7rem;
	font-size: 3.2rem;

	@media (min-width: 480px) and (max-width: 768px) {
		width: 11rem;
	}
	@media (max-width: 480px) {
		width: 15rem;
	}
`;

export default LogoComponent;
