import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

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
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 5.526rem;
	color: var(--brown, #3c140d);
	font-style: normal;
	line-height: 105.096%;
	letter-spacing: 0.5em; /* 50% */
	margin-top: 45rem;
	margin-bottom: 20rem;
`;

const RequiredInformationTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 3rem;
`;

const MainImage = styled.img`
	background: url('src/assets/img/gallery1.png');
	width: 48.2662rem;
	height: 55.4879rem;
	border-radius: 4.571rem;
`;

const RequiredInformationTextBox = styled.div``;

const GroomBrideNameSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 88.889%;
	letter-spacing: -0.0625rem;
`;

const GroomParentsNameText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 138.889%;
	letter-spacing: -0.0625rem;
	margin-bottom: 0;
`;

const BrideParentsNameText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 138.889%;
	letter-spacing: -0.0625rem;
	margin-top: 0;
`;

const DateText = styled.p`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 88.889%;
	letter-spacing: -0.0625rem;
	margin-top: 8rem;
`;

const DateDetailText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 88.889%;
	letter-spacing: -0.0625rem;
`;

const LocationText = styled.p`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 88.889%;
	letter-spacing: -0.0625rem;
	margin-top: 8rem;
`;

const LocationDetailText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 111.111% 
	letter-spacing: -0.0625rem;
`;
