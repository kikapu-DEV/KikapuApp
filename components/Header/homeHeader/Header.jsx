import { View } from "react-native";
import styles from "./header.style";
import RightHeader from "../RightHeader/RightHeader";
import LeftHeader from "./leftHeader/LeftHeader";
import { images } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import { getUser } from "../../../helpers/secureStore";
import { useEffect } from "react";

function Header() {
	const navigation = useNavigation();
	let user = null;

	const fetchUser = async () => {
		return await getUser();
	};

	useEffect(() => {
		fetchUser().then((userData) => {
			if (userData) {
				if (userData.profile.isEmailVerified) {
					navigation.navigate("mainApp");
				} else {
					navigation.navigate("verify");
				}
			} else {
				navigation.navigate("login");
			}

			user = userData;

			console.log("userData", user.username);
		});
	}, []);
	return (
		<View style={styles.container}>
			<LeftHeader userName='Paula' />
			<RightHeader iconUrl={images.avatar1} dimensions='100%' />
		</View>
	);
}

export default Header;
