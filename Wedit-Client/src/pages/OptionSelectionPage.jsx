import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoComponent from '../components/editpage/Logo';
import OptSelection from '../components/editpage/OptSelection';
import NavButton from '../components/editpage/NavButton';

const OptionSelectionPage = () => {
	const navigate = useNavigate();
	const [isNextActive, setIsNextActive] = useState(true);
	const [checkedItems, setCheckedItems] = useState({
		guestbook: true,
		rsvp: false,
		accountInfo: false,
	});

	const handleCheckChange = (newCheckedItems) => {
		setCheckedItems(newCheckedItems);
		const anyChecked = Object.values(newCheckedItems).some((checked) => checked);
		setIsNextActive(anyChecked);
	};

	const handlePrevious = () => {
		navigate('/edit');
	};

	const handleNext = () => {
		if (checkedItems.accountInfo) {
			navigate('/account-information');
		} else {
			navigate('/loading');
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
`;

const NavBox = styled.div`
	margin-top: 1.4rem;
	margin-bottom: 7.9rem;
`;
