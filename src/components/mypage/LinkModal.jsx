import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import CloseIcon from '../../assets/icons/close.svg?react';

const LinkModal = ({ url, onClose }) => {
	const handleCopy = () => {
		navigator.clipboard.writeText(url);
		alert('링크가 복사되었습니다!');
	};

	return (
		<ModalOverlay>
			<ModalContainer onClick={(e) => e.stopPropagation()}>
				<ModalHeader>
					<Header>배포 링크</Header>
					<StyledCloseIcon onClick={onClose} />
				</ModalHeader>
				<Content>
					<LinkText>{url}</LinkText>
					<CopyButton onClick={handleCopy}>복사하기</CopyButton>
				</Content>
			</ModalContainer>
		</ModalOverlay>
	);
};

export default LinkModal;

// CSS

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 9999;
`;

const ModalContainer = styled.div`
	width: 90.3rem;
	height: 14.9rem;
	background-color: ${theme.colors.gray[0]};
	border-radius: 1.6rem;

	@media (max-width: 768px) {
    	width: 100.3rem;
		height: 32.9rem;
  	}
`;

const ModalHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Header = styled.div`
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	color: ${theme.colors.gray[900]};
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	margin-top: 2.1rem;
	margin-left: 2.8rem;
	margin-bottom: 2.9rem;

	@media (max-width: 768px) {
		margin-top: 4.1rem;
		margin-left: 4.8rem;
		margin-bottom: 4.9rem;
    	font-size: 4rem;
  	}
`;

const StyledCloseIcon = styled(CloseIcon)`
	margin-right: 1.8rem;
	margin-bottom: 2rem;
	width: 2.6rem;
	height: 2.6rem;
	cursor: pointer;

	@media (max-width: 768px) {
		margin-right: 3rem;
		margin-bottom: 4rem;
		width: 5rem;
		height: 5rem;
  	}
`;

const Content = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LinkText = styled.span`
	font-size: ${theme.fontSize.large};
	font-weight: ${theme.font.medium.fontWeight};
	color: ${theme.colors.gray[900]};
	line-height: 100%;
	letter-spacing: -0.0608rem;
	word-break: break-all;
	margin-left: 4.4rem;
	margin-bottom: 3.5rem;

	@media (max-width: 768px) {
		width: 66rem;
		font-size: 4rem;
  	}
`;

const CopyButton = styled.button`
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	color: ${theme.colors.gray[900]};
	background-color: transparent;
	border: none;
	cursor: pointer;
	margin-right: 4rem;
	margin-bottom: 3.5rem;

	@media (max-width: 768px) {
		margin-right: 6rem;
		font-size: 4rem;
  	}
`;
