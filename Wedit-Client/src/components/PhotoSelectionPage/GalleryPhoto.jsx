import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import PhotoVector1 from '../../assets/img/photovector1.svg?react';
import PhotoVector2 from '../../assets/img/photovector2.svg?react';
import PhotoVector3 from '../../assets/img/photovector3.svg?react';

const GalleryPhoto = ({ previewImage, secondImage, thirdImage, step }) => {
	return (
		<Container>
			<FirstPhotoBox>
				{/* FirstPhotoBox에 previewImage가 있으면 해당 이미지를 표시 */}
				{previewImage ? (
					<img
						src={previewImage}
						alt="Selected"
						style={{ width: '100%', height: '100%', borderRadius: '1.6rem' }}
					/>
				) : (
					<PhotoVectorIcon1 />
				)}
			</FirstPhotoBox>
			<NextPhotoBox>
				<SecondPhotoBox isActive={step >= 2}>
					{/* SecondPhotoBox에 secondImage가 있으면 해당 이미지를 표시 */}
					{step >= 2 && secondImage ? (
						<img
							src={secondImage}
							alt="Selected"
							style={{ width: '100%', height: '100%', borderRadius: '1.6rem' }}
						/>
					) : step === 1 ? (
						<PhotoVectorIcon2 />
					) : (
						<PhotoVectorIcon3 />
					)}
				</SecondPhotoBox>
				<ThirdPhotoBox isActive={step >= 3}>
					{/* ThirdPhotoBox에 thirdImage가 있으면 해당 이미지를 표시 */}
					{step >= 3 && thirdImage ? (
						<img
							src={thirdImage}
							alt="Selected"
							style={{ width: '100%', height: '100%', borderRadius: '1.6rem' }}
						/>
					) : // ThirdPhotoBox가 세 번째 단계에서 선택되었을 때만 PhotoVectorIcon3을 표시
					step === 1 || step === 2 ? (
						<PhotoVectorIcon2 />
					) : (
						<PhotoVectorIcon3 />
					)}
				</ThirdPhotoBox>
			</NextPhotoBox>
		</Container>
	);
};

export default GalleryPhoto;

const Container = styled.div`
	display: flex;
	flex-direction: row;
`;

const FirstPhotoBox = styled.div`
	width: 43.9rem;
	height: 57.1rem;
	border-radius: 1.6rem;
	background: ${theme.colors.green['50%']};
	display: flex;
	justify-content: center;
	align-items: center;
`;
const NextPhotoBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 1.6rem;
`;

const SecondPhotoBox = styled.div`
	width: 58rem;
	height: 27.3rem;
	border-radius: 1.6rem;
	background: ${(props) => (props.isActive ? theme.colors.green['50%'] : theme.colors.gray['300'])};
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 2.5rem;
`;

const ThirdPhotoBox = styled.div`
	width: 58rem;
	height: 27.3rem;
	border-radius: 1.6rem;
	background: ${(props) => (props.isActive ? theme.colors.green['50%'] : theme.colors.gray['300'])};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const PhotoVectorIcon1 = styled(PhotoVector1)`
	width: 24rem;
	height: 21rem;
`;

const PhotoVectorIcon2 = styled(PhotoVector2)`
	width: 16.9rem;
	height: 14.7rem;
`;

const PhotoVectorIcon3 = styled(PhotoVector3)`
	width: 16.9rem;
	height: 14.7rem;
`;
