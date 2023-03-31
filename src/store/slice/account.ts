import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// declaring the types for our state
export type AccountState = {
	accessToken: string;
};

const initialState: AccountState = {
	accessToken: '',
};

export const AccountSlice = createSlice({
	name: 'account',
	initialState,
	reducers: {
		setAccessToken: (state, action: PayloadAction<string>) => {
			state.accessToken = action.payload;
		},
	},
});
export const { setAccessToken } = AccountSlice.actions;

export const getAccessToken = (state: RootState) => state.account.accessToken;

// exporting the reducer here, as we need to add this to the store
export default AccountSlice.reducer;
