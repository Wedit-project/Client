import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';

const HomeButton = () => {
	const navigate = useNavigate();

	const goToHome = () => {
		navigate('/');
	};

	return <StyledButton onClick={goToHome}>홈</StyledButton>;
};

export default HomeButton;

// 스타일 정의
const StyledButton = styled.button`
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	border: none;
	background-color: transparent;
	cursor: pointer;

	@media (max-width: 768px) {
    	font-size: 5rem;
  	}
`;
