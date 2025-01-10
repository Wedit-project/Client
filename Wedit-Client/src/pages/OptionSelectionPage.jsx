import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoComponent from '../components/Logo';
import OptSelection from '../components/OptSelection';
import NavButton from '../components/NavButton';

const OptionSelectionPage = () => {
	const [isNextActive, setIsNextActive] = useState(false); // 다음 버튼 활성화 상태

	const handlePrevious = () => {
		console.log('이전 버튼 클릭');
		// 이전 페이지로 이동하는 로직 추가
	};

	const handleNext = () => {
		console.log('다음 버튼 클릭');
		// 다음 페이지로 이동하는 로직 추가
	};

	return (
		<Wrapper>
			<LogoComponent />
			<TitleBox>옵션 선택</TitleBox>
			<ContentContainer>
				<OptSelection />
			</ContentContainer>
			<NavBox>
				<NavButton
					onPrevious={handlePrevious}
					onNext={handleNext}
					isNextActive={isNextActive} // 다음 버튼 활성화 상태 전달
				/>
			</NavBox>
		</Wrapper>
	);
};

export default OptionSelectionPage;

// CSS
const Wrapper = styled.div`
	width: 144rem;
`;

const TitleBox = styled.div`
	margin-top: 5.4rem;
	margin-left: 7.9rem;
	font-size: 3.2rem;
	font-family: Pretendard;
	font-weight: ${theme.font.bold.fontWeight};
	letter-spacing: -0.608px;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const NavBox = styled.div`
	margin: 1.4rem 50.3rem 6.4rem 50.1rem;
`;
