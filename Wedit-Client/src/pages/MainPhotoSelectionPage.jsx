import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoComponent from '../components/editpage/Logo';
import PhotoSelectionButton from '../components/PhotoSelectionPage/PhotoSelectionButton';
import PageIndicator from '../components/PhotoSelectionPage/PageIndicator';
import NavButton from '../components/editpage/NavButton';
import PhotoVector from '../assets/img/photovector1.svg?react';

const MainPhotoSelectionPage = () => {
	const [isNextActive, setIsNextActive] = useState(false);
	const [previewImage, setPreviewImage] = useState(null);
	const navigate = useNavigate();

	const handlePrevious = () => {
		navigate('/edit');
	};

	const handleNext = () => {
		if (isNextActive) {
			navigate('/gallery-photo-selection', { state: { mainImage: previewImage } });
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
						<LabelSpan>김도현❤️은수아</LabelSpan>
						<FamilyNameBox>
							아버지 김철현/어머니 김순자
							<br />
							아버지 은철수/어머니 박미영
						</FamilyNameBox>
						<LabelSpan>일자</LabelSpan>
						<DateBox>2024년 11월 30일/오후 12시</DateBox>
						<LabelSpan>위치</LabelSpan>
						<LocationBox>
							경기 성남시 수정구 성남대로 1342 <br />
							가천컨벤션센터
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
	margin-top: 4.3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
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
`;

const FamilyNameBox = styled.div`
	font-family: Pretendard;
	font-size: 3.2rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 4.5707rem;
	letter-spacing: -0.0608rem;
	margin-bottom: 5.742rem;
`;

const DateBox = styled.div`
	font-family: Pretendard;
	font-size: 3.2rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 2.9252rem;
	letter-spacing: -0.0608rem;
	margin-bottom: 8.194rem;
`;

const LocationBox = styled.div`
	font-family: Pretendard;
	font-size: 3.2rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.6565rem;
	letter-spacing: -0.0608rem;
`;

const SelectionButtonBox = styled.div`
	position: absolute;
	top: 36.7rem;
	left: 70rem;
	z-index: 10;
`;

const IndicatorBox = styled.div`
	margin-top: 4.2rem;
`;

const NavBox = styled.div`
	margin-top: 2rem;
	margin-bottom: 6.3rem;
`;
