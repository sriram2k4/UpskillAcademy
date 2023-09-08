import { userState } from "../atoms/user.js";
import { selector } from 'recoil';

const userLoading = selector({
	key: 'userLoading',
	get: ({get}) => {
		const state = get(userState);
		return state.isLoading
	}
});