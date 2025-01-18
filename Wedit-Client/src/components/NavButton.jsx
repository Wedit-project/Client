import React from 'react';
import styled from 'styled-components';

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
`;

const PrevButton = styled.button`
	width: 19.8rem;
	padding: 1.3rem 7.7rem;
	border: none;
	border-radius: 1.6rem;
	background: #e4e4e4;
	color: #000000;
	text-align: center;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: 600;
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

const NextButton = styled.button`
	width: 19.8rem;
	padding: 1.3rem 7.7rem;
	border: none;
	border-radius: 1.6rem;
	background: ${(props) =>
		props.isActive ? '#acb66d' : '#ACB66D80'}; // 활성화 상태에 따라 색상 변경
	color: #ffffff;
	text-align: center;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: 600;
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

export default NavButton;
