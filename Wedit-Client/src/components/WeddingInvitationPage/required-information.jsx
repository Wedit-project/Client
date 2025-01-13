import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const RequiredInformation = () => {
	return (
		<RequiredInformationTextWrapper>
			<TitleText>저희 결혼해요</TitleText>
			<RequiredInformationTextContainer>
				<MainImage />
				<RequiredInformationTextBox>
					<GroomBrideNameSpan>김 도 현 ❤️ 은 수 아</GroomBrideNameSpan>
					<GroomParentsNameText>아버지 김철현 / 어머니 김순자</GroomParentsNameText>
					<BrideParentsNameText>아버지 은철수 / 어머니 박미영</BrideParentsNameText>
					<DateText>일자</DateText>
					<DateDetailText>2024년 11월 30일 / 오후 12시 </DateDetailText>
					<LocationText>위치</LocationText>
					<LocationDetailText>경기 성남시 수정구 성남대로 1342 가천컨벤션센터</LocationDetailText>
				</RequiredInformationTextBox>
			</RequiredInformationTextContainer>
		</RequiredInformationTextWrapper>
	);
};

export default RequiredInformation;

// CSS
const RequiredInformationTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TitleText = styled.p`
	margin-top: 32.5rem;
	font-weight: ${theme.font.bold.fontWeight};
	color: var(--brown, #3c140d);
	text-align: center;
	font-size: 5.5rem;
	font-style: normal;
	line-height: 105.594%;
	letter-spacing: 2.75rem;
`;

const RequiredInformationTextContainer = styled.div`
	margin-top: 12.8rem;
	display: flex;
	flex-direction: row;
	gap: 7.7rem;
`;

const MainImage = styled.img`
	background: url('src/assets/img/gallery1.png');
	width: 48.7rem;
	height: 55.5rem;
	border-radius: 5rem;
`;

const RequiredInformationTextBox = styled.div``;

const GroomBrideNameSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2rem;
	font-style: normal;
	line-height: 91.413%;
	letter-spacing: -0.0608rem;
`;

const GroomParentsNameText = styled.p`
	margin-top: 3rem;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.2rem;
	font-style: normal;
	line-height: 142.833%;
	letter-spacing: -0.0608rem;
	margin-bottom: 0;
`;

const BrideParentsNameText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.2rem;
	font-style: normal;
	line-height: 142.833%;
	letter-spacing: -0.0608rem;
	margin-top: 0;
`;

const DateText = styled.p`
	margin-top: 5.6rem;
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2rem;
	font-style: normal;
	line-height: 91.413%;
	letter-spacing: -0.0608rem;
`;

const DateDetailText = styled.p`
	margin-top: 3rem;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.2rem;
	font-style: normal;
	line-height: 91.413%;
	letter-spacing: -0.0608rem;
`;

const LocationText = styled.p`
	margin-top: 8.1rem;
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2rem;
	font-style: normal;
	line-height: 91.413%;
	letter-spacing: -0.0608rem;
`;

const LocationDetailText = styled.p`
	margin-top: 3rem;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.2rem;
	font-style: normal;
	line-height: 114.267%;
	letter-spacing: -0.0608rem;
	width: 56rem;
`;
