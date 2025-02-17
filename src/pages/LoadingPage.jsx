import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import LogoSet from '../assets/img/LogoSet.svg?react';
import LoadingImg from '../assets/img/LoadingImg.svg?react';
import { viewInvitation } from '../apis/api/my';
import Invitation from '../components/mypage/Invitation';

const LoadingPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const invitationId = location.state?.invitationId;
	const [recentInvitationId, setRecentInvitationId] = useState(null);
	const [isSuccess, setIsSuccess] = useState(false);

	const [progress, setProgress] = useState(0);

	useEffect(() => {
		const fetchRecentInvitation = async () => {
			try {
				const invitations = await viewInvitation();
				if (invitations.length > 0) {
					const recentInvitation = invitations[invitations.length - 1];
					setRecentInvitationId(recentInvitation.id);
					setIsSuccess(true);
				}
			} catch (error) {
				console.error('API 요청 오류:', error);
			}
		};

		if (!invitationId) {
			fetchRecentInvitation();
		}

		const interval = setInterval(() => {
			setProgress((oldProgress) => {
				if (oldProgress === 100) {
					clearInterval(interval);
					return 100;
				}
				return Math.min(oldProgress + 10, 100);
			});
		}, 1000);

		return () => clearInterval(interval);
	}, [navigate, invitationId]);

	useEffect(() => {
		if (progress === 100) {
			setTimeout(() => {
				if (invitationId) {
					navigate(`/wedding-invitation/${invitationId}`);
				} else if (recentInvitationId && isSuccess) {
					navigate(`/wedding-invitation/${recentInvitationId}`);
				}
			}, 1000);
		}
	}, [progress, navigate, invitationId, recentInvitationId, isSuccess]);

	return (
		<Wrapper>
			<IllustIcon />
			<LogoFrameIcon />
			<ProgressBarBox>
				<ProgressBox $progress={progress} />
			</ProgressBarBox>
			<LoadingTextBox>나만을 위한 청첩장 제작중...</LoadingTextBox>
		</Wrapper>
	);
};

export default LoadingPage;

// 스몰 모바일 (320px ~ 375px)
// 미디엄 모바일 (376px ~ 425px)
// 라지 모바일 (426px ~ 767px)
// 스몰 태블릿 (768px ~ 991px)
// 라지 태블릿 (992px ~ 1199px)

// CSS
const Wrapper = styled.div`
	width: 100%;
	height: 80vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: auto;
	position: relative;

	@media screen and (min-width: 1180px) {
		height: 100vh;
	}

	@media screen and (min-width: 568px) and (max-width: 898px) and (orientation: landscape) {
		height: 100vh;
	}

	@media screen and (min-width: 898px) and (max-width: 933px) and (orientation: landscape) {
		height: 100vh;
	}
`;

const IllustIcon = styled(LoadingImg)`
	width: 98.7rem;
	height: 59.4rem;
	margin: 15.8rem 6rem 0 39.3rem;
	position: relative;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		/*ipad air 가로*/
		width: 83rem;
		height: 43.7rem;
	}
`;

const LogoFrameIcon = styled(LogoSet)`
	position: absolute;
	top: 45%;
	transform: translateX(-70%);

	@media screen and (min-width: 1181px) and (max-width: 1366px) {
		/*ipad pro 가로*/
		width: 25%;
		top: 48%;
	}

	@media screen and (max-width: 1024px) {
		/*ipad pro 세로*/
		width: 23%;
		top: 46%;
		transform: translateX(-75%);
	}

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		/*ipad air 가로*/
		width: 29%;
		top: 40%;
		transform: translateX(-65%);
	}

	@media screen and (min-width: 821px) and (max-width: 1024px) and (max-height: 768px) {
		/*ipad mini 가로*/
		width: 23%;
		top: 43%;
		transform: translateX(-70%);
	}

	@media screen and (min-width: 780px) and (max-width: 820px) {
		/*ipad air 세로*/
		width: 28%;
		top: 45%;
		transform: translateX(-75%);
	}

	@media screen and (min-width: 767px) and (max-width: 779px) {
		/*ipad mini 세로*/
		width: 23%;
		top: 43%;
		transform: translateX(-70%);
	}

	@media screen and (min-width: 320px) and (max-width: 375px) {
		width: 30%;
		top: 35%;
		transform: translateX(-68%);
	}

	@media screen and (min-width: 375px) and (max-width: 480px) {
		top: 40%;
	}

	@media screen and (min-width: 481px) and (max-width: 575px) {
		width: 30%;
		top: 43%;
		transform: translateX(-75%);
	}

	@media screen and (min-width: 576px) and (max-width: 645px) {
		width: 28%;
		top: 43%;
		transform: translateX(-68%);
	}

	@media screen and (min-width: 645px) and (max-width: 767px) {
		top: 44%;
	}

	@media screen and (min-width: 568px) and (max-width: 898px) and (orientation: landscape) {
		top: 20%;
	}

	@media screen and (min-width: 898px) and (max-width: 933px) and (orientation: landscape) {
		top: 28%;
	}
`;

const ProgressBarBox = styled.div`
	width: 112rem;
	height: 6rem;
	border-radius: 3rem;
	background: ${theme.colors.gray['300']};
	position: relative;
`;

const ProgressBox = styled.div`
	width: ${(props) => props.$progress}%;
	height: 6rem;
	border-radius: 3rem;
	background: ${theme.colors.green['main']};
	transition: width 1s linear;
`;

const LoadingTextBox = styled.div`
	margin-top: 3.8rem;
	margin-bottom: 14.4rem;
	color: ${theme.colors.gray['900']};
	font-family: Pretendard;
	font-size: 3.2rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0608rem;
`;
