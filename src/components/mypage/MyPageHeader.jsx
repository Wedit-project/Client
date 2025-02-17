import React from 'react';
import styled from 'styled-components';
import HomeButton from './HomeButton';
import LogoutButton from './LogoutButton';
import theme from '../../styles/theme';
import Logo from '../../assets/icons/Logo.svg?react';

const HomePageHeader = () => {
	return (
		<NavWrapper>
			<StyledLogo />
			<NavContainer>
				<HomeButton />
				<Divider>|</Divider>
				<LogoutButton />
			</NavContainer>
		</NavWrapper>
	);
};

export default HomePageHeader;

// CSS
const NavWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const NavContainer = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 4.8rem;
	margin-right: 5.9rem;
	margin-bottom: 4.6rem;
`;

const Divider = styled.div`
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};


	@media (max-width: 768px) {
		margin-top: 0.5rem;
    	font-size: 5rem;
  	}
`;

const StyledLogo = styled(Logo)`
	margin-left: 3.2rem;
	margin-top: 2.7rem;
	margin-bottom: 5.7rem;
	height: 4rem;

	@media (max-width: 778px) {
		margin-top: 8rem;
		margin-left: 10rem;
		margin-bottom: 6.7rem;
		height: 9.2rem;
	}
`;
