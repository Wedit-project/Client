import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const RequiredInformation = ({
	invitationData
}) => {
	const [isImageLoading, setIsImageLoading] = useState(true);

	return (
		<RequiredInformationTextWrapper>
			<RequiredInformationTextContainer>
				<MainImageBox>
					{isImageLoading && <Skeleton />}
					<MainImage
						isLoading={isImageLoading}
						src={invitationData.image[0]?.url}
						alt="Main Image"
						onLoad={() => setIsImageLoading(false)}
					/>
				</MainImageBox>
				<RequiredInformationTextBox>
					<GroomBrideNameSpan>{invitationData.groom} ❤️ {invitationData.bride}</GroomBrideNameSpan>
					<GroomParentsNameText>아버지 {invitationData.groomF} / 어머니 {invitationData.groomM}</GroomParentsNameText>
					<BrideParentsNameText>아버지 {invitationData.brideF} / 어머니 {invitationData.brideM}</BrideParentsNameText>
					<DateText>일자</DateText>
					<DateDetailText>{invitationData.date} / {invitationData.time} </DateDetailText>
					<LocationText>위치</LocationText>
					<LocationDetailText>{invitationData.address} {invitationData.extraAddress}</LocationDetailText>
				</RequiredInformationTextBox>
			</RequiredInformationTextContainer>
		</RequiredInformationTextWrapper>
	);
};

export default RequiredInformation;

// CSS
const RequiredInformationTextWrapper = styled.div`
	margin-top: 51.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const RequiredInformationTextContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 7.7rem;
`;

const MainImageBox = styled.div`
	width: 48.7rem;
	height: 55.5rem;
	border-radius: 5rem;
	position: relative;
	overflow: hidden;
`;

const MainImage = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 5rem;
	display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;

const Skeleton = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 5rem;
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
	animation: shimmer 1.5s infinite;
	@keyframes shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
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
