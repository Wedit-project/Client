import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';

const Gallery = ({ $variant = 'basic' }) => {
	const [isImage2Loading, setIsImage2Loading] = useState(true);
	const [isImage3Loading, setIsImage3Loading] = useState(true);
	const [isImage4Loading, setIsImage4Loading] = useState(true);

	return (
		<GalleryWrapper>
			<GallerySpan $variant={$variant}>갤러리</GallerySpan>
			<GalleryContainer>
				<GalleryImage2Box>
					{isImage2Loading && <Skeleton />}
					<GalleryImage2
						isLoading={isImage2Loading}
						src="src/assets/img/gallery2.png"
						alt="Gallery Image 2"
						onLoad={() => setIsImage2Loading(false)}
					/>
				</GalleryImage2Box>

				<GalleryBox>
					<GalleryImage3Box>
						{isImage3Loading && <Skeleton />}
						<GalleryImage3
							isLoading={isImage3Loading}
							src="src/assets/img/gallery3.png"
							alt="Gallery Image 3"
							onLoad={() => setIsImage3Loading(false)}
						/>
					</GalleryImage3Box>

					<GalleryImage4Box>
						{isImage4Loading && <Skeleton />}
						<GalleryImage4
							isLoading={isImage4Loading}
							src="src/assets/img/gallery4.png"
							alt="Gallery Image 4"
							onLoad={() => setIsImage4Loading(false)}
						/>
					</GalleryImage4Box>
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
	color: ${theme.colors.green.main};
	font-size: 4.3878rem;
	font-style: normal;
	line-height: 66.667%;
	letter-spacing: -0.0834rem;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			color: ${theme.colors.traditionalWedding.invitation5};
			&::before,
			&::after {
				content: '';
				display: block;
				width: 49rem;
				height: 0.2rem;
				background-color: ${theme.colors.traditionalWedding.invitation5};
			}

			&::before {
				margin-right: 5.2rem;
			}

			&::after {
				margin-left: 5.2rem;
			}
		`}
`;

const GalleryContainer = styled.div`
	margin-top: 4.9rem;
	display: flex;
	flex-direction: row;
	gap: 5.7rem;
`;

const GalleryImage2Box = styled.div`
	width: 48.3rem;
	height: 62.8rem;
	border-radius: 1.6rem;
	position: relative;
	overflow: hidden;
`;

const GalleryImage2 = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 1.6rem;
	display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;

const GalleryBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4.8rem;
`;

const GalleryImage3Box = styled.div`
	width: 58.1rem;
	height: 29rem;
	border-radius: 1.6rem;
	position: relative;
	overflow: hidden;
`;

const GalleryImage3 = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 1.6rem;
	display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;

const GalleryImage4Box = styled.div`
	width: 58.1rem;
	height: 29rem;
	border-radius: 1.6rem;
	position: relative;
	overflow: hidden;
`;

const GalleryImage4 = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 1.6rem;
	display: ${({ isLoading }) => (isLoading ? 'none' : 'block')};
`;

const Skeleton = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 1.6rem;
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
	animation: shimmer 1.5s infinite;
	@keyframes shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
`;
