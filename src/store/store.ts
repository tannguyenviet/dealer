import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counter';
import accountReducer from './slice/account';
export const store = configureStore({
	reducer: {
		// This is where we add reducers.
		// Since we don't have any yet, leave this empty
		counter: counterReducer,
		account: accountReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
