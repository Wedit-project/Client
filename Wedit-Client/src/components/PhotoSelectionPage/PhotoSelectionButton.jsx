import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Triangle from '../../assets/img/Triangle.svg?react';

const PhotoSelectionButton = ({ onFileSelect }) => {
	const handleFileChange = (event) => {
		if (event.target.files && event.target.files[0]) {
			const file = event.target.files[0];
			const reader = new FileReader();
			reader.onloadend = () => {
				const imageSrc = reader.result;
				onFileSelect(imageSrc);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<Container>
			<BackgroundBox>
				<DescriptionSpan>영역에 들어갈 사진을 선택해주세요.</DescriptionSpan>
				<SelectLabel htmlFor="file-input">사진-선택하기</SelectLabel>
				<SelectInput id="file-input" accept=".png, .jpg" type="file" onChange={handleFileChange} />
			</BackgroundBox>
			<TriangleIcon />
		</Container>
	);
};

export default PhotoSelectionButton;

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const BackgroundBox = styled.div`
	width: 40.4rem;
	height: 10.3rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: ${theme.colors.gray['0']};
`;

const TriangleIcon = styled(Triangle)`
	width: 3.4rem;
	height: 2.9rem;
`;

const DescriptionSpan = styled.span`
	display: block;
	color: ${theme.colors.gray['900']};
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
`;

const SelectLabel = styled.label`
	border: none;
	background: none;
	text-align: center;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
	text-decoration-line: underline;
`;

const SelectInput = styled.input`
	display: none;
`;
