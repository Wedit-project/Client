import React, { useRef } from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import SearchSymbol from '../../assets/img/material-symbols_search.svg?react';
import Calendar from '../../assets/img/Calendar.svg?react';
import Clock from '../../assets/img/Group.svg?react';
import { useRecoilState } from 'recoil';
import {
	addressState,
	addressDetailState,
	selectedDateState,
	selectedTimeState,
} from '../../recoil/atoms';

const InfoContainer = ({ isModalOpen, setIsModalOpen, handleAddressComplete }) => {
	const [address, setAddress] = useRecoilState(addressState); // Recoil 상태 사용
	const [addressDetail, setAddressDetail] = useRecoilState(addressDetailState); // Recoil 상태 사용
	const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState); // Recoil 상태 사용
	const [selectedTime, setSelectedTime] = useRecoilState(selectedTimeState); // Recoil 상태 사용

	const datePickerRef = useRef(null);
	const timePickerRef = useRef(null);

	const handleCalendarClick = () => {
		datePickerRef.current.setOpen(true);
	};

	const handleClockClick = () => {
		timePickerRef.current.setOpen(true);
	};

	return (
		<Container>
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
					<AddressInput
						type="text"
						value={addressDetail}
						onChange={(e) => setAddressDetail(e.target.value)}
					/>
				</AddressBox>
			</AddressContainer>
			<DateContainer>
				<DateBox>
					<DateLabelSpan>날짜:</DateLabelSpan>
					<DateInputBox>
						<DatePicker
							ref={datePickerRef}
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
							ref={timePickerRef}
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
		</Container>
	);
};

export default InfoContainer;

const Container = styled.div`
	display: flex;

	@media (min-width: 480px) and (max-width: 768px) {
		flex-direction: column;
	}
	@media (max-width: 480px) {
		flex-direction: column;
	}
`;

const AddressContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2.4rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		margin-top: 5rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 6rem;
		gap: 1rem;
	}
	@media (max-width: 480px) {
		margin-top: 7rem;
		gap: 1rem;
	}
`;

const AddressBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 4.9rem;

	@media (min-width: 768px) and (max-width: 1024px) {
		margin-bottom: 4.5rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 2rem;
		margin-left: 0rem;
		margin-bottom: 0rem;
	}
	@media (max-width: 480px) {
		margin-top: 2rem;
		margin-left: 0rem;
		margin-bottom: 0rem;
	}
`;

const AddressLabelSpan = styled.span`
	width: 14.8rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		max-width: 14.8rem;
	}

	@media (min-width: 480px) and (max-width: 768px) {
		font-size: 3.6rem;
		width: 25rem;
	}
	@media (max-width: 480px) {
		font-size: 4.6rem;
		width: 38rem;
	}
`;

const Zipcode = styled.input`
	width: 23rem;
	padding: 1.6rem 2rem;
	margin-left: 2.3rem;
	border: none;
	border-radius: 0.5rem;
	background: rgba(182, 182, 182, 0.2);
	color: ${theme.colors.gray['900']};
	opacity: 0.5;
	font-family: Pretendard;
	font-size: 2rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 2.4rem;
	letter-spacing: -0.1rem;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		max-width: 25rem;
	}

	@media (max-width: 480px) {
		font-size: 3rem;
		width: 24.5rem;
	}
`;

const SearchButton = styled.button`
	display: flex;
	align-items: center;
	margin-left: 1.1rem;
	width: 11.2rem;
	padding: 1.8rem 0rem 1.8rem 3.3rem;
	border: none;
	border-radius: 0.5rem;
	background: ${theme.colors.green['main']};
	color: #fff;
	font-family: Pretendard;
	font-size: 1.5rem;
	font-weight: ${theme.font.medium.fontWeight};
	letter-spacing: -0.075rem;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		max-width: 11.2rem;
	}
	@media (max-width: 480px) {
		font-size: 2.8rem;
		width: 15rem;
	}
`;

const SearchIcon = styled(SearchSymbol)`
	margin-left: 0.5rem;
	width: 2rem;
	height: 2rem;

	@media (max-width: 480px) {
		margin-left: 1rem;
		width: 4rem;
		height: 4rem;
	}
`;

const AddressInput = styled.input`
	width: 35.3rem;
	padding: 1rem 2rem;
	margin-left: 2.3rem;
	border-radius: 0.5rem;
	border: 1px solid ${theme.colors.gray['600']};
	background: rgba(217, 217, 217, 0);
	color: ${theme.colors.gray['900']};
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		max-width: 35.3rem;
	}
	@media (max-width: 480px) {
		height: 4.5rem;
		width: 40rem;
	}
`;

const DateContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2.2rem;
	margin-left: 8rem;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		margin-left: 7.4rem;
	}

	@media (min-width: 768px) and (max-width: 1024px) {
		margin-top: 5rem;
		gap: 2rem;
	}
	@media (min-width: 480px) and (max-width: 768px) {
		margin-top: 10rem;
		margin-left: 0rem;
		gap: 1rem;
	}
	@media (max-width: 480px) {
		margin-top: 10rem;
		margin-left: 0rem;
		gap: 1rem;
	}
`;

const DateBox = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2.3rem;
`;

const DateLabelSpan = styled.span`
	width: 6.1rem;
	font-family: Pretendard;
	font-size: 2.4rem;
	font-weight: ${theme.font.medium.fontWeight};
	line-height: 3.2rem;
	letter-spacing: -0.0456rem;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		max-width: 6.1rem;
	}

	@media (min-width: 480px) and (max-width: 768px) {
		font-size: 3.6rem;
		width: 17rem;
	}
	@media (max-width: 480px) {
		font-size: 4.6rem;
		width: 30rem;
	}
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
	color: ${theme.colors.gray['900']};
	font-family: Pretendard;
	font-size: 1.5rem;
	font-weight: ${theme.font.regular.fontWeight};
	line-height: 2.6rem;
	letter-spacing: -0.075rem;

	@media screen and (min-width: 1025px) and (max-width: 1180px) {
		width: 100%;
		width: 32.5rem;
		margin-left: 12.3rem;
	}
	@media (max-width: 480px) {
		height: 4rem;
		font-size: 2.6rem;
		width: 42rem;
	}
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
