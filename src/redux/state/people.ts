import { LocalStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utils';

import { createSlice } from '@reduxjs/toolkit';

const initialState: Person[] = [];

export const peopleSlice = createSlice({
	name: 'people',

	initialState: getLocalStorage(LocalStorageTypes.PEOPLE)
		? JSON.parse(localStorage.getItem(LocalStorageTypes.PEOPLE) as string)
		: initialState,

	reducers: {
		addPeople: (state, action) => {
			setLocalStorage('people', state);
			return action.payload;
		},
	},
});

export const { addPeople } = peopleSlice.actions;
