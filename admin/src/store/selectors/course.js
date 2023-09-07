import {courseState} from '../atoms/course.js';
import {selector} from "recoil";

export const courseDetails = selector({
	key: 'courseDetailsState',
	get: ({get}) => {
		const state = get(courseState);
		return state.course
	}
});

export const courseTitle = selector({
	key: 'courseTitleState',
	get: ({get}) => {
		const state = get(courseState);
		return state.course.title
	}
});

export const courseDescription = selector({
	key: 'courseDescriptionState',
	get: ({get}) => {
		const state = get(courseState);
		return state.course.description
	}
});

export const coursePrice = selector({
	key: 'coursePriceState',
	get: ({get}) => {
		const state = get(courseState);
		return state.course.price
	}
});

export const courseImageLink = selector({
	key: 'courseImageLinkState',
	get: ({get}) => {
		const state = get(courseState);
		return state.course.imageLink
	}
});

export const published = selector({
	key: 'publishedState',
	get: ({get}) => {
		const state = get(courseState);
		return state.course.published
	}
});