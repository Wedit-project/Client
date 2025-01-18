import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import theme from '../../src/styles/theme';
import DaumPostcode from 'react-daum-postcode';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import LogoComponent from '../components/Logo';
import NavButton from '../components/NavButton';
import SearchSymbol from '../assets/img/material-symbols_search.svg?react';
import Calendar from '../assets/img/Calendar.svg?react';
import Clock from '../assets/img/Group.svg?react';
import PhotoPrev from '../assets/img/PhotoPrev.svg?react';
import Plus from '../assets/img/Plus.svg?react';

const EditPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [address, setAddress] = useState('');

	const handleAddressComplete = (data) => {
		setAddress(data.address);
		setIsModalOpen(false);
	};

	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedTime, setSelectedTime] = useState(null);
	const datePickerRef = useRef(null); // 날짜 선택기를 위한 ref
	const timePickerRef = useRef(null); // 시간 선택기를 위한 ref

	const handleCalendarClick = () => {
		datePickerRef.current.setOpen(true); // 날짜 선택기 열기
	};

	const handleClockClick = () => {
		timePickerRef.current.setOpen(true); // 시간 선택기 열기
	};

	const [isNextActive, setIsNextActive] = useState(false);
	const handlePrevious = () => {
		console.log('이전 버튼 클릭');
		// 이전 페이지로 이동하는 로직 추가
	};

	const handleNext = () => {
		console.log('다음 버튼 클릭');
		// 다음 페이지로 이동하는 로직 추가
	};

	//   isNextActive를 업데이트하는 로직을 추가
	//   예: 필수 정보 입력 시 isNextActive를 true로 변경

	return (
		<Wrapper>
			<LogoComponent />
			<TitleBox>필수 정보</TitleBox>
			<Container>
				<NameContainer>
					<GroomNameContainer>
						<NameBox>
							<NameLabelSpan>신랑 이름:</NameLabelSpan>
							<NameInput type="text"></NameInput>
						</NameBox>
						<NameBox>
							<NameLabelSpan>신랑 아버지 이름:</NameLabelSpan>
							<NameInput type="text"></NameInput>
						</NameBox>
						<NameBox>
							<NameLabelSpan>신랑 어머니 이름:</NameLabelSpan>
							<NameInput type="text"></NameInput>
						</NameBox>
					</GroomNameContainer>
					<BrideNameContainer>
						<NameBox>
							<NameLabelSpan>신부 이름:</NameLabelSpan>
							<NameInput type="text"></NameInput>
						</NameBox>
						<NameBox>
							<NameLabelSpan>신부 아버지 이름:</NameLabelSpan>
							<NameInput type="text"></NameInput>
						</NameBox>
						<NameBox>
							<NameLabelSpan>신부 어머니이름:</NameLabelSpan>
							<NameInput type="text"></NameInput>
						</NameBox>
					</BrideNameContainer>
				</NameContainer>
				<InfoContainer>
					<AddressContainer>
						<AddressBox>
							<AddressLabelSpan>결혼식 장소:</AddressLabelSpan>
							<Zipcode type="text" placeholder="우편번호" value={address} readOnly />
							<SearchButton onClick={() => setIsModalOpen(true)}>
								검색
								<SearchIcon />
							</SearchButton>
						</AddressBox>
						<AddressBox>
							<AddressLabelSpan>상세 주소:</AddressLabelSpan>
							<AddressInput type="text" />
						</AddressBox>
					</AddressContainer>
					<DateContainer>
						<DateBox>
							<DateLabelSpan>날짜:</DateLabelSpan>
							<DateInputBox>
								<DatePicker
									ref={datePickerRef} // ref 연결
									dateFormat="yyyy-MM-dd"
									shouldCloseOnSelect
									selected={selectedDate}
									onChange={(date) => setSelectedDate(date)}
									placeholderText="날짜를 선택해 주세요"
									customInput={<DateInput />}
								/>
								<CalendarIcon onClick={handleCalendarClick} />
							</DateInputBox>
						</DateBox>
						<DateBox>
							<DateLabelSpan>시간:</DateLabelSpan>
							<DateInputBox>
								<DatePicker
									ref={timePickerRef} // ref 연결
									dateFormat="a h시"
									locale={ko}
									showTimeSelect
									showTimeSelectOnly
									timeIntervals={60}
									shouldCloseOnSelect
									selected={selectedTime}
									onChange={(date) => setSelectedTime(date)}
									placeholderText="시간을 선택해 주세요"
									customInput={<DateInput />}
								/>
								<ClockIcon onClick={handleClockClick} />
							</DateInputBox>
						</DateBox>
					</DateContainer>
				</InfoContainer>
				<ImgContainer>
					<ImgLabelSpan>사진 첨부 (Png, Jpg 가능 / 장당 5MB 이내)</ImgLabelSpan>
					<UploadImgBox>
						<PhotoPrevIcon />
						<PhotoPrevIcon />
						<PhotoPrevIcon />
						<PhotoPrevIcon />
						<AddPhotoButton>
							<PlusIcon />
						</AddPhotoButton>
					</UploadImgBox>
				</ImgContainer>
				<CautionBox>필수 정보를 모두 입력해 주세요!</CautionBox>
				<NavBox>
					<NavButton
						onPrevious={handlePrevious}
						onNext={handleNext}
						isNextActive={isNextActive} // 다음 버튼 활성화 상태 전달
					/>
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
	letter-spacing: -0.608px;
`;

const Container = styled.div`
	margin-top: 2.3rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const NameContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const GroomNameContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const BrideNameContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 7.4rem;
`;

const NameBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.4rem;
`;

const NameLabelSpan = styled.span`
	width: 17.1rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

const AddressLabelSpan = styled.span`
	width: 14.8rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

const DateLabelSpan = styled.span`
	width: 6.1rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

const NameInput = styled.input`
	width: 35.3rem;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	border: 1px solid var(--gray_6, #a8a8a8);
	background: rgba(217, 217, 217, 0);
	color: var(--gray-900, #000);
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

const InfoContainer = styled.div`
	display: flex;
`;

const AddressContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2.4rem;
`;

const AddressBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 4.9rem;
`;

const Zipcode = styled.input`
	width: 23rem;
	padding: 1.6rem 2rem;
	margin-left: 2.4rem;
	border: none;
	border-radius: 0.5rem;
	background: rgba(182, 182, 182, 0.2);
	color: var(--gray-900, #000);
	font-family: Pretendard;
	font-size: 2rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 2.4rem;
	letter-spacing: -1px;
`;

const SearchButton = styled.button`
	display: flex;
	align-items: center;
	margin-left: 1.1rem;
	width: 11.2rem;
	padding: 1.8rem 0rem 1.8rem 3.3rem;
	border: none;
	border-radius: 0.5rem;
	background: var(--main-green, #acb66d);
	color: #fff;
	font-family: Pretendard;
	font-size: 1.5rem;
	font-weight: ${theme.font.medium.fontWeight};
	letter-spacing: -0.75px;
`;

const SearchIcon = styled(SearchSymbol)`
	margin-left: 0.5rem;
	width: 2rem;
	height: 2rem;
`;

const AddressInput = styled.input`
	width: 35.3rem;
	padding: 1rem 2rem;
	margin-left: 2.3rem;
	border-radius: 0.5rem;
	border: 1px solid var(--gray_6, #a8a8a8);
	background: rgba(217, 217, 217, 0);
	color: var(--gray-900, #000);
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
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
	background: white;
`;

const ModalHeaderBox = styled.div`
	display: flex;
	flex-direction: column;
`;

const KakaoServiceTextSpan = styled.span`
	color: var(--black, #000);
	font-family: Pretendard;
	font-size: ${theme.fontSize.xlarge};
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
	margin: 1.2rem 11.8rem 1.1rem 2.4rem;
`;

const HeaderLine = styled.hr`
	width: 90.3rem;
	height: 0.1rem;
	background: var(--black, #000);
`;

const DateContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2.2rem;
	margin-left: 8rem;
`;

const DateBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2.3rem;
`;

const DateInputBox = styled.div`
	position: relative;
`;

const DateInput = styled.input`
	width: 37rem;
	margin-left: 10.5rem;
	padding: 1.5rem 0 1.45rem 2.3rem;
	border: none;
	border-radius: 0.5rem;
	background: rgba(182, 182, 182, 0.2);
	color: var(--gray-900, #000);
	font-family: Pretendard;
	font-size: 1.5rem;
	font-weight: ${theme.font.regular.fontWeight};
	line-height: 2.6rem;
	letter-spacing: -0.75px;
`;

const CalendarIcon = styled(Calendar)`
	width: 2.9rem;
	height: 3.1rem;
	position: absolute;
	top: 50%;
	right: 2.1rem;
	transform: translateY(-50%);
	cursor: pointer;
`;

const ClockIcon = styled(Clock)`
	width: 2.9rem;
	height: 2.9rem;
	position: absolute;
	top: 50%;
	right: 2.1rem;
	transform: translateY(-50%);
	cursor: pointer;
`;

const ImgContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.8rem;
	width: 71.3%;
	align-items: flex-start;
`;

const ImgLabelSpan = styled.span`
	width: 44.5rem;
	height: 4.1rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.456px;
`;

const UploadImgBox = styled.div`
	margin-top: 1.45rem;
	display: flex;
`;

const PhotoPrevIcon = styled(PhotoPrev)`
	width: 102px;
	height: 107px;
	margin-right: 1rem;
`;

const AddPhotoButton = styled.button`
	width: 10.2rem;
	height: 10.7rem;
	border: none;
	border-radius: 0.4rem;
	background-color: #d9d9d9;
`;

const PlusIcon = styled(Plus)`
	width: 4.9rem;
	height: 5.1rem;
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
	letter-spacing: -0.456px;
`;

const NavBox = styled.div`
	margin-bottom: 7.9rem;
`;
