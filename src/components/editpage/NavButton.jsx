import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const NavButton = ({ onPrevious, onNext, isNextActive }) => {
	return (
		<ButtonBox>
			<PrevButton onClick={onPrevious} isActive={true}>
				이전
			</PrevButton>
			<NextButton onClick={onNext} isActive={isNextActive}>
				다음
			</NextButton>
		</ButtonBox>
	);
};

const ButtonBox = styled.div`
	display: flex;
	width: 43.6rem;
	height: 5.8rem;
	justify-content: center;
	align-items: flex-start;
	gap: 4rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 47rem;
		margin-top: 8rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		width: 47rem;
		margin-top: 8rem;
	}
	@media (max-width: 480px) {
		width: 47rem;
		margin-top: 12rem;
	}
`;

const PrevButton = styled.button`
	width: 19.8rem;
	padding: 1.3rem 7.7rem;
	border: none;
	border-radius: 1.6rem;
	background: ${theme.colors.gray['300']};
	color: ${theme.colors.gray['900']};
	text-align: center;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.semibold.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 24rem;
		font-size: 3.4rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		width: 24rem;
		font-size: 3.4rem;
	}
	@media (max-width: 480px) {
		width: 24rem;
		font-size: 3rem;
	}
`;

const NextButton = styled.button`
	width: 19.8rem;
	padding: 1.3rem 7.7rem;
	border: none;
	border-radius: 1.6rem;
	background: ${(props) =>
		props.isActive ? `${theme.colors.green['main']}` : `${theme.colors.green['50%']}`};
	color: ${theme.colors.gray['0']};
	text-align: center;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.semibold.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 24rem;
		font-size: 3.4rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		width: 24rem;
		font-size: 3.4rem;
	}
	@media (max-width: 480px) {
		width: 24rem;
		font-size: 3rem;
	}
`;

export default NavButton;
