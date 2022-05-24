import * as actions from './ActionTypes';

const initialState = {
	news: [],
	favourite: window.localStorage.getItem('favourite') ? JSON.parse(window.localStorage.getItem('favourite')) : [],
};

export const newsReducer = (state = initialState, action) => {
	switch (action.type) {
		case actions.FETCH_NEWS:
			return {
				...state,
				news: action.payload,
			};
		case actions.ADD_TO_FAVOURITE:
			const newData = [...state.favourite, action.payload];
			window.localStorage.setItem('favourite', JSON.stringify(newData));
			return {
				...state,
				favourite: newData,
			};
		case actions.REMOVE_FROM_FAVOURITE:
			const originalFav = state.favourite;
			const filtredFav = originalFav.filter((f) => f.url !== action.payload);
			return {
				...state,
				favourite: filtredFav,
			};
		default:
			return state;
	}
};