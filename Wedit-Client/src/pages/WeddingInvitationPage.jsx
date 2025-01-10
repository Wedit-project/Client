import styled from 'styled-components';
import theme from '../styles/theme';
import RequiredInformation from '../components/required-information';
import Location from '../components/location';
import Gallery from '../components/gallery';
import GuestBook from '../components/guest-book';
import CongratulatoryMoney from '../components/congratulatory-money';
import RSVP from '../components/rsvp';

const WeddingInvitationPage = () => {
	return (
		<WeddingInvitationWrapper>
			<RequiredInformation />
			<Location />
			<Gallery />
			<GuestBook />
			<CongratulatoryMoney />
			<RSVP />
			<MoveButtonBox>
				<HomePageButton>홈으로 이동</HomePageButton>
				<MyPageButton>마이페이지로 이동</MyPageButton>
			</MoveButtonBox>
		</WeddingInvitationWrapper>
	);
};

export default WeddingInvitationPage;

// CSS
const WeddingInvitationWrapper = styled.div`
	background-image: url('src/assets/img/tradition.png');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	height: calc(100vw * 3.87); /* 이미지 원본 비율에 따라 높이 설정 (5601 / 1446 ≈ 3.87) */
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30rem;
`;

const MoveButtonBox = styled.div`
	display: flex;
	flex-direction: row;
	gap: 30rem;
`;
const HomePageButton = styled.button`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 88.889%;
	letter-spacing: -0.0625rem;
	border-radius: 1.4626rem;
	border: 0.0914rem solid var(--gray_3, #d9d9d9);
	background: var(--white, #fff);
	width: 36rem;
	height: 10.6954rem;
	padding: 3.8394rem 8.8671rem;
`;
const MyPageButton = styled.button`
	font-weight: ${theme.font.bold.fontWeight};
	font-size: 3.2909rem;
	font-style: normal;
	line-height: 88.889%;
	letter-spacing: -0.0625rem;
	border-radius: 1.4626rem;
	border: 0.0914rem solid var(--gray_3, #d9d9d9);
	background: var(--white, #fff);
	width: 36rem;
	height: 10.6954rem;
	padding: 3.8394rem 4.3878rem;
`;
