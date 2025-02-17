import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoComponent from '../components/editpage/Logo';
import GalleryPhoto from '../components/PhotoSelectionPage/GalleryPhoto';
import PhotoSelectionButton from '../components/PhotoSelectionPage/PhotoSelectionButton';
import PageIndicator from '../components/PhotoSelectionPage/PageIndicator';
import NavButton from '../components/editpage/NavButton';
import { useRecoilState } from 'recoil';
import { selectedImagesState } from '../recoil/atoms';

const GalleryPhotoSelectionPage = () => {
	const [selectedImages, setSelectedImages] = useRecoilState(selectedImagesState);
	const mainImage = selectedImages[0];
	const [isNextActive, setIsNextActive] = useState(false);
	const [previewImage, setPreviewImage] = useState(null);
	const [secondImage, setSecondImage] = useState(null);
	const [thirdImage, setThirdImage] = useState(null);
	const [step, setStep] = useState(1);

	const navigate = useNavigate();
	const location = useLocation();
	const invitationId = useLocation().state?.invitationId;
	const isDataFetched = location.state?.isDataFetched;
	const isInitialSetup = location.state?.isInitialSetup;

	const handlePrevious = () => {
		setSelectedImages([]);
		navigate('/main-photo-selection', { state: { invitationId, isDataFetched, isInitialSetup } });
	};

	const handleNext = () => {
		if (isNextActive) {
			if (step === 3) {
				setSelectedImages([mainImage, previewImage, secondImage, thirdImage]); // Recoil 상태에 전체 이미지 저장
				// invitationId가 있을 때만 수정 페이지로 이동
				if (invitationId) {
					navigate(`/edit/${invitationId}`, { state: { invitationId, isDataFetched } });
				} else {
					navigate('/edit', { state: { isInitialSetup } }); // 새 청첩장 생성 시 수정 페이지로 이동
				}
			} else {
				setStep((prev) => prev + 1);
			}
			setIsNextActive(false);
		}
	};

	const handleFileSelect = (imageSrc) => {
		if (step === 1) {
			setPreviewImage(imageSrc);
			setIsNextActive(true);
		} else if (step === 2) {
			setSecondImage(imageSrc);
			setIsNextActive(true);
		} else if (step === 3) {
			setThirdImage(imageSrc);
			setIsNextActive(true);
		}
	};

	return (
		<Wrapper>
			<LogoComponent />
			<TitleBox>필수 정보</TitleBox>
			<DescriptionBox>
				<DescriptionSpan>청첩장에 들어갈 사진을 첨부해주세요.</DescriptionSpan>
				{step === 1 && !previewImage && (
					<CautionSpan>청첩장에 들어갈 사진을 첨부해 주세요!</CautionSpan>
				)}
				{step === 2 && !secondImage && (
					<CautionSpan>청첩장에 들어갈 사진을 첨부해 주세요!</CautionSpan>
				)}
				{step === 3 && !thirdImage && (
					<CautionSpan>청첩장에 들어갈 사진을 첨부해 주세요!</CautionSpan>
				)}
			</DescriptionBox>
			<SelectionButtonBox
				top={step === 1 ? '30.7rem' : step === 2 ? '20.5rem' : '50.5rem'}
				left={step === 1 ? '66rem' : step === 2 ? '106.5rem' : '108.8rem'}
				step={step}>
				{step === 1 && !previewImage && <PhotoSelectionButton onFileSelect={handleFileSelect} />}
				{step === 2 && !secondImage && <PhotoSelectionButton onFileSelect={handleFileSelect} />}
				{step === 3 && !thirdImage && <PhotoSelectionButton onFileSelect={handleFileSelect} />}
			</SelectionButtonBox>
			<Container>
				<GalleryPhoto
					previewImage={previewImage}
					secondImage={secondImage}
					thirdImage={thirdImage}
					step={step}
				/>
				<IndicatorBox>
					<PageIndicator step={step} />
				</IndicatorBox>
				<NavBox>
					<NavButton onPrevious={handlePrevious} onNext={handleNext} isNextActive={isNextActive} />
				</NavBox>
			</Container>
		</Wrapper>
	);
};

export default GalleryPhotoSelectionPage;

// CSS
const Wrapper = styled.div`
	width: 100%;
`;

