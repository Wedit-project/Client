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
			<TitleSpan>옵션 선택</TitleSpan>
			<DescriptionSpan>1개 이상의 옵션을 선택해주세요.</DescriptionSpan>
			<CenterBox>
				<ContentContainer>
					<OptSelection />
				</ContentContainer>
				<CautionBox>1개 의상의 옵션을 선택을 해주세요!</CautionBox>
				<NavBox>
					<NavButton
						onPrevious={handlePrevious}
						onNext={handleNext}
						isNextActive={isNextActive} // 다음 버튼 활성화 상태 전달
					/>
				</NavBox>
			</CenterBox>
		</Wrapper>
	);
};

export default OptionSelectionPage;

// CSS
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const TitleSpan = styled.span`
	display: block;
	margin-top: 5.4rem;
	margin-left: 7.9rem;
	font-size: 3.2rem;
	font-family: Pretendard;
	font-weight: ${theme.font.bold.fontWeight};
	letter-spacing: -0.608px;
`;

const DescriptionSpan = styled.span`
	display: block;
	position: absolute;
	top: 18.8rem;
	left: 7.5rem;
	width: 76.1rem;
	color: var(--black, #000);
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

const CenterBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ContentContainer = styled.div`
	position: relative;
`;

const CautionBox = styled.div`
	position: absolute;
	top: 83.2rem;
	width: 32.6rem;
	height: 4.1rem;
	color: #e80c0c;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

const NavBox = styled.div`
	margin-top: 1.4rem;
	margin-bottom: 7.9rem;
`;
