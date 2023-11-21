import { View } from "react-native";
import styles from "./header.style";
import RightHeader from "../RightHeader/RightHeader";
import LeftHeader from "./leftHeader/LeftHeader";
import { images } from "../../../constants";

function Header({ user }) {
	const fetchedUser = user;
	console.log(fetchedUser)
	return (
		<View style={styles.container}>
			{fetchedUser ? (
				<>
					<LeftHeader userName={`${user.profile.firstName} ${user.profile.lastName}`} />
					<RightHeader
						iconUrl={fetchedUser.avatar ? fetchedUser.avatar : images.avatar1}
						dimensions='100%'
					/>
				</>
			) : (
				<>
					<LeftHeader userName='Paula' />
					<RightHeader iconUrl={images.avatar1} dimensions='100%' />
				</>
			)}
		</View>
	);
}

export default Header;
