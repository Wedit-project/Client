import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import DaumPostcode from 'react-daum-postcode';
import LogoComponent from '../components/editpage/Logo';
import NameContainer from '../components/editpage/NameContainer';
import InfoContainer from '../components/editpage/InfoContainer';
import ImgContainer from '../components/editpage/ImgContainer';
import NavButton from '../components/editpage/NavButton';

const EditPage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const selectedImages = location.state?.selectedImages || [];
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [address, setAddress] = useState('');
	const [addressDetail, setAddressDetail] = useState('');
	const [isNextActive, setIsNextActive] = useState(false);

	const [groomName, setGroomName] = useState('');
	const [groomFatherName, setGroomFatherName] = useState('');
	const [groomMotherName, setGroomMotherName] = useState('');
	const [brideName, setBrideName] = useState('');
	const [brideFatherName, setBrideFatherName] = useState('');
	const [brideMotherName, setBrideMotherName] = useState('');

	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);

	const handleAddressComplete = (data) => {
		setAddress(data.address);
		setIsModalOpen(false);
	};

	useEffect(() => {
		const allFieldsFilled =
			groomName &&
			groomFatherName &&
			groomMotherName &&
			brideName &&
			brideFatherName &&
			brideMotherName &&
			address &&
			addressDetail &&
			selectedDate &&
			selectedTime &&
			selectedImages.length > 0;

		setIsNextActive(allFieldsFilled);
	}, [
		groomName,
		groomFatherName,
		groomMotherName,
		brideName,
		brideFatherName,
		brideMotherName,
		address,
		addressDetail,
		selectedDate,
		selectedTime,
		selectedImages,
	]);

	const handlePrevious = () => {
		navigate('/my');
	};

	const handleNext = () => {
		if (isNextActive) {
			navigate('/option-selection');
		}
	};

	return (
		<Wrapper>
			<LogoComponent />
			<TitleBox>필수 정보</TitleBox>
			<Container>
				<NameContainer
					setGroomName={setGroomName}
					setGroomFatherName={setGroomFatherName}
					setGroomMotherName={setGroomMotherName}
					setBrideName={setBrideName}
					setBrideFatherName={setBrideFatherName}
					setBrideMotherName={setBrideMotherName}
				/>
				<InfoContainer
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					handleAddressComplete={handleAddressComplete}
					address={address}
					addressDetail={addressDetail}
					setAddressDetail={setAddressDetail}
					selectedDate={selectedDate}
					setSelectedDate={setSelectedDate}
					selectedTime={selectedTime}
					setSelectedTime={setSelectedTime}
				/>
				<ImgContainer photos={selectedImages} />
				<CautionBox>{!isNextActive && '필수 정보를 모두 입력해 주세요!'}</CautionBox>
				<NavBox>
					<NavButton onPrevious={handlePrevious} onNext={handleNext} isNextActive={isNextActive} />
				</NavBox>
			</Container>

			{/* 주소 검색 모달 */}
			{isModalOpen && (
				<ModalBox>
					<ModalContentBox>
						<ModalHeaderBox>
							<KakaoServiceTextSpan>Kakao 우편번호 서비스</KakaoServiceTextSpan>
							<HeaderLine />
						</ModalHeaderBox>
						<DaumPostcode onComplete={handleAddressComplete} style={{ display: 'block' }} />
					</ModalContentBox>
				</ModalBox>
			)}
		</Wrapper>
	);
};

export default EditPage;

// CSS
const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const TitleBox = styled.div`
	margin-top: 4.1rem;
	margin-left: 8.3rem;
	font-size: 3.2rem;
	font-family: Pretendard;
	font-weight: ${theme.font.bold.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0608rem;
`;

const Container = styled.div`
	margin-top: 2.3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ModalBox = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContentBox = styled.div`
	width: 90.3rem;
	height: auto;
	background: ${theme.colors.gray['0']};
`;

const ModalHeaderBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const KakaoServiceTextSpan = styled.span`
	font-family: Pretendard;
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
	margin: 1.2rem 11.8rem 1.1rem 2.4rem;
`;

const HeaderLine = styled.hr`
	width: 90.3rem;
	height: 0.1rem;
	background: var(--black, #000);
`;

const CautionBox = styled.div`
	width: 29.3rem;
	height: 4.1rem;
	margin-top: 4.8rem;
	margin-bottom: 1.4rem;
	color: #e80c0c;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-style: normal;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;
`;

const NavBox = styled.div`
	margin-bottom: 7.9rem;
`;
