import { adminState } from "../atoms/admin.js";
import { selector } from "recoil";

export const adminLoading = selector({
	key: 'adminLoading',
	get: ({get}) => {
		const state = get(adminState);

		return state.isLoading;
	},
});