const TitleBox = styled.div`
	/* width: 12.8rem; */
	height: 4.2rem;
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
	margin-top: 3.4rem;
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

const SelectionButtonBox = styled.div`
	position: absolute;
	top: ${(props) => {
		if (props.step === 1) return props.top;
		if (props.step === 2) return props.top;
		if (props.step === 3) return props.top;
	}};
	left: ${(props) => {
		if (props.step === 1) return props.left;
		if (props.step === 2) return props.left;
		if (props.step === 3) return props.left;
	}};
	z-index: 10;

	@media screen and (min-width: 1181px) and (max-width: 1366px) {
		/*ipad pro 가로*/
		top: ${(props) => {
			if (props.step === 2) return '19rem';
			if (props.step === 3) return '51rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '63rem';
			if (props.step === 2) return '105rem';
			if (props.step === 3) return '105rem';
		}};
	}

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		/*ipad air 가로*/
		top: ${(props) => {
			if (props.step === 2) return '22rem';
			if (props.step === 3) return '51rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '52rem';
			if (props.step === 2) return '95rem';
			if (props.step === 3) return '95rem';
		}};
	}

	@media screen and (min-width: 820px) and (max-width: 1024px) {
		/*ipad mini 가로*/
		top: ${(props) => {
			if (props.step === 2) return '22rem';
			if (props.step === 3) return '51rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '60rem';
			if (props.step === 2) return '120rem';
			if (props.step === 3) return '120rem';
		}};
	}

	@media screen and (min-width: 767px) and (max-width: 820px) {
		/*ipad air, mini 세로*/
		top: ${(props) => {
			if (props.step === 2) return '26rem';
			if (props.step === 3) return '55rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '55rem';
			if (props.step === 2) return '96rem';
			if (props.step === 3) return '96rem';
		}};
	}

	@media screen and (min-width: 320px) and (max-width: 375px) {
		top: ${(props) => {
			if (props.step === 1) return '65rem';
			if (props.step === 2) return '50rem';
			if (props.step === 3) return '80rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '50rem';
			if (props.step === 2) return '73rem';
			if (props.step === 3) return '73rem';
		}};
	}

	@media screen and (min-width: 375px) and (max-width: 480px) {
		top: ${(props) => {
			if (props.step === 1) return '65rem';
			if (props.step === 2) return '50rem';
			if (props.step === 3) return '80rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '60rem';
			if (props.step === 2) return '96rem';
			if (props.step === 3) return '96rem';
		}};
	}

	@media screen and (min-width: 481px) and (max-width: 575px) {
		top: ${(props) => {
			if (props.step === 1) return '65rem';
			if (props.step === 2) return '50rem';
			if (props.step === 3) return '80rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '45rem';
			if (props.step === 2) return '75rem';
			if (props.step === 3) return '75rem';
		}};
	}

	@media screen and (min-width: 575px) and (max-width: 645px) {
		top: ${(props) => {
			if (props.step === 1) return '65rem';
			if (props.step === 2) return '50rem';
			if (props.step === 3) return '80rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '55rem';
			if (props.step === 2) return '96rem';
			if (props.step === 3) return '96rem';
		}};
	}

	@media screen and (min-width: 645px) and (max-width: 767px) {
		top: ${(props) => {
			if (props.step === 1) return '65rem';
			if (props.step === 2) return '50rem';
			if (props.step === 3) return '80rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '65rem';
			if (props.step === 2) return '96rem';
			if (props.step === 3) return '96rem';
		}};
	}

	@media screen and (min-width: 568px) and (max-width: 898px) and (orientation: landscape) {
		top: ${(props) => {
			if (props.step === 1) return '35rem';
			if (props.step === 2) return '30rem';
			if (props.step === 3) return '56rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '50rem';
			if (props.step === 2) return '96rem';
			if (props.step === 3) return '96rem';
		}};
	}

	@media screen and (min-width: 898px) and (max-width: 933px) and (orientation: landscape) {
		top: ${(props) => {
			if (props.step === 1) return '35rem';
			if (props.step === 2) return '25rem';
			if (props.step === 3) return '51rem';
		}};
		left: ${(props) => {
			if (props.step === 1) return '65rem';
			if (props.step === 2) return '110rem';
			if (props.step === 3) return '110rem';
		}};
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
