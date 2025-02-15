import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Content from './Content';
import InvitationButton from './InvitationButton';
import MakingInvitation from './MakingInvitation';

const MyPageSection = () => {
	return (
		<SectionWrapper>
			<Content />
			<MakingInvitation />
			<InvitationButton />
		</SectionWrapper>
	);
};

export default MyPageSection;

const SectionWrapper = styled.section`
	background-color: ${theme.colors.green['20%']};
	flex: 1;
	display: flex;
	flex-direction: column;
`;
