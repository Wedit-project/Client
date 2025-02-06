import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import DaumPostcode from 'react-daum-postcode';
import LogoComponent from '../components/editpage/Logo';
import NameContainer from '../components/editpage/NameContainer';
import InfoContainer from '../components/editpage/InfoContainer';
import ImgContainer from '../components/editpage/ImgContainer';
import NavButton from '../components/editpage/NavButton';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedThemeState } from '../recoil/atoms';
import {
	groomNameState,
	brideNameState,
	groomFatherNameState,
	groomMotherNameState,
	brideFatherNameState,
	brideMotherNameState,
	addressState,
	addressDetailState,
	selectedDateState,
	selectedTimeState,
	selectedImagesState,
	contentState,
} from '../recoil/atoms';

const EditPage = () => {
	const [content, setContent] = useRecoilState(contentState);
	const navigate = useNavigate();

	const selectedImages = useRecoilValue(selectedImagesState);

	const selectedTheme = useRecoilValue(selectedThemeState);

	const groomName = useRecoilValue(groomNameState);
	const brideName = useRecoilValue(brideNameState);
	const groomFatherName = useRecoilValue(groomFatherNameState);
	const groomMotherName = useRecoilValue(groomMotherNameState);
	const brideFatherName = useRecoilValue(brideFatherNameState);
	const brideMotherName = useRecoilValue(brideMotherNameState);

	const [address, setAddress] = useRecoilState(addressState);
	const [addressDetail, setAddressDetail] = useRecoilState(addressDetailState);
	const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
	const [selectedTime, setSelectedTime] = useRecoilState(selectedTimeState);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isNextActive, setIsNextActive] = useState(false);

	const handleAddressComplete = (data) => {
		setAddress(data.address);
		setIsModalOpen(false);
	};

	useEffect(() => {
		const allFieldsFilled =
			groomName &&
			groomFatherName &&
			groomMotherName &&
			brideName &&
			brideFatherName &&
			brideMotherName &&
			address &&
			addressDetail &&
			selectedDate &&
			selectedTime &&
			selectedImages.length > 0;

		setIsNextActive(allFieldsFilled);
	}, [
		groomName,
		groomFatherName,
		groomMotherName,
		brideName,
		brideFatherName,
		brideMotherName,
		address,
		addressDetail,
		selectedDate,
		selectedTime,
		selectedImages,
	]);

	const handlePrevious = () => {
		navigate('/my');
	};

	const handleNext = () => {
		if (isNextActive) {
			const newContent = {
				groom: groomName,
				bride: brideName,
				groomF: groomFatherName,
				groomM: groomMotherName,
				brideF: brideFatherName,
				brideM: brideMotherName,
				address: address,
				extraAddress: addressDetail,
				date: selectedDate.toISOString().split('T')[0],
				time: formatTime(selectedTime),
				theme: selectedTheme,
			};
			setContent(newContent);

			navigate('/option-selection');
		}
	};

	const formatTime = (date) => {
		if (!date) return '00:00:00';
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');
		return `${hours}:${minutes}:${seconds}`;
	};

	return (
		<Wrapper>
			<LogoComponent />
			<TitleBox>필수 정보</TitleBox>
			<Container>
				<NameContainer />
				<InfoContainer
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					handleAddressComplete={handleAddressComplete}
				/>
				<ImgContainer photos={selectedImages} />
				<CautionBox>{!isNextActive && '필수 정보를 모두 입력해 주세요!'}</CautionBox>
				<NavBox>
					<NavButton onPrevious={handlePrevious} onNext={handleNext} isNextActive={isNextActive} />
				</NavBox>
			</Container>

			{/* 주소 검색 모달 */}
			{isModalOpen && (
				<ModalBox>
					<ModalContentBox>
						<ModalHeaderBox>
							<KakaoServiceTextSpan>Kakao 우편번호 서비스</KakaoServiceTextSpan>
							<HeaderLine />
						</ModalHeaderBox>
						<DaumPostcode onComplete={handleAddressComplete} style={{ display: 'block' }} />
					</ModalContentBox>
				</ModalBox>
			)}
		</Wrapper>
	);
};

export default EditPage;

// CSS
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const TitleBox = styled.div`
	margin-top: 4.1rem;
	margin-left: 8.3rem;
	font-size: 3.2rem;
	font-family: Pretendard;
	font-weight: ${theme.font.bold.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0608rem;
`;

const Container = styled.div`
	margin-top: 2.3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: 1023px) and (max-width: 1024px) {
		margin-top: 12rem;
	}
`;

const ModalBox = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContentBox = styled.div`
	width: 90.3rem;
	height: auto;
	background: ${theme.colors.gray['0']};

	@media screen and (min-width: 852px) and (max-width: 884px) {
		max-height: 80vh;
		overflow-y: auto;
	}

	@media screen and (min-width: 393px) and (max-width: 412px) {
		width: 80%;
	}
`;

const ModalHeaderBox = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 393px) and (max-width: 412px) {
		display: none;
	}
`;

const KakaoServiceTextSpan = styled.span`
	font-family: Pretendard;
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
	margin: 1.2rem 11.8rem 1.1rem 2.4rem;
`;

const HeaderLine = styled.hr`
	width: 90.3rem;
	height: 0.1rem;
	background: var(--black, #000);
`;

const CautionBox = styled.div`
	width: 29.3rem;
	height: 4.1rem;
	margin-top: 4.8rem;
	margin-bottom: 1.4rem;
	color: #e80c0c;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
`;

const NavBox = styled.div`
	margin-bottom: 7.9rem;
`;
