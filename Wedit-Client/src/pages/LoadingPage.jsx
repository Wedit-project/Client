import styled from 'styled-components';
import theme from '../styles/theme';
import LogoSet from '../assets/img/LogoSet.svg?react';
import LoadingImg from '../assets/img/LoadingImg.svg?react';

const LoadingPage = () => {
	return (
		<Wrapper>
			<IllustIcon />
			<LogoFrameIcon />
			<ProgressBarBox>
				<ProgressBox />
			</ProgressBarBox>
			<LoadingTextBox>나만을 위한 청첩장 제작중...</LoadingTextBox>
		</Wrapper>
	);
};

export default LoadingPage;

// CSS
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const IllustIcon = styled(LoadingImg)`
	width: 98.7rem;
	height: 59.4rem;
	margin: 15.8rem 6rem 0 39.3rem;
	position: relative;
`;

const LogoFrameIcon = styled(LogoSet)`
	position: absolute;
	top: 55%;
	transform: translateX(-74%);
`;

const ProgressBarBox = styled.div`
	width: 112rem;
	height: 6rem;
	border-radius: 3rem;
	background: var(--gray_2, #e0e0e0);
`;

const ProgressBox = styled.div`
	/* 일단 ui구현만 */
	width: 52.9rem;
	height: 6rem;
	border-radius: 3rem;
	background: var(--main-green, #acb66d);
`;

const LoadingTextBox = styled.div`
	margin-top: 3.8rem;
	margin-bottom: 14.4rem;
	color: #000;
	font-family: Pretendard;
	font-size: 3.2rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.608px;
`;
