import userReducer from "./userSlice";

const rootReducer = {
	currentUser: userReducer,
};

export default rootReducer;
