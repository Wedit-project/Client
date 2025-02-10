import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoComponent from '../components/editpage/Logo';
import OptSelection from '../components/editpage/OptSelection';
import NavButton from '../components/editpage/NavButton';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedImagesState, contentState, selectedOptionsState } from '../recoil/atoms';
import { registerInvitation } from '../apis/api/registerInvitation';
import { patchInvitation } from '../apis/api/patchInvitation';

const OptionSelectionPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const invitationId = location.state?.invitationId;
	const [content, setContent] = useRecoilState(contentState);
	const selectedImages = useRecoilValue(selectedImagesState);
	const isDataFetched = location.state?.isDataFetched;
	const isInitialSetup = location.state?.isInitialSetup;

	const [checkedItems, setCheckedItems] = useRecoilState(selectedOptionsState);

	const [isNextActive, setIsNextActive] = useState(true);

	const handleCheckChange = (newCheckedItems) => {
		setCheckedItems(newCheckedItems);
		const anyChecked = Object.values(newCheckedItems).some((checked) => checked);
		setIsNextActive(anyChecked);
	};

	const handlePrevious = () => {
		if (invitationId) {
			navigate(`/edit/${invitationId}`, { state: { invitationId, isDataFetched } });
		} else {
			navigate('/edit', { state: { isInitialSetup } });
		}
	};

	useEffect(() => {
		if (isDataFetched) {
			const initialCheckedItems = {
				accountInfo: location.state?.accountOption || false,
				rsvp: location.state?.decisionOption || false,
				guestbook: location.state?.guestBookOption || false,
			};

			setCheckedItems(initialCheckedItems);

			// 다음 버튼 활성화 여부 설정
			const anyChecked = Object.values(initialCheckedItems).some((checked) => checked);
			setIsNextActive(anyChecked);
		}
	}, [isDataFetched, location.state, setCheckedItems]);

	const handleNext = async () => {
		const updatedContent = {
			...content,
			guestBookOption: checkedItems.guestbook,
			decisionOption: checkedItems.rsvp,
			accountOption: checkedItems.accountInfo,
		};

		setContent(updatedContent);

		if (checkedItems.accountInfo) {
			navigate('/account-information', { state: { invitationId, isDataFetched, isInitialSetup } });
		} else {
			// API 호출 전에 보낼 데이터 확인
			console.log('Sending data to API:', {
				images: selectedImages,
				content: updatedContent,
			});
			try {
				if (invitationId) {
					// PATCH 요청: 기존 청첩장 수정
					const response = await patchInvitation(invitationId, selectedImages, updatedContent);
				} else if (!invitationId) {
					const response = await registerInvitation(selectedImages, updatedContent);
				}
				navigate('/loading');
			} catch (error) {
				console.error('API 요청 실패:', error);
			}
		}
	};

	return (
		<Wrapper>
			<LogoComponent />
			<TitleSpan>옵션 선택</TitleSpan>
			<DescriptionSpan>1개 이상의 옵션을 선택해주세요.</DescriptionSpan>
			<CenterBox>
				<ContentContainer>
					<OptSelection checkedItems={checkedItems} onCheckChange={handleCheckChange} />
				</ContentContainer>
				<CautionBox>{!isNextActive && '1개 이상의 옵션을 선택을 해주세요!'}</CautionBox>
				<NavBox>
					<NavButton onPrevious={handlePrevious} onNext={handleNext} isNextActive={isNextActive} />
				</NavBox>
			</CenterBox>
		</Wrapper>
	);
};

export default OptionSelectionPage;

// CSS
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const TitleSpan = styled.span`
	display: block;
	margin-top: 5.4rem;
	margin-left: 7.9rem;
	font-size: 3.2rem;
	font-family: Pretendard;
	font-weight: ${theme.font.bold.fontWeight};
	letter-spacing: -0.0608rem;
`;

const DescriptionSpan = styled.span`
	display: block;
	position: absolute;
	top: 18.8rem;
	left: 7.5rem;
	width: 76.1rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;

	@media screen and (min-width: 393px) and (max-width: 412px) {
		top: 25rem;
	}
`;

const CenterBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ContentContainer = styled.div`
	position: relative;
`;

const CautionBox = styled.div`
	position: absolute;
	top: 83.2rem;
	width: 32.6rem;
	height: 4.1rem;
	color: #e80c0c;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;

	@media screen and (min-width: 393px) and (max-width: 412px) {
		top: 89rem;
	}
`;

const NavBox = styled.div`
	margin-top: 1.4rem;
	margin-bottom: 7.9rem;
`;
