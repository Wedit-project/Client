import React from 'react';
import styled from 'styled-components';

const BasicInvitationHeader = () => {
	return (
		<BasicInvitationHeaderWrapper>
			<BasicInvitationHeaderBox />
		</BasicInvitationHeaderWrapper>
	);
};

export default BasicInvitationHeader;

// CSS
const BasicInvitationHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BasicInvitationHeaderBox = styled.div`
	margin-top: 1rem;
	background-image: url('/assets/basic_invitation_header.png'); /* Vite public 경로 */
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	width: 44rem;
	height: 39rem;
`;
