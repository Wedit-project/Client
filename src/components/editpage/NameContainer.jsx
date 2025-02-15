import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { useRecoilState } from 'recoil';
import {
	groomNameState,
	groomFatherNameState,
	groomMotherNameState,
	brideNameState,
	brideFatherNameState,
	brideMotherNameState,
} from '../../recoil/atoms';

const NameContainer = () => {
	const [groomName, setGroomName] = useRecoilState(groomNameState);
	const [groomFatherName, setGroomFatherName] = useRecoilState(groomFatherNameState);
	const [groomMotherName, setGroomMotherName] = useRecoilState(groomMotherNameState);
	const [brideName, setBrideName] = useRecoilState(brideNameState);
	const [brideFatherName, setBrideFatherName] = useRecoilState(brideFatherNameState);
	const [brideMotherName, setBrideMotherName] = useRecoilState(brideMotherNameState);

	return (
		<Container>
			<GroomNameContainer>
				<NameBox>
					<NameLabelSpan>신랑 이름:</NameLabelSpan>
					<NameInput type="text" value={groomName} onChange={(e) => setGroomName(e.target.value)} />
				</NameBox>
				<NameBox>
					<NameLabelSpan>신랑 아버지 이름:</NameLabelSpan>
					<NameInput
						type="text"
						value={groomFatherName}
						onChange={(e) => setGroomFatherName(e.target.value)}
					/>
				</NameBox>
				<NameBox>
					<NameLabelSpan>신랑 어머니 이름:</NameLabelSpan>
					<NameInput
						type="text"
						value={groomMotherName}
						onChange={(e) => setGroomMotherName(e.target.value)}
					/>
				</NameBox>
			</GroomNameContainer>
			<BrideNameContainer>
				<NameBox>
					<NameLabelSpan>신부 이름:</NameLabelSpan>
					<NameInput type="text" value={brideName} onChange={(e) => setBrideName(e.target.value)} />
				</NameBox>
				<NameBox>
					<NameLabelSpan>신부 아버지 이름:</NameLabelSpan>
					<NameInput
						type="text"
						value={brideFatherName}
						onChange={(e) => setBrideFatherName(e.target.value)}
					/>
				</NameBox>
				<NameBox>
					<NameLabelSpan>신부 어머니 이름:</NameLabelSpan>
					<NameInput
						type="text"
						value={brideMotherName}
						onChange={(e) => setBrideMotherName(e.target.value)}
					/>
				</NameBox>
			</BrideNameContainer>
		</Container>
	);
};

export default NameContainer;

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2.3rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		margin-top: 10rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		flex-direction: column;
		margin-top: 10rem;
	}
	@media (max-width: 480px) {
		flex-direction: column;
		margin-top: 10rem;
	}
`;

const GroomNameContainer = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) and (max-width: 1024px) {
		gap: 2rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		gap: 1rem;
	}
	@media (max-width: 480px) {
		gap: 1rem;
	}
`;

const BrideNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 7.4rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		gap: 2rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 8rem;
		margin-left: 0rem;
		gap: 1rem;
	}
	@media (max-width: 480px) {
		margin-top: 8rem;
		margin-left: 0rem;
		gap: 1rem;
	}
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

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		max-width: 17.1rem;
	}

	@media (min-width: 480px) and (max-width: 768px) {
		font-size: 3rem;
		width: 22rem;
	}
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

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		max-width: 35.3rem;
	}
`;
