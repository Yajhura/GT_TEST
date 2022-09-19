import { LocalStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utils';

import { createSlice, current } from '@reduxjs/toolkit';

const initialState: Person[] = [];

export const favoritesSlice = createSlice({
	name: 'favorites',

	initialState: getLocalStorage(LocalStorageTypes.FAVORITES)
		? JSON.parse(localStorage.getItem(LocalStorageTypes.FAVORITES) as string)
		: initialState,

	reducers: {
		addFavorite: (state, action) => {
			setLocalStorage(LocalStorageTypes.FAVORITES, action.payload);
			return action.payload;
		},
		removeFavorites: (state, action) => {
			const filteredFavorites = current(state).filter((f: Person) => f.id !== action.payload.id);
			setLocalStorage(LocalStorageTypes.FAVORITES, filteredFavorites);
			return filteredFavorites;
		},
	},
});

export const { addFavorite, removeFavorites } = favoritesSlice.actions;
