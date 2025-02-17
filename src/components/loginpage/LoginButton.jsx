import React from 'react';
import styled from 'styled-components';
import kakaobutton from '../../assets/icons/kakaobutton.png';

const KakaoLoginButton = () => {
	const link = `${import.meta.env.VITE_KAKAO_LOGIN}`;

	return (
		<Link href={link}>
			<Button>
				<Img src={kakaobutton} alt="카카오 로그인" />
			</Button>
		</Link>
	);
};

export default KakaoLoginButton;

const Link = styled.a`
	text-decoration: none;
	display: flex;
`;

const Button = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
	margin-bottom: 27.7rem;
	width: 60rem;
	height: 9rem;

	@media (max-width: 768px) {
		width: 70rem;
		height: 9rem;
	}
	@media (max-width: 480px) {
		width: 105rem;
		height: 9rem;
	}
`;

const Img = styled.img`
	width: 60rem;
	height: 9rem;

	@media (max-width: 768px) {
		width: 70rem;
		height: 11rem;
	}
	@media (max-width: 480px) {
		width: 105rem;
		height: 16rem;
	}
`;
