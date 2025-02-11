import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import GuestBookModal from './GuestBookModal';
import { fetchGuestBook } from '../../apis/api/comments';

const GuestBook = ({ $variant = 'basic', invitationId }) => {
	const [isModalVisible, setModalVisible] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [comments, setComments] = useState([]);
	const [page, setPage] = useState(1);
	const [isLast, setIsLast] = useState(false);
	const [isScrollable, setIsScrollable] = useState(false);
	const observer = useRef();

	// 방명록 데이터 불러오기
	useEffect(() => {
		const fetchComments = async () => {
			if (isLast) return; // 마지막 페이지이면 요청 중단
			setIsLoading(true);

			try {
				const response = await fetchGuestBook(invitationId, page);
				if (response.success) {
					setComments((prev) =>
						page === 1 ? response.result.comments : [...prev, ...response.result.comments]
					);
					setIsLast(response.result.isLast);
				}
			} catch (error) {
				console.error(error);
			} finally {
				setIsLoading(false);
			}
		};

		if (invitationId) {
			fetchComments();
		}
	}, [invitationId, page]);

	// "더보기" 버튼 클릭 시 스크롤 활성화
	const handleMoreButtonClick = () => {
		setIsScrollable(true);
		setPage((prev) => (prev >= 1 ? prev + 1 : 1));
	};

	const lastCommentRef = useRef();

	// 무한스크롤
	useEffect(() => {
		if (isLast) return; // 마지막 페이지면 요청 중단

		observer.current = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				setPage((prev) => (prev >= 1 ? prev + 1 : 1));
			}
		});

		if (lastCommentRef.current) {
			observer.current.observe(lastCommentRef.current);
		}

		return () => {
			if (observer.current) observer.current.disconnect();
		};
	}, [comments, isLast]);

	return (
		<GuestBookWrapper>
			<GuestBookSpan $variant={$variant}>방명록</GuestBookSpan>
			<GuestBookList isScrollable={isScrollable}>
				{comments.length === 0 && !isLoading ? (
					<GuestBookItem>
						<ContentText>작성된 방명록이 없습니다.</ContentText>
					</GuestBookItem>
				) : (
					comments.map((item, index) => (
						<GuestBookItem
							key={item.commentId}
							ref={index === comments.length - 1 ? lastCommentRef : null}>
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
					))
				)}
			</GuestBookList>

			{comments.length > 4 && !isScrollable && (
				<MoreButton onClick={handleMoreButtonClick}>더보기</MoreButton>
			)}

			<WritingButton $variant={$variant} onClick={() => setModalVisible(true)}>
				작성하기
			</WritingButton>
			<GuestBookModal
				isVisible={isModalVisible}
				invitationId={invitationId}
				onClose={() => setModalVisible(false)}
			/>
		</GuestBookWrapper>
	);
};

export default GuestBook;

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
