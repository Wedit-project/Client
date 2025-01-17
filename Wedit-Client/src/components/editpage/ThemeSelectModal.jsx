import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Link } from 'react-router-dom';

const ThemaSelectModal = ({ isVisible, onClose }) => {
	const handlePreviousButtonClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		isVisible && (
			<ModalWrapper>
				<ModalContainer>
					<TitleSpan>테마를 선택하세요</TitleSpan>
					<ModalBox>
						<BasicContainer>
							<BasicCheckbox type="checkbox"></BasicCheckbox>
							<BasicBox>
								<BasicSpan>기본형</BasicSpan>
								<BasicText>
									군더더기 없이 깔끔한 디자인과 감각적인 디테일로 완성된 기본형 청첩장. 누구나
									좋아할 세련된 스타일을 경험하세요.
								</BasicText>
							</BasicBox>
						</BasicContainer>

						<TraditionContainer>
							<TraditionCheckbox type="checkbox"></TraditionCheckbox>
							<TraditionBox>
								<TraditionSpan>전통형</TraditionSpan>
								<TraditionText>
									한국 고유의 아름다움을 현대적으로 풀어낸 전통형 청첩장. 단아한 문양과 고급스러운
									색감이 조화를 이루어 특별한 날에 품격을 더합니다.
								</TraditionText>
							</TraditionBox>
						</TraditionContainer>

						<ThemaText>테마를 선택해 주세요!</ThemaText>

						<ButtonBox>
							<PreviousButton onClick={handlePreviousButtonClick}>이전</PreviousButton>
							<NextButton to="/edit">다음</NextButton>
						</ButtonBox>
					</ModalBox>
				</ModalContainer>
			</ModalWrapper>
		)
	);
};

export default ThemaSelectModal;

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
`;
const ModalContainer = styled.div`
	width: 94.4rem;
	height: 72.3rem;
	background: #fff;
	display: flex;
	flex-direction: column;
`;
const TitleSpan = styled.p`
	margin-top: 6.2rem;
	margin-left: 7.1rem;
	font-weight: ${theme.font.bold.fontWeight};
	width: 76.1rem;
	color: var(--gray-900, #000);
	font-size: 3.2rem;
	line-height: 100%;
	letter-spacing: -0.0608rem;
	margin-bottom: 6.5rem;
`;
const ModalBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const BasicContainer = styled.div`
	display: flex;
	flex-direction: row;
`;
const TraditionContainer = styled.div`
	margin-top: 10rem;
	display: flex;
	flex-direction: row;
`;

const BasicCheckbox = styled.input`
	appearance: none;
	width: 2.2rem;
	height: 1.8rem;
	border: 0.1rem solid #949494;
	border-radius: 0.5rem;

	&:checked {
		background-repeat: no-repeat;
		background-color: #cecece;
	}
`;

const BasicBox = styled.div`
	margin-left: 2.6rem;
	display: flex;
	flex-direction: column;
`;

const BasicSpan = styled.p`
	margin-top: 0;
	width: 77.5rem;
	font-weight: ${theme.font.semibold.fontWeight};
	color: var(--gray-900, #000);
	font-size: 3.6rem;
	line-height: 88.889%;
	letter-spacing: -0.0684rem;
	margin-bottom: 0;
`;
const BasicText = styled.p`
	margin-top: 3.6rem;
	width: 77.5rem;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	color: var(--gray-900, #000);
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
	margin-bottom: 0;
`;

const TraditionCheckbox = styled.input`
	appearance: none;
	width: 2.2rem;
	height: 1.8rem;
	border: 0.1rem solid #949494;
	border-radius: 0.5rem;

	&:checked {
		background-repeat: no-repeat;
		background-color: #cecece;
	}
`;

const TraditionBox = styled.div`
	margin-left: 2.6rem;
	display: flex;
	flex-direction: column;
`;

const TraditionSpan = styled.p`
	margin-top: 0;
	width: 77.5rem;
	font-weight: ${theme.font.semibold.fontWeight};
	color: var(--gray-900, #000);
	font-size: 3.6rem;
	line-height: 88.889%;
	letter-spacing: -0.0684rem;
	margin-bottom: 0;
`;

const TraditionText = styled.p`
	margin-top: 3.6rem;
	width: 77.5rem;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	color: var(--gray-900, #000);
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
	margin-bottom: 0;
`;

const ThemaText = styled.p`
	margin-top: 3.7rem;
	width: 20rem;
	height: 4.1rem;
	color: var(--Other-Warning, var(--Warning, #e80c0c));
	font-weight: ${theme.font.medium.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	margin-bottom: 1.6rem;
`;

const ButtonBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 4rem;
	margin-bottom: 4.7rem;
`;

const PreviousButton = styled.button`
	display: flex;
	width: 19.8rem;
	height: 5.8rem;
	padding: 1.3rem 7.7rem;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border-radius: 1.6rem;
	background: var(--gray-300, #e4e4e4);
	color: var(--gray-900, #000);
	text-align: center;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	border: none;
`;

const NextButton = styled(Link)`
	text-decoration: none;
	display: flex;
	width: 19.8rem;
	height: 5.8rem;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border-radius: 1.6rem;
	background: var(--main-green-50, rgba(172, 182, 109, 0.5));
	color: var(--gray-0, #fff);
	text-align: center;
	font-weight: ${theme.font.semibold.fontWeight};
	font-size: ${theme.fontSize.xlarge};
	line-height: 133.333%;
	letter-spacing: -0.0456rem;
	border: none;
`;
