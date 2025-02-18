import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import toast, { Toaster } from 'react-hot-toast';

const CongratulatoryMoney = ({ $variant = 'basic', invitationData }) => {
	// invitationData가 없거나 bankAccounts가 없을 경우 처리
	if (!invitationData || !invitationData.bankAccounts || invitationData.bankAccounts.length === 0) {
		return null; // 아무 것도 렌더링하지 않음
	}

	const handleCopy = (text) => {
		navigator.clipboard.writeText(text).then(() => {
			toast.success('복사가 완료되었습니다!');
		});
	};

	const groomAccount = invitationData.bankAccounts.find((account) => account.side === 'GROOM');
	const brideAccount = invitationData.bankAccounts.find((account) => account.side === 'BRIDE');

	return (
		<CongratulatoryMoneyWrapper>
			<GuestBookSpan $variant={$variant}>마음 전하실 곳</GuestBookSpan>

			<CongratulatoryMoneyContainer>
				<GroomCongratulatoryMoneyBox>
					<GroomSpan>신랑측</GroomSpan>
					<BankText>{groomAccount.bankName}</BankText>
					<AccountInfoBox>
						<AccountText>{groomAccount.accountNumber}</AccountText>
						<NameText>({groomAccount.accountHolder})</NameText>
					</AccountInfoBox>
					<CopyButton onClick={() => handleCopy(groomAccount.accountNumber)}>복사하기</CopyButton>{' '}
				</GroomCongratulatoryMoneyBox>

				<BrideCongratulatoryMoneyBox>
					<BrideSpan>신부측</BrideSpan>
					<BankText>{brideAccount.bankName}</BankText>
					<AccountInfoBox>
						<AccountText>{brideAccount.accountNumber}</AccountText>
						<NameText>({brideAccount.accountHolder})</NameText>
					</AccountInfoBox>
					<CopyButton onClick={() => handleCopy(brideAccount.accountNumber)}>복사하기</CopyButton>{' '}
				</BrideCongratulatoryMoneyBox>
				<Toaster position="top-right" reverseOrder={true} />
			</CongratulatoryMoneyContainer>
		</CongratulatoryMoneyWrapper>
	);
};

export default CongratulatoryMoney;

// CSS
const CongratulatoryMoneyWrapper = styled.div`
	margin-top: 12.8rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const GuestBookSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	color: ${theme.colors.green.main};
	font-size: 4.4rem;
	font-style: normal;
	line-height: 66.482%;
	letter-spacing: -0.0836rem;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			color: ${theme.colors.traditionalWedding.invitation5};
		`}
`;

const CongratulatoryMoneyContainer = styled.div`
	margin-top: 7.8rem;
	display: flex;
	flex-direction: row;
	gap: 4rem;
`;

const GroomCongratulatoryMoneyBox = styled.div`
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[300]};
	background: ${theme.colors.background.background2};
	box-shadow: 0rem 0.3657rem 0.3657rem 0rem rgba(0, 0, 0, 0.25);
	width: 46.6rem;
	height: 20.8rem;
	padding: 2.5rem 1.8rem;
`;

const BrideCongratulatoryMoneyBox = styled.div`
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[300]};
	background: var(--white, #fff);
	box-shadow: 0rem 0.3657rem 0.3657rem 0rem rgba(0, 0, 0, 0.25);
	width: 46.6rem;
	height: 20.8rem;
	padding: 2.5rem 1.8rem;
`;

const GroomSpan = styled.p`
	margin-top: 0;
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.3rem;
	font-style: normal;
	line-height: 88.643%;
	letter-spacing: -0.0627rem;
	margin-bottom: 1.828rem;
`;

const BrideSpan = styled.p`
	margin-top: 0;
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.3rem;
	font-style: normal;
	line-height: 88.643%;
	letter-spacing: -0.0627rem;
	margin-bottom: 1.828rem;
`;

const BankText = styled.p`
	margin-top: 0;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3rem;
	font-style: normal;
	line-height: 121.884%;
	letter-spacing: -0.057rem;
	margin-bottom: 0;
`;

const AccountInfoBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;

const AccountText = styled.p`
	margin-top: 0;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3rem;
	font-style: normal;
	line-height: 121.884%;
	letter-spacing: -0.057rem;
	margin-bottom: 0;
`;

const NameText = styled.p`
	margin-top: 0;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3rem;
	font-style: normal;
	line-height: 121.884%;
	letter-spacing: -0.057rem;
	margin-bottom: 0;
`;

const CopyButton = styled.button`
	margin-top: 1.828rem;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 2.2rem;
	font-style: normal;
	line-height: 132.965%;
	letter-spacing: -0.0418rem;
	background: none;
	border: none;
	cursor: pointer;
`;
