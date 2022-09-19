import { Person } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { favoritesSlice, peopleSlice } from './state';

export interface Appstore {
	people: Person[];
	favorites: Person[];
}

export default configureStore<Appstore>({
	reducer: {
		people: peopleSlice.reducer,
		favorites: favoritesSlice.reducer,
	},
});
