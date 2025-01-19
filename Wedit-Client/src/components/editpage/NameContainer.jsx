import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const NameContainer = ({
	setGroomName,
	setGroomFatherName,
	setGroomMotherName,
	setBrideName,
	setBrideFatherName,
	setBrideMotherName,
}) => {
	return (
		<Container>
			<GroomNameContainer>
				<NameBox>
					<NameLabelSpan>신랑 이름:</NameLabelSpan>
					<NameInput type="text" onChange={(e) => setGroomName(e.target.value)} />
				</NameBox>
				<NameBox>
					<NameLabelSpan>신랑 아버지 이름:</NameLabelSpan>
					<NameInput type="text" onChange={(e) => setGroomFatherName(e.target.value)} />
				</NameBox>
				<NameBox>
					<NameLabelSpan>신랑 어머니 이름:</NameLabelSpan>
					<NameInput type="text" onChange={(e) => setGroomMotherName(e.target.value)} />
				</NameBox>
			</GroomNameContainer>
			<BrideNameContainer>
				<NameBox>
					<NameLabelSpan>신부 이름:</NameLabelSpan>
					<NameInput type="text" onChange={(e) => setBrideName(e.target.value)} />
				</NameBox>
				<NameBox>
					<NameLabelSpan>신부 아버지 이름:</NameLabelSpan>
					<NameInput type="text" onChange={(e) => setBrideFatherName(e.target.value)} />
				</NameBox>
				<NameBox>
					<NameLabelSpan>신부 어머니이름:</NameLabelSpan>
					<NameInput type="text" onChange={(e) => setBrideMotherName(e.target.value)} />
				</NameBox>
			</BrideNameContainer>
		</Container>
	);
};

export default NameContainer;

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const GroomNameContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const BrideNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 7.4rem;
`;

const NameBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.4rem;
`;

const NameLabelSpan = styled.span`
	width: 17.1rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
`;

const NameInput = styled.input`
	width: 35.3rem;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	border: 1px solid ${theme.colors.gray['600']};
	background: rgba(217, 217, 217, 0);
	color: ${theme.colors.gray['900']};
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
`;
