import { atom } from 'recoil';

export const selectedThemeState = atom({
	key: 'selectedThemeState',
	default: null,
});

export const groomNameState = atom({
	key: 'groomNameState',
	default: '',
});

export const groomFatherNameState = atom({
	key: 'groomFatherNameState',
	default: '',
});

export const groomMotherNameState = atom({
	key: 'groomMotherNameState',
	default: '',
});

export const brideNameState = atom({
	key: 'brideNameState',
	default: '',
});

export const brideFatherNameState = atom({
	key: 'brideFatherNameState',
	default: '',
});

export const brideMotherNameState = atom({
	key: 'brideMotherNameState',
	default: '',
});

export const addressState = atom({
	key: 'addressState',
	default: '',
});

export const addressDetailState = atom({
	key: 'addressDetailState',
	default: '',
});

export const selectedDateState = atom({
	key: 'selectedDateState',
	default: null,
});

export const selectedTimeState = atom({
	key: 'selectedTimeState',
	default: null,
});

export const selectedOptionsState = atom({
	key: 'selectedOptionsState',
	default: {
		guestbook: true,
		rsvp: false,
		accountInfo: false,
	},
});

export const accountInfoState = atom({
	key: 'accountInfoState',
	default: {
		bankGroom: '',
		accountNumGroom: '',
		accountNameGroom: '',
		bankBride: '',
		accountNumBride: '',
		accountNameBride: '',
	},
});

export const contentState = atom({
	key: 'contentState',
	default: {},
});

export const selectedImagesState = atom({
	key: 'selectedImagesState',
	default: [],
});
