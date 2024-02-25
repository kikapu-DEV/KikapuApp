import { createSlice } from "@reduxjs/toolkit";

const walletSlice = createSlice({
	name: "wallet",
	initialState: {
		loading: true,
		wallet: {
			balance: 0,
			transactions: [],
		},
	},
	reducers: {
		setWallet: (state, action) => {
			state.wallet = action.payload;
			state.loading = false;
		},
		setTransactions: (state, action) => {
			state.wallet.transactions = action.payload;
			state.loading = false;
		},
	},
});

export const { setWallet, setTransactions } = walletSlice.actions;
export default walletSlice.reducer;
