import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import walletReducer from "./walletSlice";

const rootReducer = {
	currentUser: userReducer,
	cart: cartReducer,
	wallet: walletReducer,
};

export default rootReducer;
