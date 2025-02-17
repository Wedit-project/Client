import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoComponent from '../components/editpage/Logo';
import PhotoSelectionButton from '../components/PhotoSelectionPage/PhotoSelectionButton';
import PageIndicator from '../components/PhotoSelectionPage/PageIndicator';
import NavButton from '../components/editpage/NavButton';
import PhotoVector from '../assets/img/photovector1.svg?react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { selectedImagesState } from '../recoil/atoms';
import {
	groomNameState,
	groomFatherNameState,
	groomMotherNameState,
	brideNameState,
	brideFatherNameState,
	brideMotherNameState,
	addressState,
	addressDetailState,
	selectedDateState,
	selectedTimeState,
} from '../recoil/atoms';

const MainPhotoSelectionPage = () => {
	const groomName = useRecoilValue(groomNameState);
	const groomFatherName = useRecoilValue(groomFatherNameState);
	const groomMotherName = useRecoilValue(groomMotherNameState);
	const brideName = useRecoilValue(brideNameState);
	const brideFatherName = useRecoilValue(brideFatherNameState);
	const brideMotherName = useRecoilValue(brideMotherNameState);
	const address = useRecoilValue(addressState);
	const addressDetail = useRecoilValue(addressDetailState);
	const selectedDate = useRecoilValue(selectedDateState);
	const selectedTime = useRecoilValue(selectedTimeState);
	const formattedDate = selectedDate
		? `${selectedDate.getFullYear()}년 ${selectedDate.getMonth() + 1}월 ${selectedDate.getDate()}일`
		: '날짜 없음';

	const formattedTime = selectedTime
		? ` ${selectedTime.getHours() >= 12 ? '오후' : '오전'} ${selectedTime.getHours() % 12 || 12}시`
		: '시간 없음';

	const [isNextActive, setIsNextActive] = useState(false);
	const [previewImage, setPreviewImage] = useState(null);
	const [selectedImages, setSelectedImages] = useRecoilState(selectedImagesState);
	const navigate = useNavigate();
	const location = useLocation();
	const invitationId = useLocation().state?.invitationId;
	const isDataFetched = location.state?.isDataFetched;
	const isInitialSetup = location.state?.isInitialSetup;

	const handlePrevious = () => {
		if (invitationId) {
			navigate(`/edit/${invitationId}`, { state: { invitationId, isDataFetched } });
		} else {
			navigate('/edit', { state: { isInitialSetup } });
		}
	};

	const handleNext = () => {
		if (isNextActive) {
			setSelectedImages([previewImage]);
			navigate('/gallery-photo-selection', {
				state: { invitationId, isDataFetched, isInitialSetup },
			});
		}
	};

	const handleFileSelect = (imageSrc) => {
		setPreviewImage(imageSrc);
		setIsNextActive(true);
	};

	return (
		<Wrapper>
			<LogoComponent />
			<TitleBox>필수 정보</TitleBox>
			<DescriptionBox>
				<DescriptionSpan>청첩장에 들어갈 사진을 첨부해주세요.</DescriptionSpan>
				{!previewImage && <CautionSpan>청첩장에 들어갈 사진을 첨부해 주세요!</CautionSpan>}
			</DescriptionBox>
			<SelectionButtonBox>
				{!previewImage && <PhotoSelectionButton onFileSelect={handleFileSelect} />}
			</SelectionButtonBox>
			<Container>
				<ContentContainer>
					<MainPhotoBox>
						{previewImage ? (
							<img
								src={previewImage}
								alt="미리보기"
								style={{ width: '100%', height: '100%', borderRadius: '5rem' }}
							/>
						) : (
							<PhotoVectorIcon />
						)}
					</MainPhotoBox>
					<RequiredInfoBox>
						<LabelSpan>
							{groomName} ❤️ {brideName}
						</LabelSpan>
						<FamilyNameBox>
							아버지 {groomFatherName} / 어머니 {groomMotherName}
							<br />
							아버지 {brideFatherName} / 어머니 {brideMotherName}
						</FamilyNameBox>
						<LabelSpan>일자</LabelSpan>
						<DateBox>
							{formattedDate} / {formattedTime}
						</DateBox>
						<LabelSpan>위치</LabelSpan>
						<LocationBox>
							{address} <br />
							{addressDetail}
						</LocationBox>
					</RequiredInfoBox>
				</ContentContainer>
				<IndicatorBox>
					<PageIndicator step={0} />
				</IndicatorBox>
				<NavBox>
					<NavButton onPrevious={handlePrevious} onNext={handleNext} isNextActive={isNextActive} />
				</NavBox>
			</Container>
		</Wrapper>
	);
};

export default MainPhotoSelectionPage;

// CSS
const Wrapper = styled.div`
	width: 100%;
`;

const TitleBox = styled.div`
	/* width: 12.8rem;
	height: 4.2rem; */
	margin-top: 4.1rem;
	margin-left: 7.9rem;
	font-size: 3.2rem;
	font-family: Pretendard;
	font-weight: ${theme.font.bold.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0608rem;

	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 8rem;
		font-size: 4rem;
	}
	@media (max-width: 480px) {
		margin-top: 8rem;
		font-size: 5rem;
	}
`;

