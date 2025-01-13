import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

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
	margin-top: 10.7rem;
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

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	&::before,
	&::after {
		content: '';
		display: block;
		width: 49rem;
		height: 0.2rem;
		background-color: var(--brown, #3c140d);
	}

	&::before {
		margin-right: 5.2rem;
	}

	&::after {
		margin-left: 5.2rem;
	}
`;

const GalleryContainer = styled.div`
	margin-top: 4.9rem;
	display: flex;
	flex-direction: row;
	gap: 5.7rem;
`;

const GalleryImage2 = styled.img`
	background: url('src/assets/img/gallery2.png');
	width: 48.3rem;
	height: 62.8rem;
	border-radius: 1.6rem;
`;

const GalleryBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const GalleryImage3 = styled.img`
	background: url('src/assets/img/gallery3.png');
	width: 58.1rem;
	height: 29rem;
	border-radius: 1.6rem;
`;

const GalleryImage4 = styled.img`
	margin-top: 4.8rem;
	background: url('src/assets/img/gallery4.png');
	width: 58.1rem;
	height: 29rem;
	border-radius: 1.6rem;
`;
