import styled from 'styled-components';
import Background from '../components/loginpage/Background';
import LoginLogo from "../assets/icons/LoginLogo.svg?react";
import MainPageFooter from "../components/mainpage/MainPageFooter";
import LoginButton from "../components/loginpage/LoginButton";

const LoginPage = () => {
  return (
    <>
      	<Background>
			<StyledLogo />
			<LoginButton />
			<MainPageFooter className="center-align" />
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
`;
