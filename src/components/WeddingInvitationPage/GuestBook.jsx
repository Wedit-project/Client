//GuestBook.jsx
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import GuestBookModal from './GuestBookModal';

const GuestBook = ({ $variant = 'basic' }) => {
	const [isScrollable, setScrollable] = useState(false);

	const handleMoreButtonClick = () => {
		// 스크롤 활성화
		setScrollable(true);
	};

	const [isModalVisible, setModalVisible] = useState(false);

	const handleWritingButtonClick = () => {
		setModalVisible(true);
	};

	const handleModalClose = () => {
		setModalVisible(false);
	};

	const [isLoading, setIsLoading] = useState(true);

	// 로딩 시뮬레이션, 추후 API 호출 로직으로 대체
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<GuestBookWrapper>
			<GuestBookSpan $variant={$variant}>방명록</GuestBookSpan>
			<GuestBookList isScrollable={isScrollable}>
				{guestBookData.map((item, index) => (
					<GuestBookItem key={index}>
						{isLoading ? (
							<>
								<Skeleton />
								<Skeleton />
							</>
						) : (
							<>
								<GuestNameText>{item.name}</GuestNameText>
								<ContentText>{item.content}</ContentText>
							</>
						)}
					</GuestBookItem>
				))}
			</GuestBookList>

			{guestBookData.length > 4 && !isScrollable && (
				// 스크롤 활성화 후 버튼 숨김
				<MoreButton onClick={handleMoreButtonClick}>더보기</MoreButton>
			)}

			<WritingButton $variant={$variant} onClick={handleWritingButtonClick}>
				작성하기
			</WritingButton>
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

const GuestBookWrapper = styled.div`
	margin-top: 15.9rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const GuestBookSpan = styled.span`
	font-weight: ${theme.font.bold.fontWeight};
	color: ${theme.colors.green.main};
	font-size: 4.3878rem;
	font-style: normal;
	line-height: 66.667%;
	letter-spacing: -0.0834rem;

	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			color: ${theme.colors.traditionalWedding.invitation5};
			&::before,
			&::after {
				content: '';
				display: block;
				width: 49rem;
				height: 0.2rem;
				background-color: ${theme.colors.traditionalWedding.invitation5};
			}

			&::before {
				margin-right: 5.2rem;
			}

			&::after {
				margin-left: 5.2rem;
			}
		`}
`;

const GuestBookList = styled.div.withConfig({
	shouldForwardProp: (prop) => prop !== 'isScrollable',
})`
	margin-top: 7.05rem;
	display: flex;
	flex-direction: column;
	gap: 3.8rem;
	height: 70.6rem;
	max-height: ${({ isScrollable }) => (isScrollable ? '94rem' : 'none')};
	overflow-y: ${({ isScrollable }) => (isScrollable ? 'scroll' : 'hidden')};
`;

const GuestBookItem = styled.div`
	width: 112.1rem;
	height: 14.8rem;
	padding: 3rem 2.5rem;
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[300]};
	background: ${theme.colors.background.background2};
	box-shadow: 0rem 0.3657rem 0.3657rem 0rem rgba(0, 0, 0, 0.25);
`;

const GuestNameText = styled.p`
	margin-top: 0;
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.3rem;
	font-style: normal;
	line-height: 88.643%;
	letter-spacing: -0.0627rem;
	margin-bottom: 2.377rem;
`;

const ContentText = styled.p`
	margin-top: 2.377rem;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 3.3rem;
	font-style: normal;
	line-height: 88.643%;
	letter-spacing: -0.0627rem;
	margin-bottom: 0;
`;

const Skeleton = styled.div`
	width: 100%;
	height: 3.5rem;
	border-radius: 1rem;
	background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
	background-size: 200% 100%;
	animation: shimmer 1.5s infinite;
	border-radius: 0.8rem;
	margin-bottom: 0.6rem;
	@keyframes shimmer {
		0% {
			background-position: 200% 0;
		}
		100% {
			background-position: -200% 0;
		}
	}
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
	color: ${theme.colors.gray[0]};
	text-align: center;
	font-weight: ${theme.font.medium.fontWeight};
	font-size: 2.2rem;
	font-style: normal;
	line-height: 132.965%;
	letter-spacing: -0.0418rem;
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[300]};
	background: ${theme.colors.green.main};
	display: inline-flex;
	padding: 1.2rem 5.3rem;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	margin-left: 85.5rem;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			background: ${theme.colors.traditionalWedding.invitation5};
		`}
`;
