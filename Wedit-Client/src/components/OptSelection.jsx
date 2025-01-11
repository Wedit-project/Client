import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '../../src/styles/theme';

const OptSelection = () => {
	const [checkedItems, setCheckedItems] = useState({
		guestbook: true, // 방명록 기본 체크
		rsvp: false,
		accountInfo: false,
	});

	const handleCheckboxChange = (event) => {
		const { name, checked } = event.target;
		setCheckedItems({
			...checkedItems,
			[name]: checked,
		});
	};

	return (
		<Container>
			<OptBox>
				<Checkbox
					type="checkbox"
					name="guestbook"
					checked={checkedItems.guestbook}
					onChange={handleCheckboxChange}
				/>
				<ContentBox>
					<TitleSpan>방명록</TitleSpan>
					<DescriptionSpan>
						결혼식에 참석하신 분들이 남기는 따뜻한 메시지를 확인하세요
					</DescriptionSpan>
				</ContentBox>
			</OptBox>
			<OptBox>
				<Checkbox
					type="checkbox"
					name="rsvp"
					checked={checkedItems.rsvp}
					onChange={handleCheckboxChange}
				/>
				<ContentBox>
					<TitleSpan>RSVP (참석의사 수집)</TitleSpan>
					<DescriptionSpan>
						참석 여부를 미리 확인하여 결혼식 준비를 더욱 완벽하게 하세요
					</DescriptionSpan>
				</ContentBox>
			</OptBox>
			<OptBox>
				<Checkbox
					type="checkbox"
					name="accountInfo"
					checked={checkedItems.accountInfo}
					onChange={handleCheckboxChange}
				/>
				<ContentBox>
					<TitleSpan>축의금 계좌 정보</TitleSpan>
					<DescriptionSpan>
						편리하게 축의금을 전달할 수 있도록 계좌 정보를 안내해 드려요
					</DescriptionSpan>
				</ContentBox>
			</OptBox>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8.5rem;
	padding: 12.5rem 5.9rem 12.5rem 6.3rem;
`;

const OptBox = styled.div`
	display: flex;
	align-items: flex-start;
`;

const Checkbox = styled.input`
	appearance: none;
	width: 2.2rem;
	height: 1.8rem;
	border: 0.15rem solid #9da5b1;
	border-radius: 0.5rem;
	margin-right: 2.5rem;

	&:checked {
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
		background-size: 100% 100%;
		background-position: 50%;
		background-repeat: no-repeat;
	}
`;

const ContentBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const TitleSpan = styled.span`
	color: var(--black, #000);
	font-family: Pretendard;
	font-size: 3.6rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.684px;
	margin-bottom: 3.5rem;
`;

const DescriptionSpan = styled.span`
	color: var(--black, #000);
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 32px;
	letter-spacing: -0.456px;
`;

export default OptSelection;
