import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const TraditionInvitationHeader = () => {
	return (
		<TraditionInvitationHeaderWrapper>
			<TraditionInvitationHeaderBox>
				<LeftLineBox />
				<ImageBox />
				<RightLineWrapper>
					<RightLineBox />
					<Image2Box />
				</RightLineWrapper>
			</TraditionInvitationHeaderBox>
			<TraditionInvitationHeaderSpan>저희 결혼해요</TraditionInvitationHeaderSpan>
		</TraditionInvitationHeaderWrapper>
	);
};

export default TraditionInvitationHeader;

// CSS
const TraditionInvitationHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TraditionInvitationHeaderBox = styled.div`
	margin-top: 10rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 7rem;
	position: relative;
`;

const LineBox = styled.div`
	width: 45rem;
	height: 0.2rem;
	background-color: ${theme.colors.traditionalWedding.invitation5};
`;

const LeftLineBox = styled(LineBox)``;

const RightLineWrapper = styled.div`
	position: relative; /* Image2Box를 감싸는 컨테이너 */
	display: flex;
	align-items: center;
`;

const RightLineBox = styled(LineBox)``;

const ImageBox = styled.div`
	background-image: url('/assets/tradition_invitation_header.png');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	width: 16rem;
	height: 16rem;
`;

const Image2Box = styled.div`
	background-image: url('/assets/tradition_invitation_header_2.png');
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	width: 18.7rem;
	height: 54.2rem;
	position: absolute;
	top: -18rem;
	right: 2rem;
`;

const TraditionInvitationHeaderSpan = styled.span`
	margin-top: 7rem;
	font-weight: ${theme.font.bold.fontWeight};
	color: ${theme.colors.traditionalWedding.invitation5};
	font-size: 5.5rem;
	font-style: normal;
	line-height: 105.594%;
	letter-spacing: 2.75rem;
	text-align: center;
`;
