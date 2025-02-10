import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import RSVPModal from './RSVPModal';

const RSVP = ({ $variant = 'basic', invitationData }) => {
	const [isModalVisible, setModalVisible] = useState(false);

	// decisionOption이 false일 경우 컴포넌트 렌더링하지 않음
	if (!invitationData || invitationData.decisionOption === false) {
		return null; // 아무것도 렌더링하지 않음
	}

	const handleWritingButtonClick = () => {
		setModalVisible(true);
	};

	const handleModalClose = () => {
		setModalVisible(false);
	};

	return (
		<RSVPWrapper>
			<RSVPSpan $variant={$variant}>참석의사 전달하기</RSVPSpan>

			<RSVPText>신랑 신부에게 참석 의사를 미리 전달할 수 있어요</RSVPText>

			<RSVPButton $variant={$variant} onClick={handleWritingButtonClick}>
				참석의사 전달하기
			</RSVPButton>
			<RSVPModal
				isVisible={isModalVisible}
				invitationId={invitationData.id}
				onClose={handleModalClose}
			/>
		</RSVPWrapper>
	);
};

export default RSVP;

// CSS
const RSVPWrapper = styled.div`
	margin-top: 19.7rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const RSVPSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	color: ${theme.colors.green.main};
	font-size: 4.4rem;
	font-style: normal;
	line-height: 66.482%;
	letter-spacing: -0.0836rem;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			color: ${theme.colors.traditionalWedding.invitation5};
			&::before,
			&::after {
				content: '';
				display: block;
				width: 39rem;
				height: 0.2rem;
				background-color: ${theme.colors.traditionalWedding.invitation5};
			}

			&::before {
				margin-right: 5.2rem;
			}

			&::after {
				margin-left: 5.2rem;
			}
		`}
`;

const RSVPText = styled.p`
	margin-top: 4.5rem;
	font-weight: ${theme.font.medium.fontWeight};
	color: ${theme.colors.traditionalWedding.invitation5};
	text-align: center;
	font-size: 2.2rem;
	font-style: normal;
	line-height: 132.965%;
	letter-spacing: -0.0418rem;
	width: 22rem;
	margin-bottom: 0;
`;

const RSVPButton = styled.button`
	margin-top: 12.9rem;
	font-weight: ${theme.font.bold.fontWeight};
	color: ${theme.colors.gray[0]};
	text-align: center;
	font-size: 2.2rem;
	font-style: normal;
	line-height: 132.965%;
	letter-spacing: -0.0418rem;
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[300]};
	background: #acb66d;
	display: flex;
	width: 42.5986rem;
	height: 5.302rem;
	padding: 1.2rem 11.8rem;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	flex-shrink: 0;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			background: ${theme.colors.traditionalWedding.invitation5};
		`}
`;
