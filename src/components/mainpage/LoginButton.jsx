import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '../../styles/theme';

export const LoginButton = ({ className }) => {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate('/login');
	};

	return (
		<Button className={className} onClick={handleLoginClick}>
			로그인
		</Button>
	);
};

// CSS
const Button = styled.button`
	-webkit-appearance: none; /* 웹킷 브라우저에서 기본 스타일 제거 */
	-moz-appearance: none;
	appearance: none;
	border: 0.1rem solid;
	border-radius: 3rem;
	padding: 0.6rem 1.9rem;
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.semibold.fontWeight};
	cursor: pointer;
	background-color: transparent;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
`;
