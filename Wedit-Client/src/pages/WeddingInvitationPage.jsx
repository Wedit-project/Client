import styled from 'styled-components';
import theme from '../styles/theme';
import RequiredInformation from '../components/WeddingInvitationPage/required-information';
import Location from '../components/WeddingInvitationPage/location';
import Gallery from '../components/WeddingInvitationPage/gallery';
import GuestBook from '../components/WeddingInvitationPage/guest-book';
import CongratulatoryMoney from '../components/WeddingInvitationPage/congratulatory-money';
import RSVP from '../components/WeddingInvitationPage/rsvp';

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
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MoveButtonBox = styled.div`
	margin-top: 18.7rem;
	display: flex;
	flex-direction: row;
	gap: 23.8rem;
	margin-bottom: 63.9rem;
`;
const HomePageButton = styled.button`
	font-weight: ${theme.font.bold.fontWeight};
	color: var(--gray-0, #fff);
	font-size: 3.3rem;
	font-style: normal;
	line-height: 88.643%;
	letter-spacing: -0.0627rem;
	border-radius: 1.6rem;
	border: 0.1rem solid var(--gray-300, #e4e4e4);
	background: var(--Basic-wedding-invitation-2-4, #4d5941);
	display: flex;
	width: 35rem;
	height: 10rem;
	justify-content: center;
	align-items: center;
`;
const MyPageButton = styled.button`
	font-weight: ${theme.font.bold.fontWeight};
	color: var(--gray-0, #fff);
	font-size: 3.3rem;
	font-style: normal;
	line-height: 88.643%;
	letter-spacing: -0.0627rem;
	border-radius: 1.6rem;
	border: 0.1rem solid var(--gray-300, #e4e4e4);
	background: var(--Basic-wedding-invitation-2-4, #4d5941);
	display: flex;
	width: 35rem;
	height: 10rem;
	justify-content: center;
	align-items: center;
`;
