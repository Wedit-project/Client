import React from 'react';
import styled from 'styled-components';
import loginBackground from '../../assets/icons/loginbackground.svg';

const Background = ({ children }) => {
	return (
		<BackgroundContainer>
			<BackgroundImageElement src={loginBackground} alt="background" />
			<ContentWrapper>{children}</ContentWrapper>
		</BackgroundContainer>
	);
};

export default Background;

const BackgroundContainer = styled.div`
	position: relative;
	align-items: center;
	justify-items: center;
	overflow-x: hidden;
	overflow-y: hidden;

	@media (min-width: 768px) and (max-width: 1024px) {
		height: 100vh;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		height: 100vh;
	}
	@media (max-width: 480px) {
		height: 100vh;
	}
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 144rem;
  position: relative;
  z-index: 1;
`;

const BackgroundImageElement = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: -1;
`;
