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
	width: 4.4rem;
	height: 4.3rem;
	margin-right: 0.9rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 6rem;
		height: 6.5rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		width: 7.4rem;
		height: 6.8rem;
	}
	@media (max-width: 480px) {
		width: 10.1rem;
		height: 9.2rem;
	}
`;

const WeditIcon = styled(Wedit)`
	width: 8.7rem;
	font-size: 3.2rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 13rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		width: 15rem;
	}
	@media (max-width: 480px) {
		width: 18rem;
	}
`;

export default LogoComponent;
