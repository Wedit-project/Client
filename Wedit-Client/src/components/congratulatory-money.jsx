import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const CongratulatoryMoney = () => {
	return (
		<CongratulatoryMoneyWrapper>
			<GuestBookSpan>마음 전하실 곳</GuestBookSpan>

			<CongratulatoryMoneyContainer>
				<GroomCongratulatoryMoneyBox>
					<GroomSpan>신랑측</GroomSpan>
					<BankText>농협은행</BankText>
					<AccountInfoBox>
						<AccountText>123-4567-8901</AccountText>
						<NameText>(김도현)</NameText>
					</AccountInfoBox>
					<CopyButton>복사하기</CopyButton>
				</GroomCongratulatoryMoneyBox>

				<BrideCongratulatoryMoneyBox>
					<BrideSpan>신부측</BrideSpan>
					<BankText>국민은행</BankText>
					<AccountInfoBox>
						<AccountText>234-5678-9012</AccountText>
						<NameText>(은수아)</NameText>
					</AccountInfoBox>
					<CopyButton>복사하기</CopyButton>
				</BrideCongratulatoryMoneyBox>
			</CongratulatoryMoneyContainer>
		</CongratulatoryMoneyWrapper>
	);
};

export default CongratulatoryMoney;

// CSS
const CongratulatoryMoneyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const GuestBookSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	color: var(--brown, #3c140d);
	font-size: 4.3878rem;
	font-style: normal;
	line-height: 66.667%;
	letter-spacing: -0.0834rem;
`;

const CongratulatoryMoneyContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 9rem;
	margin-top: 10rem;
`;

const GroomCongratulatoryMoneyBox = styled.div`
	border-radius: 1.4626rem;
	border: 0.0914rem solid var(--gray_3, #d9d9d9);
	background: var(--white, #fff);
	box-shadow: 0px 0.3657rem 0.3657rem 0px rgba(0, 0, 0, 0.25);
	width: 50.277rem;
	height: 23.036rem;
	padding: 2.468rem 1.828rem;
`;

const BrideCongratulatoryMoneyBox = styled.div`
	border-radius: 1.4626rem;
	border: 0.0914rem solid var(--gray_3, #d9d9d9);
	background: var(--white, #fff);
	box-shadow: 0px 0.3657rem 0.3657rem 0px rgba(0, 0, 0, 0.25);
	width: 50.2773rem;
	height: 23.0362rem;
	padding: 2.4682rem 1.8283rem;
`;

const GroomSpan = styled.p`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 88.889%;
	letter-spacing: -0.0625rem;
`;

const BrideSpan = styled.p`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 88.889%;
	letter-spacing: -0.0625rem;
`;

const BankText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 2.9252rem;
	font-style: normal;
	line-height: 125%;
	letter-spacing: -0.0556rem;
	margin-bottom: 0;
`;

const AccountInfoBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
`;

const AccountText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 2.9252rem;
	font-style: normal;
	line-height: 125%;
	letter-spacing: -0.0556rem;
	margin-top: 0;
`;

const NameText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 2.9252rem;
	font-style: normal;
	line-height: 125%;
	letter-spacing: -0.0556rem;
	margin-top: 0;
`;

const CopyButton = styled.button`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 1.8283rem;
	font-style: normal;
	line-height: 160%;
	letter-spacing: -0.0347rem;
	background: none;
	border: none;
	cursor: pointer;
`;
