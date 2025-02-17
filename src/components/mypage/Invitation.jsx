import React from 'react';
import styled from 'styled-components';
import ActionButtons from './ActionButtons';
import theme from '../../styles/theme';

const Invitation = ({ invitation, num }) => {
	return (
		<InvitationContainer>
			<Title>{`청첩장 ${num}`}</Title>
			<ActionButtons invitationId={invitation.id} />
		</InvitationContainer>
	);
};

export default Invitation;

// CSS

const InvitationContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 7.2rem;
	margin-left: 7.3rem;
	margin-bottom: 3.8rem;

	@media (max-width: 768px) {
    	margin-bottom: 10rem;
  	}
`;

const Title = styled.div`
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 133.333%;
	letter-spacing: -0.0456rem;

	@media (max-width: 768px) {
    	font-size: 5rem;
  	}
`;
