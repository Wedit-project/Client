import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import toast, { Toaster } from 'react-hot-toast';

const CongratulatoryMoney = ({ $variant = 'basic' }) => {
	const handleCopy = (text) => {
		navigator.clipboard.writeText(text).then(() => {
			toast.success('복사가 완료되었습니다!');
		});
	};

	return (
		<CongratulatoryMoneyWrapper>
			<GuestBookSpan $variant={$variant}>마음 전하실 곳</GuestBookSpan>

			<CongratulatoryMoneyContainer>
				<GroomCongratulatoryMoneyBox>
					<GroomSpan>신랑측</GroomSpan>
					<BankText>농협은행</BankText>
					<AccountInfoBox>
						<AccountText>123-4567-8901</AccountText>
						<NameText>(김도현)</NameText>
					</AccountInfoBox>
					<CopyButton onClick={() => handleCopy('123-4567-8901')}>복사하기</CopyButton>{' '}
				</GroomCongratulatoryMoneyBox>

				<BrideCongratulatoryMoneyBox>
					<BrideSpan>신부측</BrideSpan>
					<BankText>국민은행</BankText>
					<AccountInfoBox>
						<AccountText>234-5678-9012</AccountText>
						<NameText>(은수아)</NameText>
					</AccountInfoBox>
					<CopyButton onClick={() => handleCopy('234-5678-9012')}>복사하기</CopyButton>{' '}
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
	color: #acb66d;
	font-size: 4.4rem;
	font-style: normal;
	line-height: 66.482%;
	letter-spacing: -0.0836rem;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			color: var(--brown, #3c140d);
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
	border: 0.1rem solid var(--gray_3, #d9d9d9);
	background: var(--white, #fff);
	box-shadow: 0rem 0.3657rem 0.3657rem 0rem rgba(0, 0, 0, 0.25);
	width: 46.6rem;
	height: 17.8rem;
	padding: 2.5rem 1.8rem;
`;

const BrideCongratulatoryMoneyBox = styled.div`
	border-radius: 1.6rem;
	border: 0.1rem solid var(--gray_3, #d9d9d9);
	background: var(--white, #fff);
	box-shadow: 0rem 0.3657rem 0.3657rem 0rem rgba(0, 0, 0, 0.25);
	width: 46.6rem;
	height: 17.8rem;
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
