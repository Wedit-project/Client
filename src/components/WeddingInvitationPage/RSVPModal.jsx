import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Dropdown from '../../assets/icons/DropdownIcon.svg?react';
import { registerAttendance } from '../../apis/api/decisions';

const RSVPModal = ({ isVisible, onClose, invitationId }) => {
	const [name, setName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [guestNum, setGuestNum] = useState(null);
	const [sideSelect, setSideSelect] = useState(null);
	const [isSideDropdownOpen, setIsSideDropdownOpen] = useState(false);
	const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleWrapperClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const isButtonActive =
		name.trim() !== '' && phoneNumber.trim() !== '' && guestNum !== null && sideSelect !== null;

	const handleSideSelect = (value) => {
		if (value !== sideSelect) {
			setSideSelect(value);
			setIsSideDropdownOpen(false);
		}
	};

	const handleGuestSelect = (value) => {
		if (value !== guestNum) {
			setGuestNum(value);
			setIsGuestDropdownOpen(false);
		}
	};

	const handleSubmit = async () => {
		if (!isButtonActive || loading) return;

		setLoading(true);
		try {
			// side 값 변환
			const formattedSide = sideSelect === '신랑측' ? 'GROOM' : 'BRIDE';

			const response = await registerAttendance({
				name,
				phoneNumber,
				addPerson: guestNum ?? 0, // null이면 기본값 0 설정
				side: formattedSide,
				invitationId,
			});

			if (response?.success) {
				console.log('API 요청 성공: ', {
					name,
					phoneNumber,
					addPerson: guestNum ?? 0,
					side: formattedSide,
					invitationId,
				});
				alert('참석의사가 등록되었습니다.');
				onClose();
			} else {
				alert('참석의사 등록에 실패했습니다.');
			}
		} catch (error) {
			console.log('API 요청 실패: ', error);
		} finally {
			setLoading(false);
		}
	};

	return (
		isVisible && (
			<ModalWrapper onClick={handleWrapperClick}>
				<ModalContainer>
					<TitleSpan>참석의사 전달하기</TitleSpan>
					<ModalBox>
						<NameInput
							type="text"
							placeholder="이름"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
						<PhoneInput
							type="text"
							placeholder="연락처"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>

						<DropdownBox>
							<DropdownHeader onClick={() => setIsSideDropdownOpen(!isSideDropdownOpen)}>
								{sideSelect || '신랑측인지 신부측인지 선택'}
								<DropdownIcon />
							</DropdownHeader>
							{isSideDropdownOpen && (
								<DropdownList>
									<DropdownItem onClick={() => handleSideSelect('신랑측')}>신랑측</DropdownItem>
									<DropdownItem onClick={() => handleSideSelect('신부측')}>신부측</DropdownItem>
								</DropdownList>
							)}
						</DropdownBox>

						<DropdownBox>
							<DropdownHeader onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}>
								{guestNum === null ? '추가 인원' : `외 ${guestNum}명`}
								<DropdownIcon />
							</DropdownHeader>
							{isGuestDropdownOpen && (
								<DropdownList>
									{[0, 1, 2, 3, 4, 5].map((num) => (
										<DropdownItem key={num} onClick={() => handleGuestSelect(num)}>
											외 {num}명
										</DropdownItem>
									))}
								</DropdownList>
							)}
						</DropdownBox>

						<SubmitButton isActive={isButtonActive && !loading} onClick={handleSubmit}>
							{loading ? '전달 중' : '전달 하기'}
						</SubmitButton>
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
	height: 84.5rem;
	border-radius: 4rem;
	background: ${theme.colors.background.background2};
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
	font-size: 3rem;
	font-style: normal;
	line-height: 106.667%;
	letter-spacing: -0.057rem;
	margin: 8.3rem 49.1rem 6.5rem 10.7rem;
`;

const DropdownBox = styled.div`
	width: 59.3rem;
	position: relative;
	cursor: pointer;
`;

const DropdownHeader = styled.div`
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[500]};
	background: ${theme.colors.background.background2};
	padding: 2.8rem;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	color: ${theme.colors.gray[600]};
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const DropdownIcon = styled(Dropdown)`
	width: 2rem;
	height: 1rem;
`;

const DropdownList = styled.ul`
	position: absolute;
	top: 100%;
	left: 0;
	width: 100%;
	background: ${theme.colors.background.background2};
	border: 0.1rem solid ${theme.colors.gray[500]};
	margin-top: 0.5rem;
	padding: 0;
	list-style: none;
	z-index: 1000;
	width: 63.1rem;
`;

const DropdownItem = styled.li`
	height: 2.7rem;
	padding-top: 0.8rem;
	padding-left: 1.9rem;
	font-size: ${theme.fontSize.medium};
	color: ${theme.colors.gray[600]};
	cursor: pointer;

	&:hover {
		background: ${theme.colors.gray[200]};
	}
`;

const NameInput = styled.input`
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[500]};
	background: ${theme.colors.background.background2};
	display: flex;
	width: 59.3rem;
	height: 8.2rem;
	align-items: flex-start;
	gap: 1rem;
	flex-shrink: 0;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	font-family: Pretendard;
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	padding-left: 3.1rem;
	padding-top: 2.8rem;
	padding-bottom: 2.8rem;

	&::placeholder {
		color: ${theme.colors.gray[600]};
	}
`;

const PhoneInput = styled.input`
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[500]};
	background: ${theme.colors.background.background2};
	display: flex;
	width: 59.3rem;
	height: 8.2rem;
	align-items: flex-start;
	gap: 1rem;
	flex-shrink: 0;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	font-family: Pretendard;
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	padding-left: 3.1rem;
	padding-top: 2.8rem;
	padding-bottom: 2.8rem;

	&::placeholder {
		color: ${theme.colors.gray[600]};
	}
`;

const SubmitButton = styled.button`
	margin-top: 1.7rem;
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[500]};
	background: ${({ isActive }) => (isActive ? '#ACB66D' : 'rgba(172, 182, 109, 0.5)')};
	cursor: ${({ isActive }) => (isActive ? 'pointer' : 'default')};
	display: flex;
	width: 19.8rem;
	height: 5.8rem;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	color: ${theme.colors.background.background2};
	text-align: center;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	margin-bottom: 5.8rem;
`;
