import styled from 'styled-components';
import Background from '../components/loginpage/Background';
import LoginLogo from '../assets/icons/LoginLogo.svg?react';
import MainPageFooter from '../components/mainpage/MainPageFooter';
import LoginButton from '../components/loginpage/LoginButton';

const LoginPage = () => {
	return (
		<>
			<Background>
				<StyledLogo />
				<LoginButton />
				<StyledMainPageFooter className="center-align" />
			</Background>
		</>
	);
};

export default LoginPage;

// CSS

const StyledLogo = styled(LoginLogo)`
	width: 42.2rem;
	height: 20.9rem;
	margin-top: 30.3rem;
	margin-right: 50.9rem;
	margin-left: 50.9rem;
	margin-bottom: 1.8rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		margin-top: 55.3rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 85.3rem;
	}
	@media (max-width: 480px) {
		margin-top: 115.3rem;
		margin-left: 54rem;
		width: 70.2rem;
		height: 40.9rem;
	}
`;

const StyledMainPageFooter = styled(MainPageFooter)`
  padding: 0;
`;