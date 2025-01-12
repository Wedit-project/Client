import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoComponent from '../components/Logo';
import NavButton from '../components/NavButton';

const AccountInfoPage = () => {
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
			<TitleBox>축의금 계좌 입력</TitleBox>
			<DescriptionSpan>계좌명과 계좌번호를 입력해주세요</DescriptionSpan>
			<CenterBox>
				<Container>
					<AccountBox>
						<BankAndNumBox>
							<InfoBox>
								<LabelSpan>신랑측 은행:</LabelSpan>
								<InfoInput />
							</InfoBox>
							<InfoBox>
								<LabelSpan>신랑측 계좌번호:</LabelSpan>
								<InfoInput />
							</InfoBox>
						</BankAndNumBox>
						<AccountNameBox>
							<InfoBox>
								<LabelSpan>신랑측 계좌명:</LabelSpan>
								<NameInput />
							</InfoBox>
						</AccountNameBox>
					</AccountBox>
					<AccountBox>
						<BankAndNumBox>
							<InfoBox>
								<LabelSpan>신부측 은행:</LabelSpan>
								<InfoInput />
							</InfoBox>
							<InfoBox>
								<LabelSpan>신부측 계좌번호:</LabelSpan>
								<InfoInput />
							</InfoBox>
						</BankAndNumBox>
						<AccountNameBox>
							<InfoBox>
								<LabelSpan>신부측 계좌명:</LabelSpan>
								<NameInput />
							</InfoBox>
						</AccountNameBox>
					</AccountBox>
				</Container>
				<CautionBox>필수 정보를 모두 입력해 주세요!</CautionBox>
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

export default AccountInfoPage;

// CSS
const Wrapper = styled.div`
	width: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const TitleBox = styled.div`
	margin-top: 5.4rem;
	margin-left: 7.9rem;
	font-size: 3.2rem;
	font-family: Pretendard;
	font-weight: ${theme.font.bold.fontWeight};
	letter-spacing: -0.608px;
`;

const DescriptionSpan = styled.div`
	width: 76.1rem;
	margin-top: 1.6rem;
	margin-left: 7.9rem;
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

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 9.1rem;
	gap: 12.4rem;
`;

const AccountBox = styled.div`
	display: flex;
`;

const BankAndNumBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 6rem;
`;

const AccountNameBox = styled.div`
	margin-left: 14.4rem;
`;

const InfoBox = styled.div`
	display: flex;
	align-items: center;
`;

const LabelSpan = styled.span`
	width: 16.5rem;
	font-family: Pretendard;
	font-size: ${theme.fontSize.xlarge};
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

const InfoInput = styled.input`
	width: 25.3rem;
	padding: 0.9rem 1.8rem;
	margin-left: 2.4rem;
	border-radius: 5px;
	border: 1px solid var(--gray_6, #a8a8a8);
	background: rgba(217, 217, 217, 0);
	font-family: Pretendard;
	font-size: ${theme.fontSize.xlarge};
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.6565rem;
	letter-spacing: -0.456px;
`;

const NameInput = styled.input`
	width: 35.7rem;
	padding: 0.9rem 1.8rem;
	margin-left: 2.4rem;
	border-radius: 5px;
	border: 1px solid var(--gray_6, #a8a8a8);
	background: rgba(217, 217, 217, 0);
	font-family: Pretendard;
	font-size: ${theme.fontSize.xlarge};
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.6565rem;
	letter-spacing: -0.456px;
`;

const CautionBox = styled.div`
	width: 29.3rem;
	height: 4.1rem;
	margin-top: 6rem;
	margin-bottom: 1.4rem;
	color: #e80c0c;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

const NavBox = styled.div`
	margin-bottom: 7.9rem;
`;
