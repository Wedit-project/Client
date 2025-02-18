import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../styles/theme';
import DaumPostcode from 'react-daum-postcode';
import LogoComponent from '../components/editpage/Logo';
import NameContainer from '../components/editpage/NameContainer';
import InfoContainer from '../components/editpage/InfoContainer';
import ImgContainer from '../components/editpage/ImgContainer';
import NavButton from '../components/editpage/NavButton';
import { serverInstance } from '../apis/utils/apiIntance';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
	groomNameState,
	brideNameState,
	groomFatherNameState,
	groomMotherNameState,
	brideFatherNameState,
	brideMotherNameState,
	addressState,
	addressDetailState,
	selectedDateState,
	selectedTimeState,
	selectedImagesState,
	contentState,
	selectedThemeState,
	selectedOptionsState,
	accountInfoState,
} from '../recoil/atoms';
import { getInvitationById } from '../apis/api/my';
import axios from 'axios';

const EditPage = () => {
	const location = useLocation();
	const invitationId = location.state?.invitationId;
	const isDataFetchedFromPhoto = location.state?.isDataFetched;
	const isInitialSetupFromPhoto = location.state?.isInitialSetup;
	const [isDataFetched, setIsDataFetched] = useState(isDataFetchedFromPhoto || false);
	const [isInitialSetup, setIsInitialSetup] = useState(isInitialSetupFromPhoto || false);

	const [content, setContent] = useRecoilState(contentState);
	const navigate = useNavigate();

	const [selectedImages, setSelectedImages] = useRecoilState(selectedImagesState);
	const [selectedTheme, setSelectedTheme] = useRecoilState(selectedThemeState);
	const [checkedItems, setCheckedItems] = useRecoilState(selectedOptionsState);
	const [accountInfo, setAccountInfo] = useRecoilState(accountInfoState);

	const [groomName, setGroomName] = useRecoilState(groomNameState);
	const [brideName, setBrideName] = useRecoilState(brideNameState);
	const [groomFatherName, setGroomFatherName] = useRecoilState(groomFatherNameState);
	const [groomMotherName, setGroomMotherName] = useRecoilState(groomMotherNameState);
	const [brideFatherName, setBrideFatherName] = useRecoilState(brideFatherNameState);
	const [brideMotherName, setBrideMotherName] = useRecoilState(brideMotherNameState);

	const [address, setAddress] = useRecoilState(addressState);
	const [addressDetail, setAddressDetail] = useRecoilState(addressDetailState);
	const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);
	const [selectedTime, setSelectedTime] = useRecoilState(selectedTimeState);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isNextActive, setIsNextActive] = useState(false);

	const fetchImageAsBase64 = async (url) => {
		const response = await axios.get(url, { responseType: 'blob' }); // Blob으로 응답 받기
		const reader = new FileReader();
		return new Promise((resolve, reject) => {
			reader.onloadend = () => {
				resolve(reader.result); // Base64 문자열 반환
			};
			reader.onerror = reject;
			reader.readAsDataURL(response.data); // Blob을 Base64로 변환
		});
	};

	useEffect(() => {
		if (invitationId && !isDataFetched) {
			// invitationId가 있을 때만 호출
			const fetchInvitationData = async () => {
				try {
					const response = await getInvitationById(invitationId);
					const invitationData = response.data.result;

					setGroomName(invitationData.groom);
					setBrideName(invitationData.bride);
					setGroomFatherName(invitationData.groomF);
					setGroomMotherName(invitationData.groomM);
					setBrideFatherName(invitationData.brideF);
					setBrideMotherName(invitationData.brideM);
					setAddress(invitationData.address);
					setAddressDetail(invitationData.extraAddress);
					setSelectedDate(new Date(invitationData.date));
					setSelectedTime(new Date(`1970-01-01T${invitationData.time}`));
					setSelectedTheme(invitationData.theme);
					setCheckedItems({
						accountInfo: invitationData.accountOption,
						rsvp: invitationData.decisionOption,
						guestbook: invitationData.guestBookOption,
					});

					if (invitationData.accountOption) {
						const bankAccounts = invitationData.bankAccounts || [];
						const groomAccount = bankAccounts.find((account) => account.side === 'GROOM') || {};
						const brideAccount = bankAccounts.find((account) => account.side === 'BRIDE') || {};

						setAccountInfo({
							bankGroom: groomAccount.bankName || '',
							accountNumGroom: groomAccount.accountNumber || '',
							accountNameGroom: groomAccount.accountHolder || '',
							bankBride: brideAccount.bankName || '',
							accountNumBride: brideAccount.accountNumber || '',
							accountNameBride: brideAccount.accountHolder || '',
						});
					} else {
						setAccountInfo({
							bankGroom: '',
							accountNumGroom: '',
							accountNameGroom: '',
							bankBride: '',
							accountNumBride: '',
							accountNameBride: '',
						});
					}

					const base64Images = await Promise.all(
						(invitationData.image || []).map((image) => fetchImageAsBase64(image.url))
					);
					setSelectedImages(base64Images); // Base64 이미지 배열로 상태 업데이트

					setSelectedImages(base64Images);
					setIsDataFetched(true);
				} catch (error) {
					console.error('청첩장 데이터 요청 오류:', error);
				}
			};

			fetchInvitationData();
		} else if (!invitationId && !isInitialSetup) {
			// 새 청첩장 생성 시 초기 상태 설정
			setContent({});
			setGroomName('');
			setBrideName('');
			setGroomFatherName('');
			setGroomMotherName('');
			setBrideFatherName('');
			setBrideMotherName('');
			setAddress('');
			setAddressDetail('');
			setSelectedDate(null);
			setSelectedTime(null);
			setSelectedImages([]);
			setCheckedItems({
				accountInfo: false,
				rsvp: false,
				guestbook: true,
			});
			setAccountInfo({
				bankGroom: '',
				accountNumGroom: '',
				accountNameGroom: '',
				bankBride: '',
				accountNumBride: '',
				accountNameBride: '',
			});

			setIsInitialSetup(true);
		}
	}, [
		invitationId,
		isDataFetched,
		setAddress,
		setAddressDetail,
		setSelectedDate,
		setSelectedTime,
		setGroomName,
		setBrideName,
		setGroomFatherName,
		setGroomMotherName,
		setBrideFatherName,
		setBrideMotherName,
		setSelectedImages,
		setSelectedTheme,
		setCheckedItems,
		setAccountInfo,
		isInitialSetup,
	]);

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
			const newContent = {
				groom: groomName,
				bride: brideName,
				groomF: groomFatherName,
				groomM: groomMotherName,
				brideF: brideFatherName,
				brideM: brideMotherName,
				address: address,
				extraAddress: addressDetail,
				date: selectedDate.toISOString().split('T')[0],
				time: formatTime(selectedTime),
				theme: selectedTheme,
			};
			setContent(newContent);

			navigate('/option-selection', {
				state: {
					invitationId,
					isDataFetched,
					accountOption: checkedItems.accountInfo,
					decisionOption: checkedItems.rsvp,
					guestBookOption: checkedItems.guestbook,
					isInitialSetup,
				},
			});
		}
	};

	const formatTime = (date) => {
		if (!date) return '00:00:00';
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		const seconds = String(date.getSeconds()).padStart(2, '0');
		return `${hours}:${minutes}:${seconds}`;
	};

	return (
		<Wrapper>
			<LogoComponent />
			<TitleBox>필수 정보</TitleBox>
			<Container>
				<NameContainer />
				<InfoContainer
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					handleAddressComplete={handleAddressComplete}
				/>
				<ImgContainer
					photos={selectedImages}
					invitationId={invitationId}
					isDataFetched={isDataFetched}
					isInitialSetup={isInitialSetup}
				/>
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

	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 8rem;
		font-size: 4rem;
	}
	@media (max-width: 480px) {
		margin-top: 8rem;
		font-size: 5rem;
	}
`;

const Container = styled.div`
	margin-top: 2.3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (min-width: 1023px) and (max-width: 1024px) {
		margin-top: 12rem;
	}
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

	@media screen and (min-width: 852px) and (max-width: 884px) {
		max-height: 80vh;
		overflow-y: auto;
	}

	@media screen and (min-width: 320px) and (max-width: 480px) {
		width: 80%;
	}
`;

const ModalHeaderBox = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (min-width: 320px) and (max-width: 480px) {
		display: none;
	}
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

	@media (max-width: 480px) {
		margin-top: 10rem;
		font-size: 2.8rem;
		width: 35rem;
	}
`;

const NavBox = styled.div`
	margin-bottom: 7.9rem;
`;
