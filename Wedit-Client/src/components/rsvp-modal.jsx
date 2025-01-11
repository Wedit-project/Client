import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const RSVPModal = ({ isVisible, onClose }) => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [guestNum, setguestNum] = useState(0);

	// ModalContainer 밖인 ModalWrapper 클릭 시 모달창 닫힘
	const handleWrapperClick = (e) => {
		// e.target이 ModalWrapper일 경우에만 onClose 호출
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	// 이름, 연락처, 추가 인원 선택 여부 확인
	const isButtonActive = name.trim() !== '' && phone.trim() !== '' && guestNum !== 0;

	return (
		isVisible && (
			<ModalWrapper onClick={handleWrapperClick}>
				<ModalContainer>
					<TitleSpan>참석의사 전달하기</TitleSpan>
					<ModalBox>
						<NameInput
							type="text"
							placeholder="이름을 입력해 주세요"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<PhoneInput
							placeholder="연락처를 입력해 주세요"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
						<GuestNumDropdown
							value={guestNum === 0 ? '' : guestNum}
							onChange={(e) => setguestNum(Number(e.target.value))}>
							<option value="" disabled hidden>
								추가 인원
							</option>
							{Array.from({ length: 3 }, (_, i) => (
								<option key={i} value={i}>
									외 {i}명
								</option>
							))}
						</GuestNumDropdown>

						<SubmitButton isActive={isButtonActive}>전달 하기</SubmitButton>
					</ModalBox>
				</ModalContainer>
			</ModalWrapper>
		)
	);
};

export default RSVPModal;

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
	height: 70.1rem;
	border-radius: 4rem;
	background: #fff;
	display: flex;
	flex-direction: column;
`;
const ModalBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 4.5rem;
`;

const TitleSpan = styled.p`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 30px;
	font-style: normal;
	line-height: 106.667%;
	letter-spacing: -0.057rem;
	margin: 8.3rem 49.1rem 6.5rem 10.7rem;
`;

const NameInput = styled.input`
	border-radius: 1.6rem;
	border: 0.1rem solid #a8a8a8;
	background: #fff;
	display: flex;
	width: 59.3rem;
	height: 3.2rem;
	align-items: flex-start;
	gap: 1rem;
	flex-shrink: 0;
	color: #808080;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	padding-left: 3.1rem;
	padding-top: 2.8rem;
	padding-bottom: 2.8rem;
`;

const PhoneInput = styled.input`
	border-radius: 1.6rem;
	border: 0.1rem solid #a8a8a8;
	background: #fff;
	display: flex;
	width: 59.3rem;
	height: 3.2rem;
	align-items: flex-start;
	gap: 1rem;
	flex-shrink: 0;
	color: #808080;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	padding-left: 3.1rem;
	padding-top: 2.8rem;
	padding-bottom: 2.8rem;
`;

const GuestNumDropdown = styled.select`
	border-radius: 1.6rem;
	border: 0.1rem solid #a8a8a8;
	background: #fff;
	display: flex;
	width: 63.3rem;
	height: 8.8rem;
	color: #808080;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	padding-left: 2.8rem;
	padding-right: 2.8rem;
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
