import React from 'react';
import styled from 'styled-components';

const NavButton = ({ onPrevious, onNext, isNextActive }) => {
	return (
		<ButtonBox>
			<Button onClick={onPrevious} isActive={true}>
				이전
			</Button>
			<Button onClick={onNext} isActive={isNextActive}>
				다음
			</Button>
		</ButtonBox>
	);
};

const ButtonBox = styled.div`
	display: flex;
	width: 43.8rem;
	height: 5.8rem;
	justify-content: center;
	align-items: flex-start;
	gap: 4.2rem;
`;

const Button = styled.button`
	width: 19.8rem;
	padding: 1.3rem 7.7rem;
	border: none;
	border-radius: 1.6rem;
	background: ${(props) => (props.isActive ? '#acb66d' : '#d9d9d9')};
	color: ${(props) => (props.isActive ? '#fff' : '#000')};
	text-align: center;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: 600;
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

export default NavButton;
