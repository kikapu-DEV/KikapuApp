import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		loading: true,
		cart: {
			items: [],
			total: 0,
		},
	},
	reducers: {
		addItemToCart(state, action) {
			state.cart.items.push(action.payload);
			state.cart.total += action.payload.price;
			loading: false;
		},
		removeItemFromCart(state, action) {
			const itemToRemove = state.cart.items.find(
				(item) => item.id === action.payload
			);
			state.cart.items = state.cart.items.filter(
				(item) => item.id !== action.payload
			);
			state.cart.total -= itemToRemove.price;
			loading: false;
		},
	},
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
