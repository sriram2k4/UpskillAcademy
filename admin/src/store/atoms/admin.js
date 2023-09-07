import {atom} from "recoil";

export const adminState = atom({
	key: 'adminState',
	default: {
		isLoading: true,
		adminUsername: localStorage.getItem('username'),
	},
});