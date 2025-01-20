import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoComponent from '../components/editpage/Logo';
import GalleryPhoto from '../components/PhotoSelectionPage/GalleryPhoto';
import PhotoSelectionButton from '../components/PhotoSelectionPage/PhotoSelectionButton';
import PageIndicator from '../components/PhotoSelectionPage/PageIndicator';
import NavButton from '../components/editpage/NavButton';

const GalleryPhotoSelectionPage = () => {
	const location = useLocation();
	const mainImage = location.state?.mainImage;
	const [isNextActive, setIsNextActive] = useState(false);
	const [previewImage, setPreviewImage] = useState(null);
	const [secondImage, setSecondImage] = useState(null);
	const [thirdImage, setThirdImage] = useState(null);
	const [step, setStep] = useState(1);

	const navigate = useNavigate();

	const handlePrevious = () => {
		navigate('/main-photo-selection');
	};

	const handleNext = () => {
		if (isNextActive) {
			if (step === 3) {
				navigate('/edit', {
					state: { selectedImages: [mainImage, previewImage, secondImage, thirdImage] },
				});
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
				left={step === 1 ? '66rem' : step === 2 ? '106.5rem' : '108.8rem'}>
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
	width: 12.8rem;
	height: 4.2rem;
	margin-top: 4.1rem;
	margin-left: 7.9rem;
	font-size: 3.2rem;
	font-family: Pretendard;
	font-weight: ${theme.font.bold.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0608rem;
`;

const DescriptionBox = styled.div`
	display: flex;
	margin-top: 3.2rem;
	margin-left: 11.4rem;
`;

const DescriptionSpan = styled.span`
	display: block;
	width: 35.2rem;
	height: 4.1rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
`;

const CautionSpan = styled.span`
	display: block;
	width: 36rem;
	height: 4.1rem;
	margin-left: 7.4rem;
	color: #e80c0c;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
`;

const Container = styled.div`
	margin-top: 3.4rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

const SelectionButtonBox = styled.div`
	position: absolute;
	top: ${(props) => props.top};
	left: ${(props) => props.left};
	z-index: 10;
`;

const IndicatorBox = styled.div`
	margin-top: 4.2rem;
`;

const NavBox = styled.div`
	margin-top: 2rem;
	margin-bottom: 6.3rem;
`;
