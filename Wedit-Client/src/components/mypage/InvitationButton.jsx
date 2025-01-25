import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import ThemaSelectModal from '../editpage/ThemeSelectModal';

const InvitationButton = () => {
	const [isModalVisible, setModalVisible] = useState(false);

	const handleInvitationButtonClick = () => {
		setModalVisible(true);
	};

	const handleModalClose = () => {
		setModalVisible(false);
	};

	return (
		<InvitationButtonWrapper>
			<CreateButton onClick={handleInvitationButtonClick}>청첩장 제작하기</CreateButton>
			<ThemaSelectModal isVisible={isModalVisible} onClose={handleModalClose} />
		</InvitationButtonWrapper>
	);
};

export default InvitationButton;

const InvitationButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	background-color: ${theme.colors.green['20%']};
	padding-bottom: 6rem;
`;

const CreateButton = styled.button`
	background-color: ${theme.colors.green.main};
	color: #fff;
	padding: 1.3rem 2.5rem;
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.bold.fontWeight};
	border: none;
	border-radius: 1.6rem;
	cursor: pointer;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	margin-top: 5.6rem;
`;
