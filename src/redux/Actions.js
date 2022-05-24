import * as actions from './ActionTypes';

export const fetchNewsAction = (news) => {
	return {
		type: actions.FETCH_NEWS,
		payload: news,
	};
};

export const addFavouriteAction = (news) => {
	return {
		type: actions.ADD_TO_FAVOURITE,
		payload: news,
	};
};

export const RemoveFromFavouriteAction = (url) => {
	return {
		type: actions.REMOVE_FROM_FAVOURITE,
		payload: url,
	};
};