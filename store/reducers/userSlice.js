import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		loading: true,
		user: {},
	},
	reducers: {
		currentUser(state, action) {
			state.user = action.payload;
			loading: false;
		},
		logout(state, action) {
			state.user = {};
			loading: false;
		},
	},
});

export const { currentUser, logout } = userSlice.actions;
export default userSlice.reducer;
