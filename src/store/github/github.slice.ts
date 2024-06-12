import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const LS_FAV_KEY = 'rfk';

interface IFavouriteItem {
	url: string;
	full_name: string;
}

interface GithubState {
	favourites: IFavouriteItem[];
}

const initialState: GithubState = {
	favourites: JSON.parse(
		localStorage.getItem(LS_FAV_KEY) ?? '[]'
	) as IFavouriteItem[],
};

export const githubSlice = createSlice({
	name: 'github',
	initialState,
	reducers: {
		addFavourite(state, action: PayloadAction<IFavouriteItem>) {
			const isAlreadyFavourite = state.favourites.some(
				favourite => favourite.url === action.payload.url
			);

			if (!isAlreadyFavourite) {
				state.favourites.push(action.payload);
				localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
			}
		},
		removeFavourite(state, action: PayloadAction<string>) {
			state.favourites = state.favourites.filter(f => f.url !== action.payload);
			localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites));
		},
	},
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
