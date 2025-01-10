import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';

const GuestBook = () => {
	// 초기에는 4개의 아이템
	const [visibleItems, setVisibleItems] = useState(4);

	const handleMoreButtonClick = () => {
		// 더보기 버튼을 클릭 시 4개씩 추가
		setVisibleItems((prev) => prev + 4);
	};

	return (
		<GuestBookWrapper>
			<GuestBookSpan>방명록</GuestBookSpan>
			<GuestBookList>
				{guestBookData.slice(0, visibleItems).map((item, index) => (
					<GuestBookItem key={index}>
						<GuestNameText>{item.name}</GuestNameText>
						<ContentText>{item.content}</ContentText>
					</GuestBookItem>
				))}
			</GuestBookList>
			{visibleItems < guestBookData.length && (
				<MoreButton onClick={handleMoreButtonClick}>더보기</MoreButton>
			)}
			<WritingButton>작성하기</WritingButton>
		</GuestBookWrapper>
	);
};
export default GuestBook;

// 데이터 리스트
const guestBookData = [
	{
		name: '김민수',
		content: '결혼 축하드립니다! 두 분의 앞날에 행복만 가득하시길 바랍니다.',
	},
	{
		name: '이지영',
		content: '멋진 결혼식 기대할게요! 오랜만에 봐서 너무 좋았어요.',
	},
	{
		name: '박지훈',
		content:
			'두 분의 결혼을 진심으로 축하드려요! 앞으로의 모든 날들이 행복으로 가득 차길 바랍니다.',
	},
	{
		name: '최은영',
		content: '늘 서로에게 힘이 되는 멋진 부부가 되길 기원할게요!',
	},
	{
		name: '김민수',
		content: '결혼 축하드립니다! 두 분의 앞날에 행복만 가득하시길 바랍니다.',
	},
	{
		name: '김민수',
		content: '결혼 축하드립니다! 두 분의 앞날에 행복만 가득하시길 바랍니다.',
	},
	{
		name: '김민수',
		content: '결혼 축하드립니다! 두 분의 앞날에 행복만 가득하시길 바랍니다.',
	},
	{
		name: '김민수',
		content: '결혼 축하드립니다! 두 분의 앞날에 행복만 가득하시길 바랍니다.',
	},
	{
		name: '김민수',
		content: '결혼 축하드립니다! 두 분의 앞날에 행복만 가득하시길 바랍니다.',
	},
];

// CSS
const GuestBookWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const GuestBookSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	color: var(--brown, #3c140d);
	font-size: 4.3878rem;
	font-style: normal;
	line-height: 66.667%;
	letter-spacing: -0.0834rem;
`;

const GuestBookList = styled.div`
	margin-top: 10rem;
	display: flex;
	flex-direction: column;
	gap: 5rem;
`;

const GuestBookItem = styled.div`
	width: 112.073rem;
	height: 14.809rem;
	padding: 3.0166rem 2.4682rem;
	border-radius: 1.4626rem;
	border: 0.0914rem solid var(--gray_3, #d9d9d9);
	background: var(--white, #fff);
	box-shadow: 0rem 0.3657rem 0.3657rem 0rem rgba(0, 0, 0, 0.25);
`;

const GuestNameText = styled.p`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 88.889%;
	letter-spacing: -0.0625rem;
`;

const ContentText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 88.889%;
	letter-spacing: -0.0625rem;
`;

const MoreButton = styled.button`
	font-weight: ${theme.font.medium.fontWeight};
	text-align: center;
	font-size: 2.1939rem;
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0417rem;
	background: none;
	border: none;
	cursor: pointer;
	margin-top: 4rem;
`;

const WritingButton = styled.button`
	font-weight: ${theme.font.medium.fontWeight};
	text-align: center;
	font-size: ${theme.fontSize.large};
	font-style: normal;
	line-height: 133.333%;
	letter-spacing: -0.0417rem;
	border-radius: 1.4626rem;
	border: 0.0914rem solid var(--gray_3, #d9d9d9);
	background: var(--white, #fff);
	width: 19rem;
	height: 5.302rem;
	padding: 1.1884rem 5.302rem;
	align-items: center;
	cursor: pointer;
	margin-top: 4rem;
	margin-left: 90rem;
`;
