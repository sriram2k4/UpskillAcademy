import { userState } from "../atoms/user.js";
import { selector } from 'recoil';

const userName = selector({
	key: 'userName',
	get: ({get}) => {
		const state = get(userState);
		return state.userName
	}
});