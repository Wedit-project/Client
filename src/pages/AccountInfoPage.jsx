import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoComponent from '../components/editpage/Logo';
import NavButton from '../components/editpage/NavButton';
import { useRecoilValue, useRecoilState } from 'recoil';
import { contentState, selectedImagesState, accountInfoState } from '../atoms';
import { registerInvitation } from '../apis/api/registerInvitation';

const AccountInfoPage = () => {
	const navigate = useNavigate();
	const [content, setContent] = useRecoilState(contentState);
	const selectedImages = useRecoilValue(selectedImagesState);
	const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState);

	const [isNextActive, setIsNextActive] = useState(false);
	const [bankGroom, setBankGroom] = useState('');
	const [accountNumGroom, setAccountNumGroom] = useState('');
	const [accountNameGroom, setAccountNameGroom] = useState('');
	const [bankBride, setBankBride] = useState('');
	const [accountNumBride, setAccountNumBride] = useState('');
	const [accountNameBride, setAccountNameBride] = useState('');

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setAccountInfo((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		const allFieldsFilled =
			accountInfo.bankGroom &&
			accountInfo.accountNumGroom &&
			accountInfo.accountNameGroom &&
			accountInfo.bankBride &&
			accountInfo.accountNumBride &&
			accountInfo.accountNameBride;

		setIsNextActive(allFieldsFilled);
	}, [accountInfo]);

	const handlePrevious = () => {
		navigate('/option-selection');
	};

	const handleNext = async () => {
		const updatedContent = {
			...content,
			bankAccounts: [
				{
					side: 'GROOM',
					accountNumber: accountInfo.accountNumGroom,
					bankName: accountInfo.bankGroom,
					accountHolder: accountInfo.accountNameGroom,
				},
				{
					side: 'BRIDE',
					accountNumber: accountInfo.accountNumBride,
					bankName: accountInfo.bankBride,
					accountHolder: accountInfo.accountNameBride,
				},
			],
		};

		setContent(updatedContent);

		// API 호출 전에 보낼 데이터 확인
		console.log('Sending data to API:', {
			images: selectedImages,
			content: updatedContent,
		});

		try {
			const response = await registerInvitation(selectedImages, updatedContent);
			navigate('/loading');
		} catch (error) {
			console.error('API 요청 실패:', error);
		}
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
								<InfoInput
									name="bankGroom"
									value={accountInfo.bankGroom}
									onChange={handleInputChange}
								/>
							</InfoBox>
							<InfoBox>
								<LabelSpan>신랑측 계좌번호:</LabelSpan>
								<InfoInput
									name="accountNumGroom"
									value={accountInfo.accountNumGroom}
									onChange={handleInputChange}
								/>
							</InfoBox>
						</BankAndNumBox>
						<AccountNameBox>
							<InfoBox>
								<LabelSpan>신랑측 계좌명:</LabelSpan>
								<NameInput
									name="accountNameGroom"
									value={accountInfo.accountNameGroom}
									onChange={handleInputChange}
								/>
							</InfoBox>
						</AccountNameBox>
					</AccountBox>
					<AccountBox>
						<BankAndNumBox>
							<InfoBox>
								<LabelSpan>신부측 은행:</LabelSpan>
								<InfoInput
									name="bankBride"
									value={accountInfo.bankBride}
									onChange={handleInputChange}
								/>
							</InfoBox>
							<InfoBox>
								<LabelSpan>신부측 계좌번호:</LabelSpan>
								<InfoInput
									name="accountNumBride"
									value={accountInfo.accountNumBride}
									onChange={handleInputChange}
								/>
							</InfoBox>
						</BankAndNumBox>
						<AccountNameBox>
							<InfoBox>
								<LabelSpan>신부측 계좌명:</LabelSpan>
								<NameInput
									name="accountNameBride"
									value={accountInfo.accountNameBride}
									onChange={handleInputChange}
								/>
							</InfoBox>
						</AccountNameBox>
					</AccountBox>
				</Container>
				<CautionBox>{!isNextActive && '필수 정보를 모두 입력해 주세요!'}</CautionBox>
				<NavBox>
					<NavButton onPrevious={handlePrevious} onNext={handleNext} isNextActive={isNextActive} />
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
	letter-spacing: -0.0608rem;
`;

const DescriptionSpan = styled.div`
	width: 76.1rem;
	margin-top: 1.6rem;
	margin-left: 7.9rem;
	color: ${theme.colors.gray['900']};
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
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
	letter-spacing: -0.0456rem;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		max-width: 16.5rem;
	}
`;

const InfoInput = styled.input`
	width: 25.3rem;
	padding: 0.9rem 1.8rem;
	margin-left: 2.4rem;
	border-radius: 5px;
	border: 1px solid ${theme.colors.gray['600']};
	background: rgba(217, 217, 217, 0);
	font-family: Pretendard;
	font-size: ${theme.fontSize.xlarge};
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.6565rem;
	letter-spacing: -0.0456rem;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		max-width: 25.3rem;
	}
`;

const NameInput = styled.input`
	width: 35.7rem;
	padding: 0.9rem 1.8rem;
	margin-left: 2.4rem;
	border-radius: 5px;
	border: 1px solid ${theme.colors.gray['600']};
	background: rgba(217, 217, 217, 0);
	font-family: Pretendard;
	font-size: ${theme.fontSize.xlarge};
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.6565rem;
	letter-spacing: -0.0456rem;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		max-width: 35.7rem;
	}
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