const DescriptionBox = styled.div`
	display: flex;
	margin-top: 3.2rem;
	margin-left: 11.4rem;

	@media (max-width: 480px) {
		margin-top: 8rem;
	}
`;

const DescriptionSpan = styled.span`
	display: block;
	/* width: 35.2rem; */
	height: 4.1rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;

	@media (max-width: 480px) {
		font-size: 3.8rem;
	}
`;

const CautionSpan = styled.span`
	display: block;
	/* width: 36rem; */
	height: 4.1rem;
	margin-left: 7.4rem;
	color: #e80c0c;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;

	@media (max-width: 480px) {
		font-size: 3.8rem;
	}
`;

const Container = styled.div`
	margin-top: 4.3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;

	@media (max-width: 480px) {
		font-size: 3.8rem;
	}

	@media screen and (max-width: 767px) {
		margin-top: 25rem;
	}

	@media screen and (min-width: 568px) and (max-width: 898px) and (orientation: landscape) {
		margin-top: 4.3rem;
	}

	@media screen and (min-width: 898px) and (max-width: 933px) and (orientation: landscape) {
		margin-top: 4.3rem;
	}
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const MainPhotoBox = styled.div`
	width: 48.7rem;
	height: 55.5rem;
	border-radius: 5rem;
	background: ${theme.colors.green['50%']};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PhotoVectorIcon = styled(PhotoVector)`
	width: 24rem;
	height: 21rem;
`;

const RequiredInfoBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2.2rem;
	margin-left: 3.4rem;
`;

const LabelSpan = styled.span`
	font-family: Pretendard;
	font-size: 3.2rem;
	font-weight: ${theme.font.bold.fontWeight};
	line-height: 2.9252rem;
	letter-spacing: -0.0608rem;
	margin-bottom: 2.9rem;

	@media (min-width: 480px) and (max-width: 768px) {
		font-size: 4rem;
	}
	@media (max-width: 480px) {
		font-size: 5rem;
	}
`;

const FamilyNameBox = styled.div`
	font-family: Pretendard;
	font-size: 3.2rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 4.5707rem;
	letter-spacing: -0.0608rem;
	margin-bottom: 5.742rem;

	@media (min-width: 480px) and (max-width: 768px) {
		font-size: 4rem;
	}
	@media (max-width: 480px) {
		font-size: 5rem;
	}
`;

const DateBox = styled.div`
	font-family: Pretendard;
	font-size: 3.2rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 2.9252rem;
	letter-spacing: -0.0608rem;
	margin-bottom: 8.194rem;

	@media (min-width: 480px) and (max-width: 768px) {
		font-size: 4rem;
	}
	@media (max-width: 480px) {
		font-size: 5rem;
	}
`;

const LocationBox = styled.div`
	font-family: Pretendard;
	font-size: 3.2rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.6565rem;
	letter-spacing: -0.0608rem;

	@media (min-width: 480px) and (max-width: 768px) {
		font-size: 4rem;
	}
	@media (max-width: 480px) {
		font-size: 5rem;
	}
`;

const SelectionButtonBox = styled.div`
	position: absolute;
	top: 30rem;
	left: 75rem;
	z-index: 10;

	@media screen and (min-width: 1181px) and (max-width: 1366px) {
		/*ipad pro 가로*/
		left: 70rem;
	}

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		/*ipad air 가로*/
		left: 59rem;
	}

	@media screen and (min-width: 821px) and (max-width: 1024px) {
		/*ipad mini 가로*/
		top: 35rem;
		left: 75rem;
	}

	@media screen and (min-width: 780px) and (max-width: 820px) {
		/*ipad air 세로*/
		left: 60rem;
	}

	@media screen and (min-width: 767px) and (max-width: 779px) {
		/*ipad mini 세로*/
		top: 38rem;
		left: 85rem;
	}

	@media screen and (min-width: 320px) and (max-width: 375px) {
		top: 65rem;
		left: 50rem;
	}

	@media screen and (min-width: 375px) and (max-width: 480px) {
		top: 65rem;
		left: 65rem;
	}

	@media screen and (min-width: 481px) and (max-width: 575px) {
		top: 65rem;
		left: 50rem;
	}

	@media screen and (min-width: 575px) and (max-width: 645px) {
		top: 65rem;
		left: 62rem;
	}

	@media screen and (min-width: 645px) and (max-width: 767px) {
		top: 65rem;
		left: 70rem;
	}

	@media screen and (min-width: 568px) and (max-width: 898px) and (orientation: landscape) {
		top: 40rem;
		left: 65rem;
	}

	@media screen and (min-width: 898px) and (max-width: 933px) and (orientation: landscape) {
		top: 40rem;
		left: 60rem;
	}
`;

const IndicatorBox = styled.div`
	margin-top: 4.2rem;

	@media (max-width: 480px) {
		margin-top: 8rem;
	}
`;

const NavBox = styled.div`
	margin-top: 2rem;
	margin-bottom: 6.3rem;
`;
