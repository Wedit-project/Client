import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

// 글자 제한 설정
const MAX_CONTENT_LENGTH = 100;

const GuestBookModal = ({ isVisible, onClose }) => {
	const [name, setName] = useState('');
	const [content, setContent] = useState('');

	// ModalContainer 밖인 ModalWrapper 클릭 시 모달창 닫힘
	const handleWrapperClick = (e) => {
		// e.target이 ModalWrapper일 경우에만 onClose 호출
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const handleContentValue = (e) => {
		const newValue = e.target.value;
		if (newValue.length <= MAX_CONTENT_LENGTH) {
			setContent(newValue);
		}
	};

	// 이름과 내용 입력 여부 확인
	const isButtonActive = name.trim() !== '' && content.trim() !== '';

	return (
		isVisible && (
			<ModalWrapper onClick={handleWrapperClick}>
				<ModalContainer>
					<TitleSpan>방명록</TitleSpan>
					<ModalBox>
						<NameInput
							type="text"
							placeholder="이름을 입력해 주세요"
							value={name}
							onChange={(e) => setName(e.target.value)}
							maxLength={100}
						/>
						<ContentBox>
							<ContentInput
								placeholder="내용을 입력해 주세요"
								value={content}
								onChange={handleContentValue}></ContentInput>
							<ContentCount>
								{content.length}/{MAX_CONTENT_LENGTH}
							</ContentCount>
						</ContentBox>
						<SubmitButton isActive={isButtonActive}>작성 완료</SubmitButton>
					</ModalBox>
				</ModalContainer>
			</ModalWrapper>
		)
	);
};

export default GuestBookModal;

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;

const ModalContainer = styled.div`
	width: 80.8rem;
	height: 78.7rem;
	border-radius: 4rem;
	background: #fff;
	display: flex;
	flex-direction: column;
`;
const ModalBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
`;

const TitleSpan = styled.p`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 30px;
	font-style: normal;
	line-height: 106.667%;
	letter-spacing: -0.057rem;
	margin: 8.3rem 62.4rem 6.5rem 10.7rem;
`;

const NameInput = styled.input`
	border-radius: 1.6rem;
	border: 0.1rem solid #a8a8a8;
	background: #fff;
	display: flex;
	width: 60.1rem;
	height: 3.2rem;
	align-items: flex-start;
	gap: 1rem;
	flex-shrink: 0;
	color: #808080;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	font-family: Pretendard;
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	padding-left: 2.5rem;
	padding-top: 2.8rem;
	padding-bottom: 2.8rem;
`;

const ContentBox = styled.div`
	position: relative;
	width: 60.1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ContentInput = styled.textarea`
	border-radius: 1.6rem;
	border: 0.1rem solid #a8a8a8;
	background: #fff;
	width: 100%;
	height: 28.2rem;
	color: #808080;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	font-family: Pretendard;
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	padding-left: 2.5rem;
	padding-top: 2.8rem;
	padding-bottom: 2.8rem;
	resize: none;
`;

const ContentCount = styled.div`
	position: absolute;
	bottom: 2.8rem;
	right: 2.5rem;
	font-size: ${theme.fontSize.medium};
	color: #808080;
`;

const SubmitButton = styled.button`
	border-radius: 1.6rem;
	border: 0.1rem solid #a8a8a8;
	background: ${({ isActive }) => (isActive ? '#ACB66D' : 'rgba(172, 182, 109, 0.5)')};
	cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
	display: flex;
	width: 19.8rem;
	height: 5.8rem;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	color: #fff;
	text-align: center;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
`;
