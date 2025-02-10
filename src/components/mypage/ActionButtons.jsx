import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import theme from '../../styles/theme';
import LinkModal from './LinkModal';
import { createInvitationUrl } from '../../apis/api/my';

const ActionButtons = ({ invitationId }) => {
	const [isModalOpen, setModalOpen] = useState(false);
	const [url, setUrl] = useState('');

	const navigate = useNavigate();

	const handleNavigation = (path) => {
		navigate(path);
	};

	const handleOpenModal = async () => {
		const generatedUrl = await createInvitationUrl(invitationId);
		setUrl(generatedUrl);
		setModalOpen(!!generatedUrl);
	};

	const handleCloseModal = () => {
		setModalOpen(false);
	};

	return (
		<ButtonContainer>
			<Button onClick={handleOpenModal}>배포 링크</Button>
			{isModalOpen && <LinkModal url={url} onClose={handleCloseModal} />}
			<Button onClick={() => handleNavigation(`/edit/${invitationId}`)}>수정하기</Button>
			<Button onClick={() => handleNavigation('/analysis')}>분석보기</Button>
		</ButtonContainer>
	);
};

export default ActionButtons;

// CSS

const ButtonContainer = styled.div`
	display: flex;
	gap: 0.5rem;
`;

const Button = styled.button`
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	color: ${theme.colors.gray[900]};
	line-height: 166.667%;
	letter-spacing: -0.0456rem;
	border: none;
	cursor: pointer;
	background-color: transparent;
`;
