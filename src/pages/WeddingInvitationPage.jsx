import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../styles/theme';
import RequiredInformation from '../components/WeddingInvitationPage/required-information';
import Location from '../components/WeddingInvitationPage/location';
import Gallery from '../components/WeddingInvitationPage/gallery';
import GuestBook from '../components/WeddingInvitationPage/GuestBook';
import CongratulatoryMoney from '../components/WeddingInvitationPage/congratulatory-money';
import RSVP from '../components/WeddingInvitationPage/rsvp';

const WeddingInvitationPage = () => {
	return (
		// 기본형 variant="basic"
		// 전통형 = variant="tradition"
		<WeddingInvitationWrapper $variant="tradition">
			<RequiredInformation />
			<Location $variant="tradition" />
			<Gallery $variant="tradition" />
			<GuestBook $variant="tradition" />
			<CongratulatoryMoney $variant="tradition" />
			<RSVP $variant="tradition" />
			<MoveButtonBox>
				<HomePageButton to="/" $variant="tradition">
					홈으로 이동
				</HomePageButton>
				<MyPageButton to="/my" $variant="tradition">
					마이페이지로 이동
				</MyPageButton>
			</MoveButtonBox>
		</WeddingInvitationWrapper>
	);
};

export default WeddingInvitationPage;

// CSS
const WeddingInvitationWrapper = styled.div`
	background-image: url('src/assets/img/basic.png');
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			background-image: url('src/assets/img/tradition.png');
		`}
`;

const MoveButtonBox = styled.div`
	margin-top: 18.8rem;
	display: flex;
	flex-direction: row;
	gap: 23.8rem;
	margin-bottom: 63.9rem;
`;
const HomePageButton = styled(Link)`
	text-decoration: none;
	font-weight: ${theme.font.bold.fontWeight};
	color: ${theme.colors.gray[0]};
	font-size: 3.3rem;
	font-style: normal;
	line-height: 88.643%;
	letter-spacing: -0.0627rem;
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[300]};
	background: ${theme.colors.green.main};
	display: flex;
	width: 35rem;
	height: 10rem;
	justify-content: center;
	align-items: center;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			background: ${theme.colors.traditionalWedding.invitation4};
		`}
`;
const MyPageButton = styled(Link)`
	text-decoration: none;
	font-weight: ${theme.font.bold.fontWeight};
	color: ${theme.colors.gray[0]};
	font-size: 3.3rem;
	font-style: normal;
	line-height: 88.643%;
	letter-spacing: -0.0627rem;
	border-radius: 1.6rem;
	border: 0.1rem solid ${theme.colors.gray[300]};
	background: ${theme.colors.green.main};
	display: flex;
	width: 35rem;
	height: 10rem;
	justify-content: center;
	align-items: center;

	${({ $variant }) =>
		$variant === 'tradition' &&
		css`
			background: ${theme.colors.traditionalWedding.invitation4};
		`}
`;
