import { adminState } from "../atoms/admin.js";
import { selector } from "recoil";

export const adminUsername = selector({
	key: 'adminUsername',
	get: ({get}) => {
		const state = get(adminState);

		return state.adminUsername;
	},
});