import { useState, useEffect, createContext } from "react";
import { getUser } from "../secureStore";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [userInfo, setUserInfo] = useState(null);

	const getUserInfo = async () => {
		const user = await getUser();
		if (user) setUserInfo(user);
		setLoading(false);
	};

	useEffect(() => {
		getUserInfo();
	}, []);

	return (
		<AuthContext.Provider value={{ loading, userInfo, setUserInfo }}>
			{children}
		</AuthContext.Provider>
	);
};
