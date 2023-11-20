import { View } from "react-native";
import styles from "./header.style";
import RightHeader from "../RightHeader/RightHeader";
import LeftHeader from "./leftHeader/LeftHeader";
import { images } from "../../../constants";

function Header({ user }) {
	const fetchedUser = user;

	return (
		<View style={styles.container}>
			{fetchedUser ? (
				<>
					<LeftHeader userName={fetchedUser.username} />
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
