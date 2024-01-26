import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

const rootReducer = {
	currentUser: userReducer,
	cart: cartReducer,
};

export default rootReducer;
