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
    addItemToCart: (state, action) => {
      // state.cart.items.push(action.payload);
      // state.cart.total += action.payload.price;
      // loading: false;
      const itemInCart = state.cart.items.find(
        (item) => item.mealId === action.payload.mealId
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.items.push({ ...action.payload, quantity: 1 });
      }
      state.cart.total += action.payload.price;
      state.loading = false;
    },
    removeItemFromCart: (state, action) => {
      const itemToRemove = state.cart.items.find(
        (item) => item.id === action.payload
      );
      state.cart.items = state.cart.items.filter(
        (item) => item.id !== action.payload
      );
      state.cart.total -= itemToRemove.price * itemToRemove.quantity;
      loading: false;
    },
    incrementQuantity: (state, action) => {
      const itemInCart = state.cart.items.find(
        (item) => item.mealId === action.payload.id
      );
		itemInCart.quantity++;
		state.cart.total += itemInCart.price;
    },
    decrementQuantity: (state, action) => {
      const itemInCart = state.cart.items.find(
        (item) => item.mealId === action.payload.id
      );
      if (itemInCart === 1) {
        const removeFromcart = state.cart.items.filter(
          (item) => item.mealId !== action.payload.mealId
        );
        state.cart.items = removeFromcart;
      } else {
		  itemInCart.quantity--;
		  state.cart.total -= itemInCart.price;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
