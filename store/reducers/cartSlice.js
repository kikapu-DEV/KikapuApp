import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		loading: true,
		cart: {
			items: [],
		},
	},
	reducers: {
		addItemToCart(state, action) {
			const { id, quantity, price, total } = action.payload;
			const existingItem = state.cart.items.find((item) => item.id === id);

			if (existingItem) {
				// If item with the same ID is already in the cart, update its quantity and total
				existingItem.quantity = quantity;
				existingItem.price = price;
				existingItem.total = total;
			} else {
				// If the item is not in the cart, add it to the items array
				state.cart.items.push(action.payload);
			}
			// Update the loading state
			state.loading = false;
		},
		updateItemQuantity(state, action) {
			const { id, quantity, total } = action.payload;
			const existingItem = state.cart.items.find((item) => item.id === id);

			if (existingItem) {
				// If item with the same ID is already in the cart, update its quantity and total
				existingItem.quantity = quantity;
				existingItem.total = total;
			}
			// Update the loading state
			state.loading = false;
		},
		removeItemFromCart(state, action) {
			// Remove the item with the given ID from the cart
			state.cart.items = state.cart.items.filter(
				(item) => item.id !== action.payload
			);
			state.loading = false;
		},
		clearCart(state) {
			state.cart.items = [];
			state.loading = false;
		},
	},
});

export const {
	addItemToCart,
	updateItemQuantity,
	removeItemFromCart,
	clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
