import React from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const Gallery = () => {
	return (
		<GalleryWrapper>
			<GallerySpan>갤러리</GallerySpan>
			<GalleryContainer>
				<GalleryImage2 />
				<GalleryBox>
					<GalleryImage3 />
					<GalleryImage4 />
				</GalleryBox>
			</GalleryContainer>
		</GalleryWrapper>
	);
};
export default Gallery;

// CSS
const GalleryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const GallerySpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	color: var(--brown, #3c140d);
	font-size: 4.3878rem;
	font-style: normal;
	line-height: 66.667%;
	letter-spacing: -0.0834rem;
`;

const GalleryContainer = styled.div`
	margin-top: 10rem;
	display: flex;
	flex-direction: row;
	gap: 11rem;
`;

const GalleryImage2 = styled.img`
	background: url('src/assets/img/gallery2.png');
	width: 48.266rem;
	height: 62.801rem;
	border-radius: 1.828rem;
`;

const GalleryBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const GalleryImage3 = styled.img`
	background: url('src/assets/img/gallery3.png');
	width: 58.047rem;
	height: 28.978rem;
	border-radius: 1.828rem;
`;

const GalleryImage4 = styled.img`
	background: url('src/assets/img/gallery4.png');
	width: 58.047rem;
	height: 28.978rem;
	border-radius: 1.828rem;
	margin-top: 5rem;
`;
