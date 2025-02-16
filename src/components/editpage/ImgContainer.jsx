import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';
import PhotoPrev from '../../assets/img/PhotoPrev.svg?react';
import Plus from '../../assets/img/Plus.svg?react';

const ImgContainer = ({ photos, invitationId, isDataFetched, isInitialSetup }) => {
	const navigate = useNavigate();

	const handleAddPhotoClick = () => {
		navigate('/main-photo-selection', { state: { invitationId, isDataFetched, isInitialSetup } });
	};

	return (
		<Container>
			<ImgLabelSpan>사진 첨부 (Png, Jpg 가능 / 장당 5MB 이내)</ImgLabelSpan>
			<UploadImgBox>
				{photos.length > 0 ? (
					photos.map((photo, index) => (
						<PhotoContainer key={index}>
							<PhotoPrevIcon />
							{photo && <OverlayPhoto src={photo.url || photo} alt={`preview-${index}`} />}
						</PhotoContainer>
					))
				) : (
					<>
						<PhotoPrevIcon />
						<PhotoPrevIcon />
						<PhotoPrevIcon />
						<PhotoPrevIcon />
					</>
				)}
				<AddPhotoButton onClick={handleAddPhotoClick}>
					<PlusIcon />
				</AddPhotoButton>
			</UploadImgBox>
		</Container>
	);
};

export default ImgContainer;

const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.8rem;
	width: 71.3%;

	@media screen and (max-width: 1366px) {
		width: auto;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin-top: 8rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 8rem;
	}
	@media (max-width: 480px) {
		margin-top: 15rem;
	}
`;

const ImgLabelSpan = styled.span`
	width: 44.5rem;
	height: 4.1rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;

	@media (min-width: 480px) and (max-width: 768px) {
		font-size: 3.6rem;
		width: 62rem;
	}
	@media (max-width: 480px) {
		font-size: 3.6rem;
		width: 70rem;
	}
`;

const UploadImgBox = styled.div`
	margin-top: 1.45rem;
	display: flex;
`;

const PhotoContainer = styled.div`
	position: relative;
	width: 10.2rem;
	height: 10.7rem;
	margin-right: 1rem;
`;

const PhotoPrevIcon = styled(PhotoPrev)`
	width: 10.2rem;
	height: 10.7rem;
	margin-right: 1rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 12.5rem;
		height: 12.7rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		width: 12.5rem;
		height: 12.7rem;
	}
	@media (max-width: 480px) {
		width: 16rem;
		height: 16rem;
	}
`;

const OverlayPhoto = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 0.4rem;
`;

const AddPhotoButton = styled.button`
	width: 10.2rem;
	height: 10.7rem;
	border: none;
	border-radius: 0.4rem;
	background-color: ${theme.colors.gray['300']};

	@media (min-width: 768px) and (max-width: 1024px) {
		width: 12.5rem;
		height: 12.7rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		width: 12.5rem;
		height: 12.7rem;
	}
	@media (max-width: 480px) {
		width: 16rem;
		height: 16rem;
	}
`;

const PlusIcon = styled(Plus)`
	width: 4.9rem;
	height: 5.1rem;
`;
