import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../styles/theme';
import GuestBookModal from './guest-book-modal';

const GuestBook = () => {
	// 초기에는 4개의 아이템
	const [visibleItems, setVisibleItems] = useState(4);

	const handleMoreButtonClick = () => {
		// 더보기 버튼을 클릭 시 4개씩 추가
		setVisibleItems((prev) => prev + 4);
	};

	const [isModalVisible, setModalVisible] = useState(false);

	const handleWritingButtonClick = () => {
		setModalVisible(true);
	};

	const handleModalClose = () => {
		setModalVisible(false);
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
			<WritingButton onClick={handleWritingButtonClick}>작성하기</WritingButton>
			<GuestBookModal isVisible={isModalVisible} onClose={handleModalClose} />
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
	margin-top: 15.9rem;
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

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	&::before,
	&::after {
		content: '';
		display: block;
		width: 49rem;
		height: 0.2rem;
		background-color: var(--brown, #3c140d);
	}

	&::before {
		margin-right: 5.2rem;
	}

	&::after {
		margin-left: 5.2rem;
	}
`;

const GuestBookList = styled.div`
	margin-top: 7.05rem;
	display: flex;
	flex-direction: column;
	gap: 3.8rem;
`;

const GuestBookItem = styled.div`
	width: 107rem;
	height: 14.8rem;
	padding: 3rem 2.5rem;
	border-radius: 1.6rem;
	border: 0.1rem solid var(--gray_3, #d9d9d9);
	background: var(--white, #fff);
	box-shadow: 0rem 0.3657rem 0.3657rem 0rem rgba(0, 0, 0, 0.25);
`;

const GuestNameText = styled.p`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.3rem;
	font-style: normal;
	line-height: 88.643%;
	letter-spacing: -0.0627rem;
`;

const ContentText = styled.p`
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.3rem;
	font-style: normal;
	line-height: 88.643%;
	letter-spacing: -0.0627rem;
`;

const MoreButton = styled.button`
	margin-top: 5.15rem;
	font-weight: ${theme.font.medium.fontWeight};
	text-align: center;
	font-size: 2.2rem;
	font-style: normal;
	line-height: 132.965%;
	letter-spacing: -0.0418rem;
	background: none;
	border: none;
	cursor: pointer;
`;

const WritingButton = styled.button`
	margin-top: 2.9rem;
	color: var(--gray-0, #fff);
	text-align: center;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 2.2rem;
	font-style: normal;
	line-height: 132.965%;
	letter-spacing: -0.0418rem;
	border-radius: 1.6rem;
	border: 0.1rem solid var(--gray-300, #e4e4e4);
	background: var(--brown, #3c140d);
	display: inline-flex;
	padding: 1.2rem 5.3rem;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-left: 85.5rem;
`;
