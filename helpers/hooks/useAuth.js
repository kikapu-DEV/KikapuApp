import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuth() {
	const { loading, userInfo, setUserInfo } = useContext(AuthContext);
	return { loading, userInfo, setUserInfo };
}
