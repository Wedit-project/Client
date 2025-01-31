import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Dropdown from '../../assets/icons/DropdownIcon.svg?react';

const RSVPModal = ({ isVisible, onClose }) => {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [guestNum, setGuestNum] = useState(null);
	const [sideSelect, setSideSelect] = useState(null);
	const [isSideDropdownOpen, setIsSideDropdownOpen] = useState(false);
	const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

	const handleWrapperClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const isButtonActive =
		name.trim() !== '' && phone.trim() !== '' && guestNum !== null && sideSelect !== null;

	const handleSideSelect = (value) => {
		setSideSelect(value);
		setIsSideDropdownOpen(false);
	};

	const handleGuestSelect = (value) => {
		setGuestNum(value);
		setIsGuestDropdownOpen(false);
	};

	return (
		isVisible && (
			<ModalWrapper onClick={handleWrapperClick}>
				<ModalContainer>
					<TitleSpan>참석의사 전달하기</TitleSpan>
					<ModalBox>
						<DropdownBox>
							<DropdownHeader onClick={() => setIsSideDropdownOpen((prev) => !prev)}>
								{sideSelect === null ? '신랑측인지 신부측인지 선택해 주세요' : sideSelect}
								<DropdownIcon />
							</DropdownHeader>
							{isSideDropdownOpen && (
								<DropdownList>
									<DropdownItem onClick={() => handleSideSelect('신랑측')}>신랑측</DropdownItem>
									<DropdownItem onClick={() => handleSideSelect('신부측')}>신부측</DropdownItem>
								</DropdownList>
							)}
						</DropdownBox>
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
						<DropdownBox>
							<DropdownHeader onClick={() => setIsGuestDropdownOpen((prev) => !prev)}>
								{guestNum === null ? '추가 인원' : `외 ${guestNum}명`}
								<DropdownIcon />
							</DropdownHeader>
							{isGuestDropdownOpen && (
								<DropdownList>
									<DropdownItem onClick={() => handleGuestSelect(0)}>외 0명</DropdownItem>
									<DropdownItem onClick={() => handleGuestSelect(1)}>외 1명</DropdownItem>
									<DropdownItem onClick={() => handleGuestSelect(2)}>외 2명</DropdownItem>
									<DropdownItem onClick={() => handleGuestSelect(3)}>외 3명</DropdownItem>
									<DropdownItem onClick={() => handleGuestSelect(4)}>외 4명</DropdownItem>
									<DropdownItem onClick={() => handleGuestSelect(5)}>외 5명</DropdownItem>
								</DropdownList>
							)}
						</DropdownBox>

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
	width: 63.3rem;
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
	height: 3.2rem;
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
	height: 3.2rem;
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
